const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = express();

const admin = require("../controllers/adminController")

adminRoute.use(bodyParser.urlencoded({ extended: true }));
adminRoute.use(bodyParser.json());
adminRoute.set('view engine', 'ejs');
adminRoute.set('views', './views');

adminRoute.get('/admin', (req, res) => {
  res.render("adminLogin");
});

adminRoute.post('/admin', admin.authAdmin);
adminRoute.post('/accept-user', admin.acceptUser);
adminRoute.post('/delete-user', admin.deleteUser);



module.exports = adminRoute;