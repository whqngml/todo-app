const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const todoRouter = require("./routes/todo");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // 모든 서버에서 보내는 요청 수락
app.use("/", todoRouter); // 기본주소: localhost:PORT/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
