This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Minigames app

[storybook](https://storybook-minigames.georgewl.dev/) 
[application
This application will contain a game screen with a timer and life tracking, the goal of the game is to complete as many mini-games as possible witin the time limit, before your lives run out.

### Current features

- [ ] You lose a life if you don't complete a game succesfully.
- [ ] You will gain a life once every 10 succesful games
- [ ] the game continues until you run out of lives, at which point a "Share my score" screen will display
- [ ] minigames which use mouse-only
- [ ] minigames which use keyboard-only
- [ ] minigames which use keyboard and mouse

### Possible future features

- [ ] minigames which use microphone
- [ ] minigames which use camera
- [ ] Game replay, which replays a screen recording of the gameplay

## Development Process

### pre-release
until version 1.0.0 all development pushed directly onto `main` branch 

### post-release
1. all new dev must be in a new branch
2. tested (manually and automated) 
4. netlify will automatically build the branch to a temporary hosted URL, check the hosted version has no issues
5. merge into `main` if certain no issues
6. netlify will automatically build onto the project URL

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`

Runs storybook (a framework for mocking and documentating UI components) in the development mode.\
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits to files which are imported into storybook.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build-storybook`

Builds the storybook documentation app for production to the `storybook-static` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint-fix`

Automatically fixes all code which can automatically be fixed, so it fits the coding standards assigned in the `.eslintrc.js` file
