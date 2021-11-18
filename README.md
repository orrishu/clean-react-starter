# clean-react-starter
A clean starter for react application, with router, translations, css-modules and api connection.  
Using webpack-dev server for development with hot-reloading enabled.  

This app is a legacy repo, usage of https://github.com/orrishu/clean-react-starter-hooks is preffered.  
I keep this repo updated to allow maintaining old code base of react class components when it cannot be upgraded.

## updated 18/11/2021 for versions:
react 17.0.2;  
react-router 5.2.1;  
~~babel-plugin-react-css-modules~~  
changed babel-plugin-react-css-modules to **[@dr.pogodin/babel-plugin-react-css-modules](https://github.com/birdofpreyru/babel-plugin-react-css-modules)**, version 6.5.3.  
this is due to webpack 5 upgrade that caused problems with the hash of cssmodules:   
css-loader hash was different than the one created by babel-plugin-react-css-modules.  
(babel-plugin-react-css-modules => converts styleName to class with module namespaces; css-loader creates the css file.)  
mobx 4.13.0 (to allow compile for IE, cannot use mobx 5).  
note: use sass-loader ^10.0.0 due to issues on npm start.  
removed "node-sass": "^5.0.0" as it is not in use and failed on node 16.3.0  


### notes about obsolete packages:  
Since this repo is class-components based and is already obsolete,  
I needed to stay on older versions of the following:  
- mobx version 4.13.0;
- react-router version 5.2.1; 
- history version 4.10.1 (if uograded, routing via mobx will not work) .  


### upgraded to webpack 5 (5.64.1, 18/11/2021)
I suffered some unpleasant issues with cssmodules.  
see above for @dr.pogodin plugin that fixed the issue.  


### notes about css:
On dev mode, style-loader can replace MiniCssExtractPlugin to allow style tags in head, instead of css file.  
**Important:** css-loader version must match @dr.pogodin/babel-plugin-react-css-modules fork.  
It is possible that after npm install or npm update, need to update to @latest both packages so css will work.  

prerequisites
------------
```
node >= 12.6.0;
updated for node version 16.13.0, start and rebuild scripts working as expected.
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

