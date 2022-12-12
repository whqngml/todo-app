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

// PATCH localhost:PORT/todo/:todoId - edit a specific todo (UPDATE)
// 수정 성공시 true -> res.send(true)
// 수정 실패시 false -> res.send(false)
router.patch("/todo/:todoId", async (req, res) => {
  try {
    let patchTodo = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: req.params.todoId,
        },
      }
    );
    console.log(req.params);
    console.log(req.body);
    console.log(patchTodo);
    if (patchTodo == 0) {
      res.send(false);
    } else {
      res.send(true);
    }
  } catch (err) {
    res.send(err);
  }
});

router.delete("/todo/:todoId", async (req, res) => {
  try {
    let deleteTodo = await Todo.destroy({
      where: {
        id: req.params.todoId,
      },
    });
    console.log(deleteTodo);
    console.log(req.params);
    if (deleteTodo == 0) {
      res.send("삭제실패");
    } else {
      res.send("삭제성공");
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
