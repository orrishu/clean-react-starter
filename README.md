# clean-react-starter
a clean starter for react application, with router, translations, css-modules and api connection.

using webpack-dev server for development with hot-reloading enabled.

## updated 17/06/2021 for versions:
react 16.12.0;  
react-router 5.1.2;  
~~babel-plugin-react-css-modules~~  
changed babel-plugin-react-css-modules to **[@dr.pogodin/babel-plugin-react-css-modules](https://github.com/birdofpreyru/babel-plugin-react-css-modules)**, version 6.1.1.  
this is due to webpack 5 upgrade that caused problems with the hash of cssmodules:   
css-loader hash was different than the one created by babel-plugin-react-css-modules.  
(babel-plugin-react-css-modules => converts styleName to class with module namespaces;   
css-loader creates the css file.)
mobx 4.13.0 (to allow compile for IE, cannot use mobx 5).
note: use sass-loader ^10.0.0 due to issues on npm start.
removed "node-sass": "^5.0.0" as it is not in use and failed on node 16.3.0

### upgraded to webpack 5 (5.35.0, 10/06/2021)
I suffered some unpleasant issues with cssmodules.  
see above for @dr.pogodin plugin that fixed the issue.

prerequisites
------------
```
node >= 12.6.0;
updated for node version 16.3.0, start and rebuild scripts working as expected.
```
development
-----------
```
npm i
npm start
```

production
----------
```
npm i
npm run rebuild
```

Then copy files created in `./dist` folder to your server.

