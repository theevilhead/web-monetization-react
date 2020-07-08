const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/.cache/dev-404-page.js"))),
  "component---pages-index-mdx": hot(preferDefault(require("/Volumes/Vulture/Works/web-monetization-react/packages/docs/pages/index.mdx"))),
  "component---readme-md": hot(preferDefault(require("/Volumes/Vulture/Works/web-monetization-react/packages/docs/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/Vulture/Works/web-monetization-react/packages/docs/.docz/src/pages/404.js")))
}

