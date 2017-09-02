'use strict';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'lasso-sass', // Allow Scss files to be rendered to CSS
    'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
  ],
  outputDir: __dirname + '/public', // Place all generated JS/CSS/etc. files into the "public" dir
  bundlingEnabled: isProduction, // Only enable bundling in production
  minify: isProduction, // Only minify JS and CSS code in production
  fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
  noConflict: 'cart-express'
};
