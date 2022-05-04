require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const uploadDocumentRouter = require("./api/documents/documents.router");

app.use(express.json());
// app.use("/upload/images", express.static("upload/images"));
app.use("/api/users", userRouter);
// app.use("/api", uploadDocumentRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server is up and running on port :", process.env.APP_PORT);
});
