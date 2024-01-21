const express = require('express');
const bodyParser = require('body-parser');
const user = require("../controllers/userController")
const userRoute = express();

const multer = require('multer');
const path = require('path');
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userImages'))
    },
    filename: function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name);
    }
});
const upload = multer({storage:storage});
userRoute.use(express.static('public'));


userRoute.use(bodyParser.urlencoded({ extended: true }));
userRoute.use(bodyParser.json());
userRoute.set('view engine', 'ejs');
userRoute.set('views', './views');

userRoute.get('/user', (req, res) => {
  res.render("userLogin");
});
userRoute.post('/user', user.authUser);

userRoute.post('/create-user', user.createUser);
userRoute.post('/view-users', user.viewUsers);
userRoute.post('/update-user', upload.single('photo'), user.updateUser);



module.exports = userRoute;