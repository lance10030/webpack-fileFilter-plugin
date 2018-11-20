# webpack-fileFilter-plugin
delete files match the reg during bundling
## example

```
var FileFilterPlugin = require(./index.js)
....
plugin: [
  new FileFilterPlugin({
    deleteFileReg:  /\.scss$/
  })
]
```
