## Instrcutions & Explanation

In the project directory, you can run:

### `yarn` or `npm install` and after run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### to test specific file run `yarn test <file-name>.test.js` or `npm test <file-name>.test.js`

### `yarn build` or `npm build`

Builds the app for production to the `build` folder.<br />

---

### Redux-Toolkit

is officially recommonended by Redux community. It comes with bunch helper function which simplifies Redux code.

I used this library, because it is easier to use and read (in my opinion). And it comes already with well-know packages as Redux-Thunk, Reselect and DevTools for Redux.

`configureStore` - already includes devtools enhancer as well as handles async functionality (with thunk behind the scenes)

`createAction` - replaces creating action creators + action types; can be called with payload and its can be accessed with `.type` signature

`createReducer` - takes two parameters, first is initialState and second is object with key-value pairs; keys are actions and values are functions that handles those actions.

`createSlice` - automatically creates for us actions and reducers. It takes object with reducer name, its initialState, and reducers -> action and actionHandler

---

I started the project with simple one page + one to visualise initial steps and see if I am getting any errors. After I switched to configuring the store. I went with Redux state manager, because I think it gives good control of state of an App, and handles pretty well passing and reacting to the certain state. But of course, other state management systems certainly can be used, such as Hooks + ContextAPI, GraphQL and etc.

Along with configuring the store I decided to create `entities` file; looking up the future there might be several reducers. Therefore it is easier to just include them there and keep `reducer` file clean.

To wrap up the store functinality I tested all the essential part of it.

---

For styling I used Styled-Components package, but not an CSS preprocessor. Before I used to write in SASS, and I am fairly new into Styled-Components, so I gave it a try. It can be improved in terms of structure and organisation -> Refactoring point for Future.

---

Updated React and ReactDOM, since I wanted to show that I know hooks as well. They are relatively new, but getting popular in React community. I used it to build `rating` component.

---

Tasks list to improve:

- [x] styling
- [x] hiding properly API_KEY
- [x] create interceptors to include headers
- [x] some optimisation (lazy loading, memo, error-boundary) IF application grows

---

Happy to discuss further improvements, suggestions and some decisions that I made.
