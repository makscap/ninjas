const { Router } = require("express");
const Todo = require("../models/Todo");
const router = Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find({}).lean();

  res.render("index", {
    nickname: "Ninja's nickname",
    real_name: "Ninja's name",
    origin_description: "Ninja's nickname",
    superpowers: "Ninja's superpowers",
    catch_phrase: "Ninja's catch_phrase",
    Images: "Ninja's Images",
    isIndex: true,
    todos,
  });
});

// =================== CREATE =========================================

router.get("/create", (req, res) => {
  res.render("create", {
    nickname: "Ninja's nickname",
    real_name: "Ninja's name",
    origin_description: "Ninja's nickname",
    superpowers: "Ninja's superpowers",
    catch_phrase: "Ninja's catch_phrase",
    Images: "Ninja's Images",
    isCreate: true,
  });
});

router.post("/create", async (req, res) => {
  const todo = new Todo({
    nickname: req.body.nickname,
    real_name: req.body.real_name,
    origin_description: req.body.origin_description,
    superpowers: req.body.superpowers,
    catch_phrase: req.body.catch_phrase,
    Images: req.body.Images,
  });

  await todo.save();
  res.redirect("/");
});

// =================== EDIT =========================================

router.get("/edit/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  res.render("edit", {
    // nickname: todo.nickname,
    // real_name: todo.real_name,
    // origin_description: todo.origin_description,
    // superpowers: todo.superpowers,
    // catch_phrase: todo.catch_phrase,
    // Images: todo.Images,
    isEdit: true,
    todo,
  });
});

router.post("/edit", async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  await todo.save();

  res.redirect("/");
});

// =================== DELETE =========================================

// router.post("/delete/:id", async (req, res, next) => {
//   const todo = Todo.findById(req.params.id);
//   delete todo;
//   res.sendStatus(200);

//   await todo.save();
//   res.redirect("/");
// });

module.exports = router;
