const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
mongoose.connect('mongodb://0.0.0.0:27017/UserManagementSystem')
    .then(() => console.log(`mongodb connected.`))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', './views');

const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute');
app.use('/',adminRoute);
app.use('/',userRoute);

app.get('/', async (req,res)=>{
  res.render('home')
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
