# clean-react-starter
a clean starter for react application, with router, translations, css-modules and api connection.

using webpack-dev server for development with hot-reloading enabled.

updated 01/08/2019 for versions:
------------
```
react 16.8.6; 
react-router 5.0.1; 
babel-plugin-react-css-modules 5.2.6; 
mobx 4.13.0 (to allow compile for IE, cannot use mobx 5).
```
prerequisites
------------
node >= 12.6.0

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

