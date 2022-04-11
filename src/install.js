/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2020-04-16 19:22:35
 * @LastEditors: wzs
 * @LastEditTime: 2020-04-18 19:57:57
 */
const spawn = require('cross-spawn')
const which = require('which')

module.exports = function(mirror, done) {
    let registry
    let resolved
    let pkgtool = 'cnpm'
    mirror = mirror.toLowerCase()
    if (mirror === 'yarn' || mirror === 'cnpm') {
        try {
            resolved = which.sync(mirror)
            if (resolved) pkgtool = mirror
        } catch (e) {
            console.log(e)
            return secede(spawn(pkgtool, ['install'], {stdio: 'inherit'}), done)
        }
    } else if (mirror !== 'default') {
        registry = ['--registry', require('./mirror')[mirror]]
    }
    return secede(
        spawn(pkgtool, registry ? [].concat(['install'], registry) : ['install'], {
            stdio: 'inherit'
        }), done
    )
}

function secede(line, done) {
    line.on('close', function(code) {
        if (done && typeof done === 'function') done()
        process.exit(code)
    })

    line.on('error', function(reason) {
        console.log('An error occured while executing the NPM command.', reason)
    })
}
