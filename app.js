const express = require("express");
const app = express();
const db = require("./db/models");
const listRoutes = require("./routes/todo");

const PORT = 8000;
app.listen(PORT);
app.use(express.json());

app.use("/todoList", listRoutes);

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     message: err.message || "Internal Server Error",
//   });
// });

db.sequelize.sync({ alter: true });
