## node自定义命令demo
此仓库是node自定义命令demo，可clone下去稍改下直接用

## 运行
1. git clone https://github.com/aliarmo/node-command-demo
2. npm i
3. npm link
4. 执行自定义命令，例如：sugar s，sugar r，更多命令请看bin/sugar文件

## 自定义node命令简要步骤
1. 推荐在项目目录下建立一个bin文件夹，bin文件夹下面新建一个文件，文件开头必须要是
```
#!/usr/bin/env node
```
2. 引入[commander](https://www.npmjs.com/package/commander)包即可自定义命令，具体用法可参考这个项目bin/sugar文件
3. package.json文件里面加入如下配置
```
// sugar就是你自定义命令的名称，bin/sugar是你定义命令文件
"bin": {
    "sugar": "bin/sugar"
},
```

## 本地调试
1. 当前项目下，执行npm link即可访问你自定义的命令
2. npm unlink，解除link

## 发布
1. npm publish，发布了别人就可以通过安装你这个包使用你的命令了
