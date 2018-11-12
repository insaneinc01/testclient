HOW TO RUN

- git clone https://github.com/insaneinc01/testclient.git
- cd testclient
- npm install
- npm start
Please ensure the server is running at http://localhost:4000



Idea
 - A bare bones ecommerce website
 - Home page with list of categories and products
 - Click on product to see details
 - Add to cart
 - Cart page for review and checkout
 - Separate admin page with authentication
 - Add a new product or new category from the admin page

Good to have
- basic responsive for mobile or mobile first UI
- Sorting and filters
- Tags for products
- Product detail page to have random generated ratings and reviews
- Featured products section?


Design decisions
- Quick and dirty - so tachyons css (styled components might be overkill)
- Apollo client for all data in the App
- Redux - not really needed for such a simple app.. but add anyway
- JWT authentication - save token in localStorage (needed for admin role, but user accounts is another beast)
- social login - NO! FB only works with https, so no use. gmail still works from localhost

- Ok I'm beginning to realise that Redux makes things trickier with Apollo client 2. In fact Apollo client 2 is *supposed* to replace Redux and apollo cache the single source of truth. Moral of the story: apollo-link-state -> Redux Killer!
Some insights here - https://www.jaygould.co.uk/dev/2018/03/04/preact-jwt-redux-apollo-part3.html

- register serviceworker in index.js towards the end




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
