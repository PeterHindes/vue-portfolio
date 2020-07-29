/*/ vue.config.js
module.exports = {
    // disable hashes in filenames
    filenameHashing: false,
    // delete HTML related webpack plugins
    chainWebpack: config => {
      //config.plugins.delete('html')
      config.plugins.exports('preload')
      config.plugins.exports('prefetch')
    }
  }*/