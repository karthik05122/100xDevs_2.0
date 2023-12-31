async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;
  
    async function userExists(username, password) {
      const existingUser = await User.findOne({ username: username, password: password });
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

module.exports = userMiddleware;