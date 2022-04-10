/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-10 12:30:52
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-10 16:21:51
 */
import * as path from "path";
/**
 * 自动导入 Store
 */
 export function importAllStore () {
  const modules = {};
  try {
      // 导入 @/views 下文件，包含子目录，文件名为：store.js
      const viewsRequireModules = import.meta.globEager('../views/**/store.js');
      for (const path in viewsRequireModules) {
          const modulesConent = viewsRequireModules[path];
          if(modulesConent.default) {
            const { name, ...module } = modulesConent.default; 
            // 获取 PascalCase 命名
            const modulesName = name || path.replace(/^\.\/(.*)\.\w+$/, "$1");

            modules[modulesName] = { ...module }; 
          }
      }
      
      // 导入 @/store 下文件 
      const requireModules = import.meta.globEager('../store/*.js');
      for (const path in requireModules) {
          const modulesConent = requireModules[path];
          if(modulesConent.default) {
            const { name, ...module } = modulesConent.default; 
            // 获取 PascalCase 命名
            const modulesName = name || path.replace(/^\.\/(.*)\.\w+$/, "$1");

            modules[modulesName] = { ...module }; 
          }
      }

  } catch (error) {
    console.log(error);
  }

  return modules;
}

/**
 * 验证 Store 位置
 */
 export function validateStorePath(filePath) {

  let storeDirBool = false;
  let viewsDirBool = false;

  const storePath = path.resolve(__dirname, '../store');
  const viewsPath = path.resolve(__dirname, '../views');

  storeDirBool = filePath.replace(storePath, '') !== filePath;

  const filePathViews = filePath.replace(viewsPath, '');
  if(filePathViews !== filePath) {
    viewsDirBool = filePathViews.replace('store.js', '') !== filePathViews;
  }
 
  // console.log('....validateStorePath....', storeDirBool, viewsDirBool);
  
  return storeDirBool || viewsDirBool;
}
/**
 * Stroe Vite Plugin
 */
 export function vitePluginStore() {

  return {
    name: 'vite-plugin-store',
    configureServer(server) { 
      
        server.watcher.on("all",(eventName, filePath)=> {
          
          if ((eventName === 'add' || eventName === 'unlink')) {

            if(validateStorePath(filePath)) {
              server.moduleGraph.invalidateAll();

              server.ws.send({
                type: 'full-reload',
                path: '*'
              });

              server.config.logger.info(`  >>> ${eventName} ${filePath}`);            
              server.config.logger.info(`  >>> moduleGraph invalidateAll, page reload all.`); 
            } 

          }
        })
    }
  }

}