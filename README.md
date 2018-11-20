# webpack-fileFilter-plugin
delete files match the reg during bundling
## exsample

```
var FileFilterPlugin = require(./index.js)
....
plugin: [
  new FileFilterPlugin({
    deleteFileReg:  /\.scss$/
  })
]
```
