- Example 1

souce map测试

- Example 2

React基本打包，测试代码分离和隔离依赖(external)

- Example 3

基本的代码分离测试，打包后利用jsonp实现分离的原理，且测试配置异步模块的加载路径（默认为/)


- Example 4

测试@dummmy下所有react相关依赖，有待进一步完善和测试。


- Example 5

测试es和cjs的模块输出，以及编译后的代码差异，以及es和cjs混用的情况。

- Example 6

测试webpack下的ts打包，需要进一步拓展，目前价值性不高。

- Example 7

测试HMR, 有待继续强化，目前还不能持久化原始state。

- Example 8

multiple entires的配置默认必须使用多个HtmlWebpackPlugin，不然会将所有chunk都打入到同一个html里。


- Example 9

简单的自定义loader和plugin，使用简单的tapable api注册插件。