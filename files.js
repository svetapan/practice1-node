const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const dataValidator = require("./helpers/dataValidator");
const checkExtension = require("./helpers/checkExtension");

const createFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };

  const result = dataValidator(file);

  if (result.error) {
    console.log(
      chalk.red(
        `Please specify ${result.error.details[0].context.key} parametr`
      )
    );
    return;
  }

  const check = checkExtension(fileName);
  console.log(check);
  if (!check.result) {
    console.log(
      chalk.red(
        `This app doesn't support file with ${check.extension} extension`
      )
    );
  }

  const filePath = path.join(__dirname, "files", fileName);

  try {
    await fs.writeFile(filePath, content, "utf-8");
    console.log(chalk.green("File is created successfully"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createFile,
};
