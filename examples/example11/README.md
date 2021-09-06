`stuff` 导出了两个变量，但是只有name被使用，目的是删掉无用的代码`time`;

`usedExports`会做tree-shaking，将无用代码标记为`unused`，但它只是标记并不会删除。

在配合`optimize.minimize = true`可以开启`TerserPlugin`，就可以删除无用代码。

其实只要`production`的mode就会默认做以上所有优化，但demo是在`development` mode下演示，只为展示细节。