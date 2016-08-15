# React-Redux-Foundation Boilerplate

Minimal Boilerplate for Redux + React and Foundation application

## Usage

```
npm i
npm start
```

Open [localhost:3000](http://localhost:3000)

Use `CTRL + H` to toggle the Redux Dock Monitor

## What's in it?

Everything what you need to build an awesome Single Page Application:

- [x] [Redux](http://redux.js.org/)
- [x] [React](https://facebook.github.io/react/)
- [x] [redux-devtools](https://github.com/gaearon/redux-devtools)
- [x] [Webpack](https://webpack.github.io/)
- [x] [PostCSS](http://postcss.org/) with [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [Babel](http://babeljs.io/)
- [x] [Foundation Sites](http://foundation.zurb.com/sites/docs/)
  - Sass version

## Content

- responsive menu with a subnav
- button to create a callout (formerly known as as alert)
  - implemented in redux ([action](./src/actions/index.js), [reducer](./src/reducers/index.js), store)
- __App__ loads all important things in a clean way and the proper scope:
  - Font Awesome
  - jQuery
  - Foundation Styles and JavaScript
