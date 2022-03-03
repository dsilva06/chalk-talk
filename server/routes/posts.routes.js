const router = require("express").Router();
const Post = require("../models/Post.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Posts");
});

router.post("/create", (req, res) => {
  Post.create({
    creator: req.body.creator,
    text: req.body.text,
  })
    .then((createdPost) => {
      res.json(createdPost);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.get("/view-posts", (req, res) => {
  Post.find()
    .then((allPosts) => {
      res.json(allPosts);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.get("/:postId/edit", (req, res) => {
  Post.findById(req.params.postId)
    .then((onePost) => {
      res.json(onePost);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.post("/:postId/edit", (req, res) => {
  Post.findByIdAndUpdate(
    req.params.postId,
    {
      text: req.body.text,
    },
    { new: true }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.post("/:postId/remove", (req, res) => {
  Post.findByIdAndRemove(req.params.postId)
    .then(
      (removedPost) => {
        res.json(removedPost);
      },
    )
    .catch((err) => {
      res.json(err.message);
    });
});

module.exports = router;
