# clean-react-starter
a clean starter for react application, with router, translations, css-modules and api connection.

using webpack-dev server for development with hot-reloading enabled.

updated 10/06/2021 for versions:
------------
```
react 16.12.0; 
react-router 5.1.2; 
babel-plugin-react-css-modules 5.2.6; 
mobx 4.13.0 (to allow compile for IE, cannot use mobx 5).
note: use sass-loader ^10.0.0 due to issues on npm start.
```
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

