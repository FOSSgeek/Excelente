<div style="display:flex; width:100%; justify-content:center;"><a href="#" rel="noopener" target="_blank"><img style="height:100%;max-height:400px;" src="./excLogo.png" alt="excelente logo"></a>
</div>

# Excelente/alert component

this package is the alert component form excelente library.

## installation:

to use this alert you can download our react template by running

```bash
npx create-react-app excelente-app --template excelente-component
```

or you can setup excelente manually to do so follow these steps:

1. install tailwind css in your react.js project
2. install daisy ui plugin (tailwind css plugin)
3. specify the path of this package in tailwind css content object in your tailwind.config file to have tailwind css recognize this package
<!-- 
run this command in your react project to install this package

````bash
npm i @excelente/alert
``` -->

### 1.tailwind css
install and configure tailwind css if not installed already to do so follow official tailwind css installation guide in this link https://tailwindcss.com/docs/installation

### 2.daisy ui
install daisy ui by running this command in the root of your react project:

```bash
npm i daisyui
````

and add daisyui to your tailwind.config.js

```js
module.exports = {
  //...
  plugins: [require("daisyui")],
};
```

### 3.adding excelente path to tailwind

fist install excelente components:

```bash
npm i @excelente/components
```

or if you want specific component like alert (this package):

```bash
npm i @excelente/alert
```

to get tailwind css recognize excelente components you should add this line to your tailwind.config.js

```js
module.exports = {
  //...
  content: ["./node_modules/@excelente/**/dist/index.js"],
};
```

so the final tailwind.config.js will look something like this

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./node_modules/@excelente/**/dist/index.js"],
};
```

for more info about excelente see :
[Excelente repo ](https://github.com/fossgeek/excelente)

happy coding 🚀🚀
