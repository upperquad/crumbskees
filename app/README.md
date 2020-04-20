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

## Developer notes

- This game is using a websocket server transmitting data between 2 served front-end part: one for desktop and one for mobile.
Go to the root folder and run `yarn start` to run the server. Then go to `app/` folder and run `yarn start` or `yarn start:fast` for debug mode to run the front-end part.

- You can then open a window on localhost:8000 to simulate the desktop part, and another small window on localhost:8000/token to simulate the phone. If you used `yarn start:fast`, the token for the mobile part should be 000 or/and 999. You can now connecting the small window with the big one and start debugging.

- The server part is located in `app.js` and `wss/`.

- The front-end aprt is located in `app/` folder and is separated in two big entities: `app/src/components/DisplayDevice/` for desktop and `app/src/components/ControlDevice` for mobile. They both share components together.

- Every changes related to the game (number of item to find per level, character colors, powers, other assets...) can be quickly done in `app/src/constants.js`

- A part of the Game is made in [Pixi.js](https://pixijs.download/dev/docs/index.html)