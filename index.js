module.exports = class FileFilerPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.emit.tap(' FileFilerPlugin', compilation => {
        // compilation.chunks 存放所有代码块，是一个数组
        compilation.chunks.forEach((chunk) => {
        // chunk 代表一个代码块
          chunk.files.forEach(function(filename) {
            // compilation.assets 存放当前所有即将输出的资源，是一个对象
            // let regex = /\.scss$/;
            let regex = this.options.deleteFileReg
            if (regex.test(filename)) {
              delete compilation.assets[filename];
            }
          });
        });
      })
    }
};