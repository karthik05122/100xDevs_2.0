const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://karthik:Handsome%402023@cluster0.ptjq1ta.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

// Middleware for parsing request bodies
app.use(bodyParser.json());

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  
    const username = req.headers.username;
    const password = req.headers.password;
  
    async function userExists(username, password) {
      const existingUser = await Admin.findOne({ username: username, password: password });
      return !!existingUser;
    }
  
    try {
      if (await userExists(username, password)) {
        next(); // User exists, continue processing the request
      } else {
        res.status(404).json({ msg: "User doesn't exist in the database" });
      }
    } catch (error) {
      // Handle any errors that occur during the database query
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  

// Admin Routes
app.post('/admin/signup', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({
        message: 'Admin created successfully'
    })
});

app.post('/admin/courses',adminMiddleware, (req, res) => {
    Course
    .create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
});

app.get('/admin/courses', (req, res) => {
    Course
        .find()
        .then(courses => {
            res.json(courses);
        })
});

// User Routes
app.post('/users/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({
        message: 'User created successfully'
    })
});

app.get('/users/courses', (req, res) => {
    Course
        .find()
        .then(courses => {
            res.json(courses);
        })
});

app.post('/users/courses/:courseId', async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    })
    res.json({
        message:"Purchase complete"
    })

});

app.get('/users/purchasedCourses', async(req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username:req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })

});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
