// dekho agar mujhe react and express ka use karke ek project banana ho...
// jaha mai form ke through user se data lunga jiske liye mai koi pacakage ka use karunga...
// mai wo data server par bhejunga aur us data ko mai entry hone ke baad website mai display karunga...
// uske saath mai delete option dunga jisse wo data remove ho jayega...
// yeh pura kaam MVC architecture mai karna hoga
//accha folder structure wise kar sakte ho like routes wagera ke liye ek folder, middleware, controllers wagera ke liye folder

// - project-directory
// - server
// - controllers
// - userController.js
// - middleware
// - bodyParserMiddleware.js
// - models
// - userModel.js
// - routes
// - userRoutes.js
// - app.js
// - client
// - src
// - components
// - UserForm.js
// - UserList.js
// - App.js
// - index.js
// - package.json

npx create-react-app client
npm install express-generator -g
express --view=ejs server
