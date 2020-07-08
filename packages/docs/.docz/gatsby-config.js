const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/docs/',

  siteMetadata: {
    title: 'Web Monetization React',
    description: '',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: false,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz',
        base: '/docs/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/static',
        dest: 'dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Web Monetization React',
        description: '',
        host: 'localhost',
        port: 3002,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Volumes/Vulture/Works/web-monetization-react/packages/docs',
          templates:
            '/Volumes/Vulture/Works/web-monetization-react/node_modules/docz-core/dist/templates',
          docz:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz',
          cache:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/.cache',
          app:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/app',
          appPackageJson:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/package.json',
          appTsConfig:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/tsconfig.json',
          gatsbyConfig:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/gatsby-config.js',
          gatsbyBrowser:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/gatsby-browser.js',
          gatsbyNode:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/gatsby-node.js',
          gatsbySSR:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/gatsby-ssr.js',
          importsJs:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/app/imports.js',
          rootJs:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/app/root.jsx',
          indexJs:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/app/index.jsx',
          indexHtml:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/app/index.html',
          db:
            '/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/app/db.json',
        },
        docs: './pages',
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
