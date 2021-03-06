//vue.config.js
module.exports = {
    configureWebpack: {
        devServer: {
            watchOptions: {
                poll: true
            }
        }
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();
    
        svgRule
            .use('vue-loader')
            .loader('vue-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
        
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "ロケット打ち上げを観る集会 - Virtual Rocket Watching";
                return args;
            })
    }
}