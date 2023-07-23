const express = require("express");
const logger = require("morgan");

const router = require("./router");

const app = express();
app.use(logger("tiny"));

app.use(express.json());

app.use("/api/files", router);

app.listen(8000, () => {
  console.log("App run on 8000 port");
});

// const argv = require("yargs").argv;
// const { createFile, getFiles, getInfo } = require("./files");

// function invokeAction({ action, fileName, content }) {
//   switch (action) {
//     case "create":
//       createFile(fileName, content);
//       break;

//     case "get":
//       getFiles();
//       break;

//     case "getInfo":
//       getInfo(fileName);
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
