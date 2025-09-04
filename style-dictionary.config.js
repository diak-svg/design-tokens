module.exports = {
  // Alle JSON-Dateien aus dem design-tokens Ordner einlesen
  source: ['design-tokens/**/*.json'],
  
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true // Referenzen zwischen Tokens beibehalten
          }
        }
      ]
    },
    
    // Zusätzlich: SCSS Version (falls Sie Sass nutzen)
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables'
        }
      ]
    }
  }
};
