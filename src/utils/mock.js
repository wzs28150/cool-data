import * as path from "path";
import * as http from 'http';
import url from 'url';
import { files } from "node-dir";
import { ViteDevServer, Plugin, Connect } from 'vite';

const mockDir = path.resolve(__dirname, '../.././mock');

/**
 * 解析post请求参数
 * @param req - 请求对象
 */
export function bodyParse(req) {
    return new Promise(resolve => {
      let data = ''
      let jsonStr = '';
      req.on('data', chunk => {
        data += chunk
      })
      req.on('end', () => {
        try {
            jsonStr = JSON.parse(data);
        } catch (err) {
            jsonStr = '';
        }
        resolve(jsonStr);
      })
    })
}

/**
 * 删除 mock 文件缓存
 * @author wzs
 */
export function unRegisterMock(mockDirPath = mockDir) {
    Object.keys(require.cache).forEach(i => {
      if (i.includes(mockDirPath)) {
        delete require.cache[require.resolve(i)]
      }
    })
}

/**
 * 加载所有mock文件内容
 * @author wzs
 */
export function loadAllMock(mockDirPath = mockDir) {
    const mocks = [];
    const data = files(mockDirPath, {
      sync: true
    })
    .filter(function(file) {
      return file.match(/\.js$/)
    })
    .map(function(file) {
        // console.log('.....file....', file);
        try {
            return require(file);
        } catch (error) {
            console.log('>>> mock ', error)            
        }        
    });

   for (let index = 0, len = data.length; index < len; index++) {
       const item = data[index];
       for(let key  in item){
            const keys = key.replace(/(^\s*)|(\s*$)/g, '').split(' ');
            let ajaxType = 'get';
            let ajaxUrl = '';
            if(keys.length<2) {
                ajaxUrl = keys[0];
            } else {
                ajaxType = keys[0].toLowerCase();
                ajaxUrl = keys[1];
                if(!['get','post','put','patch','delete','head','options'].includes(ajaxType)) {
                    ajaxType = 'get';
                }
            }
            if(typeof item[key] === 'function') {
                mocks[ajaxType + ' ' + ajaxUrl] = item[key];
            }
            
        }     
   }

   return mocks;
}

/**
 * Mock Vite Plugin
 * @author wzs
 */
export function vitePluginMock() {

    let mocksCache = loadAllMock();

    return {
        name: 'vite-plugin-mock',
        configureServer(server) { 
            server.watcher.on("all",(eventName, filePath)=> {
                if (eventName === 'change' || eventName === 'add' || eventName === 'unlink') {
                    try {
                        if(filePath.replace(mockDir, '') !== filePath) {
                            unRegisterMock();
                            mocksCache = loadAllMock();
                            server.config.logger.info(`  >>> Mock Server hot reload success! changed  ${filePath}`);
                        }
                    } catch(error) {
                        server.config.logger.error(`  >>> Mock Server hot reload error! ${error}`);
                    }
                }                
            });
            server.middlewares.use(async (req ,res, next)=> {    
                
                if(req.url && req.method) {
                    const reqMethod = req.method.toLowerCase();
                    const queryParams = url.parse(req.url,true);                   
                    const reqUrl = reqMethod!=='get' ? req.url : (queryParams.pathname || '');                   
                    const reqQuery = queryParams.query || {};
                    const reqBody = reqMethod ==='post' ? await bodyParse(req) : {} ;

                    if(mocksCache[`${reqMethod} ${reqUrl}`]) {
                        mocksCache[`${reqMethod} ${reqUrl}`]({ 
                            headers: req.headers, 
                            body: reqBody, 
                            query: reqQuery
                        }, { 
                            send: (data, statusCode = 200)=> {
                                res.setHeader('Content-Type', 'application/json');
                                res.statusCode = statusCode;
                                res.end(JSON.stringify(data));
                            }
                        })
                        return;
                    }   
                    
                    const reqUrlEndAsterisk = reqUrl.substring(0, reqUrl.lastIndexOf('/')) + '/*';
                    if(mocksCache[`${reqMethod} ${reqUrlEndAsterisk}`]) {
                        mocksCache[`${reqMethod} ${reqUrlEndAsterisk}`]({ 
                            headers: req.headers, 
                            body: reqBody, 
                            query: reqQuery
                        }, { 
                            send: (data, statusCode = 200)=> {
                                res.setHeader('Content-Type', 'application/json');
                                res.statusCode = statusCode;
                                res.end(JSON.stringify(data));
                            }
                        })
                        return;
                    }

                } 
        
                next();
    
            })
        }
    }
}