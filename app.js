/**
 * 入口文件
 */

/**
 * 开发依赖
 */
let path = require('path')
let util = require('./util')
let base64 = util.base64
let readSync = util.readSync
let writeSync = util.writeSync

let BUILD_DIR = 'dist' // 构建目录
let ENTRY_FILE = './node.txt' // SSD入口
let str = readSync(ENTRY_FILE)


// Map all the item include `ssd://` and serialize those items

writeSync(path.resolve(__dirname, BUILD_DIR, 'index.html'), base64(result))
