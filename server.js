/*
  1. npm init
  2. npm install express@latest --save
  3. create server.js and create public folder
  4. include babel-core, react.js and react-dom.js inside index.html
  5. create app.jsx react file to implement React.render()
  6. add react plugin on Atom editor
  7. create react component
  8. Learn Props <= pass argument to component
  9. learn how to make event and callback
 10. learn component state
 11. split one component into two
 12. how to pass argument from parent component to child components using props
 13. Install webpack - bundle your assets - css, scripts, images - npm install -g webpack@latest
     webpack -h for test
 14. sudo npm install --save react@latest react-dom@latest
 15. sudo npm install --save-dev webpack@latest babel-core@latest babel-loader@latest babel-preset-es2015@latest babel-preset-react@latest
 16. Generate the bundle.js - create app.js and webpack ./public/app.js ./public/bundle.js
 17. Create webpack.config file
 18. Separate all components in separate files
*/
var express = require('express');

// Create our app
var app = express();

// app.use as a middleware
app.use(express.static('public'));

app.listen(3001, function () {
  console.log('Express server is up on port 3001');
});
