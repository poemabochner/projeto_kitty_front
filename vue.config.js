const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}), 

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~bulma/sass/utilities/all"; @import "~bulma/sass/grid/all";`,
      },
    },
  },
}
