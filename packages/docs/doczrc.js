// Docz config file
export default {
  base: '/docs/',
  docs: './pages',
  dest: 'dist',
  title: 'Web Monetization React',
  description: '', // TODO
  propsParser: false, // Note: Important
  public: '/static',
  port: 3002,
  themeConfig: {
    styles: {
      h1: {
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }
    }
  }
}