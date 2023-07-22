const checkExtension = (fileName) => {
  const EXTENSIONS = ["js", "json", "html", "css", "txt"];

  const extension = fileName.split(".").pop();
  const result = EXTENSIONS.includes(extension);

  const file = {
    extension: extension,
    result: result,
  };

  console.log(file);
  return file;
};

module.exports = checkExtension;
