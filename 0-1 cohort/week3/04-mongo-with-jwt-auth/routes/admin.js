const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,User,Course} = require("../db")
const secret = "asdfghjkl";
const router = Router();
const jwt = require("jsonwebtoken");


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    username = req.body.username;
    password = req.body.password;


    // Check if a user with this username already exists
    const existingAdmin = await Admin.findOne({ username: username });

    if (existingAdmin) {
        return res.status(409).json({
            message: 'Admin with this username already exists'
        });
    }
await Admin.create({
    username:username,
    password:password
})

res.json({
    msg:"Admin created succesfully"
})

});


router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    


const token = jwt.sign({ username: username }, secret);
  return res.json({
    token
  });
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        description,
        price
    })
    res.json({
        msg:"Course created succesfully",courseId: newCourse._id
    })
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
});

module.exports = router;