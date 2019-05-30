module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "website",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Antoine Renault portfolio"
      },
      {
        property: "og:type",
        content: "website"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  modules: [
    [
      '@nuxtjs/style-resources',
    ]
  ],
  styleResources: {
    // your settings here
    css: ["normalize.css", ],
    scss: ["@/assets/scss/base.scss"],
    less: [],
    stylus: []
  },
  
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  generate: {
    subFolders: false,
    routes: [
      "/projects",
      "/projects/entourage",
      "/projects/bootstrap-magic",
      "/projects/mashup-template",
      "/projects/le-top-100"
    ]
  }
};
