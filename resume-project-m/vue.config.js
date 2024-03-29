const path = require('path');

module.exports = {
    publicPath: '/apps/resume-m/',
    outputDir: '../apps/resume-m',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = "Sandy's Website";
            return args;
        });

        config.resolve.alias
            .set('@images', path.resolve(__dirname, './src/assets/images'))
            .set('@styles', path.resolve(__dirname, './src/assets/styles'))
            .set('@components', path.resolve(__dirname, './src/components'))
            .set('@views', path.resolve(__dirname, './src/views'))
            .set('@utils', path.resolve(__dirname, './src/utils'))
            .set('@data', path.resolve(__dirname, './src/data'));
    }
};
