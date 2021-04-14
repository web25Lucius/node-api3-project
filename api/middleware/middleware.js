function logger(req, res, next) {
  console.log(`Method: ${req.method} URL: ${req.url} Time: ${new Date().toISOString()}`)
  next()
}

function validateUserId(req, res, next) {
  users.getById(req.params.id)
    .then((user) => {
      if (user) {
        req.user = user
        next()
      } else {
        return res.status(404).json({
          message: "user not found",
        })
      }

    })
    .catch((error) => {
      next(error)
    })
}

function validateUser(req, res, next) {
  
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules

module.exports = {
  logger, 
  validateUserId, 
  validateUser, 
  validatePost,

}