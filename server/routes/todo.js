const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// 기본주소: localhost:PORT/

// GET localhost:PORT/todos - show all tables (READ)
// router.get("/todos", (req, res) => {
//   Todo.findAll().then((data) => {
//     console.log(data);
//     res.send(data);
//   });
// });

router.get("/todos", async (req, res) => {
  try {
    let data = await Todo.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
  //   Todo.findAll().then((data) => {
  //     console.log(data);
  //     res.send(data);
  //   });
});

// POST localhost:PORT/todo - create a new todo (CREATE)
router.post("/todo", async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      done: req.body.done,
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
