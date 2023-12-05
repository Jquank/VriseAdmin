const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ],
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('ex', resolve('src/examples'))
            .set('api', resolve('src/api'))
            .set('types', resolve('src/types'))
    }
})
