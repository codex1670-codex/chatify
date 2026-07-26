import express from "express"

const router = express.Router();

router.get("/signup", (rep,res) => {
    res.send("signup endpoint");
});

router.get("/login", (rep,res) => {
    res.send("login endpoint");
});

router.get("/logout", (rep,res) => {
    res.send("logout endpoint");
});

export default router;
