module.exports = [
  {
    src: [
      {
        components: [
          { common: ['Common.component.jsx'] },
          { static: ['About.component.jsx'] },
          'Routes.component.jsx',
          'Home.component.jsx'
        ]
      },
      { actions: ['actionTypes.js'] },
      { reducers: ['root.reducer.js'] },
      { utils: ['helper.js'] },
      'index.jsx',
      'store.js'
    ]
  },
  {
    dist: [
      { css: ['style.css'] },
      { js: ['script.js'] },
      { vendor: ['vendor.txt'] },
      { images: ['images.txt'] },
      'index.html'
    ]
  },
  {
    test: [
      { actions: ['actionTypes.spec.js'] },
      { reducers: ['root.reducer.spec.js'] },
      { components: ['Home.component.spec.js'] },
      { e2e: ['e2e.txt'] },
      'helper.js'
    ]
  }
];
