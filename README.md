# clean-react-starter
a clean starter for react application, with router, translations, css-modules and api connection.

using webpack-dev server for development with hot-reloading enabled.

updated 25/02/2020 for versions:
------------
```
react 16.12.0; 
react-router 5.1.2; 
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

