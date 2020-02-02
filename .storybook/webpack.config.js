const path = require('path')
const nuxtConf = require('../nuxt.config')

module.exports = ({ config }) => {
  const srcDir = `../${nuxtConf.srcDir || ''}`

  config.module.rules.push({
    test: /\.s?css$/,
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './.storybook/',
          },
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  })

  const fileLoader = config.module.rules.find(loader => loader.query && loader.query.name)
  // removes svg from the list
  fileLoader.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
  fileLoader.query = {} // avoid file renaming

  config.module.rules.push({
    test: /\.svg$/,
    loader: 'vue-svg-loader',
  })

  Object.assign(config.resolve.alias, {
    '@': path.resolve(__dirname, srcDir),
  })

  return config
}
