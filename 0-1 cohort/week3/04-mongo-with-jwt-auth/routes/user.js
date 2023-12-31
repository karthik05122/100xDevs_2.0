const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const secret = 'asdfghjkl';


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    username = req.body.username;
    password = req.body.password;


    // Check if a user with this username already exists
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
        return res.status(409).json({
            message: 'Admin with this username already exists'
        });
    }
await User.create({
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    try {
        const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    });
    res.json({
        message: "Purchase complete!"
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
    });}

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        // Implement fetching purchased courses logic
        const user = await User.findOne({
            username: req.headers.username
        });

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        const courses = await Course.find({
            _id: {
                "$in": user.purchasedCourses || [] // Use an empty array as a default if purchasedCourses is null or undefined
            }
        });

        res.json({
            courses: courses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
});

//6591a6b8d13a8691421e3f29 course id

module.exports = router