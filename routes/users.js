import express from "express";
const router = express.Router();

router.use(logger)

//* router.get("/users", (req, res) => { YOU CAN ALSO USE LIKE THIS  
router.get("/", (req, res) => {
    console.log(req.query.name) //* IF YOU ADD THIS IN YOUR API /USERS?NAMES=RANDOM NAEM IT WILL SHOW IN ON  TERMENAL http://localhost:3000/users?names=Johan
    res.send("User List")
})

//* router.get("/users/new", (req, res) => { YOU CAN ALSO USE LIKE THIS
// res.send("User New from")
router.get("/new", (req, res) => {
    res.render("users/new")
    // res.render("users/new", { firstName: "Test" })
})


router.post('/', (req, res) => {
    // const isVlaid = true
    const isVlaid = false
    if (isVlaid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error");
        res.render("users/new", { firstName: req.body.firstName })
        // res.render("users/new") //* BAD USER EXPRENCES
    }
    // console.log(req.body.firstName)
    // res.send('YOLO')
    // res.send("Create User")
})

//* THIS IS HOW YOU CAN CHAIN THE ROUTES
router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);

        res.send(`GET User With ID ${req.params.id}`)
        // console.log(req.user); //* THIS WILL SHOW IN THE USER NAME USING THERE ARR NUM 
        // req.params.id
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


export default router
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



