import express from "express";
const router = express.Router();

router.use(logger)

//* router.get("/users", (req, res) => { YOU CAN ALSO USE LIKE THIS  
router.get("/", (req, res) => {
    res.send("User List")
})

//* router.get("/users/new", (req, res) => { YOU CAN ALSO USE LIKE THIS
router.get("/new", (req, res) => {
    res.send("User New from")
})


router.post('/', (req, res) => {
    res.send("Create User")
})
//* THIS IS HOW YOU CAN CHAIN THE ROUTES
router
    .route("/:id")
    .get((req, res) => {
        // console.log(req.user); //* THIS WILL SHOW IN THE USER NAME USING THERE ARR NUM 
        // req.params.id
        res.send(`GET User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        // req.params.id
        res.send(`GET User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        // req.params.id
        res.send(`GET User With ID ${req.params.id}`)
    })

const users = [{ name: "Abrar" }, { name: "Johan" }]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
    // console.log(id)
})


function logger(req, res, next) {   //* THIS IS A MIDDLE WARE FUNCTION
    console.log(req.originalUrl)
    next()
}

// router.get('/:id', (req, res) => {
//     req.params.id
//     res.send(`GET User With ID ${req.params.id}`)
// })
// router.put('/:id', (req, res) => {
//     req.params.id
//     res.send(`GET User With ID ${req.params.id}`)
// })
// router.delete('/:id', (req, res) => {
//     req.params.id
//     res.send(`GET User With ID ${req.params.id}`)
// })

//* router.get('/:userId', (req, res) => { THIS ALSO WORKS
//*     req.params.userId
//*     res.send("User GET")
//* })


export default router

