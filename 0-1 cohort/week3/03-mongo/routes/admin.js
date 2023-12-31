const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const {Admin} = require("../db");
const {Course} = require("../db");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;


Admin.
create({
    username:username,
    password:password
});

    res.json({
        "msg":"Admin created succesfully"
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    //const globalid=1;
Course.
create({
    title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    
});
res.json({
    "msg":"Course created"
});


});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course
    .find()
    .then(courses => {
        res.json(courses);
    })
});

module.exports = router;