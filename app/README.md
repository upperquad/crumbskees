Front end app for the game

## Available Scripts

In the project directory, you can run:

### `yarn start`

To watch code change and make dev build for your local server

### `yarn frontend`

To watch code and work only in the frontend with hot reloading on a local server.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Linters

We are using [eslint](https://eslint.org/) and [prettier](https://prettier.io/) to avoid errors and enforce conventions in our styles. You can install the plugins corresponding to your favorite editor here:

- [eslint editor plugins](https://eslint.org/docs/user-guide/integrations#editors)
- [prettier editor plugins](https://prettier.io/docs/en/editors.html)

(Note for SublimeText, make sure to add the code below in your `SublimeLinter Settings - User` file.)

```
{
  "linters": {
    "eslint": {
      "env": {"PATH":"/usr/local/bin/"}
    }
  }
}
```

(If you are using SublimeText and have installed JsPrettier plugin, you can add this to **Preferences** > **Package Settings** > **JsPrettier**, so it will run eslint --fix everytime after you run prettier)
```
"prettier_cli_path": "./node_modules/.bin/prettier-eslint",
```

Feel free to change any rules you want in the `.eslintrc` files at the root otf the project.

- [eslint rules](https://eslint.org/docs/rules/)