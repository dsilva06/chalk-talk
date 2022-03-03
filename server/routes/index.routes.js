const router = require("express").Router();
const authRoutes = require("./auth.routes");
const postsRoutes = require("./posts.routes")
const betsRoutes = require("./bets.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.use("/auth", authRoutes);
router.use("/posts", postsRoutes);
router.use("/bets", betsRoutes);

module.exports = router;
