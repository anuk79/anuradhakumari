---
title: Configuring prettier and eslint plugins for React from scratch
author: Anuradha Kumari
published: '2020-11-15'
category: blog
topics: [Configuration, Prettier, Eslint, React]
excerpt: In this article, we are going to configure the prettier and eslint plugins for a React project from scratch.
---

We will be using [VSCode](https://medium.com/r/?url=https%3A%2F%2Fcode.visualstudio.com%2F) as the default IDE, and all of the extension links in the below section will point to VSCode extensions. If you are using any other IDE, you can find respective extensions on the internet.

Let's got through the steps one by one in the same order as below. Or, if you would like to check the final version of what we are going to discuss in the below section, go to the [GitHub repo with complete settings](https://github.com/anuk79/prettier-eslint-configuration-for-react).

Steps:

1. Create an empty folder named **react-setup** (or anything that you would like).

2. Run the below command to initialize an npm project:

``` terminal
npm init -y
```

It will create a package.json file with basic settings for us to get started with. You can always go ahead and update details in it, as per requirements.

3. Since we are going to create a [react](https://reactjs.org/) project, let's install React and ReactDOM dependencies by running the below command:

``` terminal
npm install react react-dom
```

4. It's time now to add some code. Create a src directory inside the project, add few files with code as below:

- index.html

``` html
<!DOCTYPE HTML> 
<html lang="en"> 
<head> 
<meta charset="UTF-8" /> 
<meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
<title>React prj setup</title> 
<link rel="stylesheet" href="./style.css" /> 
</head> 
<body> 
<div id="root"> The content was not rendered. </div> 
<script src="./app.js"></script> 
</body> 
</html>
```

- app.js

``` react
import React from "react"; 
import { render } from "react-dom";
const App = () => ( 
 <main> 
  <h1>Welcome</h1> 
  <p> Let's practice configuration of prettier and eslint plugins for a React application from scratch. 
  </p> 
 </main> 
);
render(<App />, document.getElementById("root"));
```

- style.css

``` css
html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 50px;
  background: 
  linear-gradient(
    45deg, 
    #d6c7ec 0%, 
    #f6d18d, 
    #eba2c4 100%);
  line-height: 1.5;
}

main {
  font-size: 1.2em;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
}

h1 {
  font-variant: small-caps;
  font-size: 2.2em;
}
```

5. Install [parcel bundler](https://parceljs.org/getting_started.html) to build the project and enable running it locally

``` terminal
npm i -D parcel-bundler
```

You can use webpack as well for it, its configuration is out of scope for this article.

6. Add a dev script in package json for starting the local dev server:

``` json
"scripts": {
  "dev": "parcel src/index.html"
}
```

**Note:** point it to the path of your index.html file. For my case, I have added it to the src directory, and hence that path. If you have it in your public directory, you need to add it as **parcel public/index.html**

7. Now let's execute the dev command in the terminal:

``` terminal
npm run start
```

You will see the local server running at URL [http://localhost:1234](http://localhost:1234). Go to this URL in the browser and you should see the content getting rendered.

8. Next, let's install [prettier](https://github.com/prettier/prettier) by running the below command:

``` terminal
npm install -D prettier
```

Here, we have used -D because we want to install prettier only as a dev dependency, and it is not required for the production version of our application.

9. After successful installation, we will see the entry for prettier being added to our package.json automatically:

``` json
"devDependencies": {
  "parcel-bundler": "^1.12.4",
  "prettier": "^2.1.2"
}
```

10. We need to add the script to format the files by running the prettier. For this, let's add a **format*** command to scripts in package.json

``` json
"format": "prettier \"src/**/*.{js,html,css}\" --write"
```

Here, we are saying that run prettier on the files with extensions js, html or css.

**--write** flag is used to actually write the formatted code into the respective file. Otherwise, when we run format, it will just output the formatted version of our file.

Go ahead and execute the format command to check if your file got formatted:

``` terminal
npm run format
```

11. By default, the files will get formatted when we run the format command on it. But what if the files could get formatted when we save the file, without needing to run the command again and again. Cool, right?

Well, we can achieve that through our IDE settings. For VSCode, follow the below steps to enable format **on save**:

- [Install prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [Open vscode settings](https://supunkavinda.blog/vscode-editing-settings-json). Search for the "save on format" option and check it.

- Search for "require config to format" and check it as well. This will format on save only if the prettier config is present for the current project, and this way we do not force our settings on all other projects which might not need the prettier.

- Add the prettier config file by creating a file named **.prettierrc** and add an empty object inside it for now, which suggests that we are going to use all the default configurations of prettier. So, our .prettierrc file is going to look like below:

``` json
{ }
```

- Now try to edit something in your app.js file and hit save. You will notice the file gets formatted automatically. That's amazing, isn't it?

12. Next, we are going to add [eslint](https://eslint.org/). Let's start by adding the eslint plugin for prettier by executing the below command:

``` terminal
npm install -D eslint eslint-config-prettier
```

After successful installation, you will notice these dependencies get added to devDependencies section in package.json

``` json
"devDependencies": {
  "eslint": "^7.13.0",
  "eslint-config-prettier": "^6.15.0",
  "parcel-bundler": "^1.12.4",
  "prettier": "^2.1.2"
}
```

13. Let's explore the [difference between prettier and eslint](https://prettier.io/docs/en/comparison.html) before moving ahead with configuring eslint.

- prettier: It is a code formatter. It deals with style issues like indentation, keyword spacing, missing semicolons, comma style, etc.
- eslint: It concerns with the code quality rules like unused variables, incorrect variable names, etc. Eslint can catch bugs in code.
- prettier and eslint complement each other, but there are some style rule conflicts between the two. This is why we have installed eslint-config-prettier. It helps in disabling all of eslint's conflicting rules automatically.

14. Let's add a file named **.eslintrc** for configuring the eslint for our project:

``` json
{
  "extends": [
    "eslint:recommended", 
    "prettier", 
    "prettier/react"
  ], 
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

15. Now, let's add the **lint** script in package json:

``` json
"lint": "eslint \"src/**/*.{js,jsx}\" --quiet"
```

We use the **quiet** flag to ignore the warnings of eslint, otherwise, it might become too noisy.

16. Let's also add the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode. If you are using any other IDE, you can check the extension for it too.

17. Now, we need to add the React specific eslint plugins. For that, we run the below command in the terminal:

``` terminal
npm install -D babel-eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import
```

Let's break it up and see what each of these do:

- [babel-eslint](https://github.com/babel/babel-eslint) : As per its Github :

ESLint's default parser and core rules only support the latest final ECMAScript standard and do not support experimental (such as new features) and non-standard (such as Flow or TypeScript types) syntax provided by Babel.

> babel-eslint is a parser that allows ESLint to run on source code that is transformed by Babel.

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) : Quoting the npm website for it:

This plugin intends to support the linting of ES2015+ (ES6+) import/export syntax, and prevent issues with the misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.

Explore the [github repo for the eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) to gain more insights.

- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) : It contains React specific linting rules for ESLint. You can check the documentation for detailed rule information.
  
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) : As the name suggests, it enforces the rules of React hooks. We need to add it only if we are using React hooks (which most of us might already be doing). Feel free to skip adding this plugin if you are by any chance not using React hooks in your project.
  
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) : It is a static AST checker for accessibility rules on JSX elements. It supports many accessibility rules and it's one of the must-have plugins for React in my opinion.
  
  Explore the [GitHub documentation of plugin](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) to learn more about the rules supported by this plugin.

18. After adding the plugins, it's time now to update the .eslintrc config file:

``` json
{
  "extends": [
    "eslint:recommended", 
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ], 
  "rules": {
    "react/prop-types": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-reps": 1  
  },
  "plugins": [
    "import", 
    "react", 
    "jsx-a11y", 
    "react-hooks"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "commonjs": true
  },
  "settings": {
    "react": {
        "version": "detect"
    }
  }
}
```

19. Now, you should start seeing lint errors or warnings as you code further.

Congratulations, you have successfully configured the basic prettier and eslint plugins for a React project. You can go ahead and add more rules as per specific project requirements. The npm website or GitHub repository of respective plugins would be the best place to explore the rules.

**Credits**: inspired from the learnings from the [Complete React v5 course](https://frontendmasters.com/courses/complete-react-v5/) by Brian Holt on frontend masters.

If you found this useful, or have any suggestions, feel free to reach out to me on [twitter](https://twitter.com/miracle_404) or [linkedin](https://www.linkedin.com/in/anuradha15/).

Wish you happy learning, keep on shining. Always remember, you are the best 🙌

---

Originally published at <https://prettier-eslint-configuration-for-react.netlify.app/>
