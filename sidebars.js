const generated = require("./sidebars.generated.js");
module.exports = {
  docs: [
    {
      type: "doc",
      id: "README",
    },
    ...generated["docs"],
  ],
};