// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const axios = require('axios')

const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  // api.loadSource(async actions => {
  //   const { data } = await axios.get('http://localhost:1337/packages')

  //   const collection = actions.addCollection({
  //     typeName: 'Packages'
  //   })

  //   for (const package of data) {
  //     collection.addNode({
  //       id: package.id,
  //       title: package.title,
  //       content: package.content,
  //       price: package.price
  //     })
  //   }
  // })
}
