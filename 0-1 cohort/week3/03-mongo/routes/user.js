const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");



const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://karthik:Handsome%402023@cluster0.ptjq1ta.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: Number, 
    title: String,
     description: String,
      price: Number,
       imageLink: {
        type: String,
        validate: {
          validator: function (value) {
            // Use a regular expression to validate URLs
            // This regular expression checks for URLs starting with "http://" or "https://"
            const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
            return urlPattern.test(value);
          },
          message: props => `${props.value} is not a valid URL!`,
        },
      },
        published: Boolean 
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);





// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    User.
    create({
        username:req.body.username,
        password:req.body.password
    });
    res.json({
        "msg":"User created succesfully"
    });
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic

    Course
    .find()
    .then(courses => {
        res.json(courses);
    })

});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
