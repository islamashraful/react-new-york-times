# React New York Times

This project demonstrates a **New York Times** Web application using their API. It is a simple responsive application with two screens. It has a home-page and detail-page.

**_home-page:_**

- This page by default displays all articles without any search filter applied.
- Has a search input (without submit button) that allows a user to search articles by a
  search string.
- Automatically updates the list given this search results without reloading the page.
- Has an option to order the search results by newest first or oldest first.
- Displays a detail-page when select on each single result article.

**_detail-page:_**

- Shows the article detail.
- Has functionality to navigate back to the home-page.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other third party libraries used in this applications are listed below:

- [Material-UI](https://material-ui.com/)
- [Flow](https://flow.org/)
- [axios](https://github.com/axios/axios)
- [Lodash](https://lodash.com/)
- [moment](https://momentjs.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
