
const express = require("express")
// const server = require("./server")
//require middleware
// const logger = require("")

// const welcomeRouter = require("")
// const postRouter = require("")
// const userRouter = require("")

const server = express()
const port = 1234

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
