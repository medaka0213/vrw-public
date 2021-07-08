//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "ロケット打ち上げを観る集会 - Virtual Rocket Watching";
                return args;
            })
    }
}