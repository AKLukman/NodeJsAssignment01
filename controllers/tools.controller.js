let tools = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "Hammer2" },
  { id: 3, name: "Hammer3" },
  { id: 4, name: "Hammer3" },
  { id: 5, name: "Hammer3" },
  { id: 6, name: "Hammer3" },
  { id: 7, name: "Hammer3" },
  { id: 8, name: "Hammer3" },
  { id: 9, name: "Hammer3" },
  { id: 10, name: "Hammer3" },
  { id: 11, name: "Hammer3" },
  { id: 12, name: "Hammer3" },
];

// const random = Math.floor(Math.random() * tools.length);
// console.log(tools[random]);
module.exports.getRandomUser = (req, res, next) => {
  res.json(tools[Math.floor(Math.random() * tools.length)]);
};

module.exports.getAllUser = (req, res, next) => {
  const { limit } = req.query;
  res.json(tools.slice(0, limit));
};

module.exports.savePost = (req, res) => {
  tools.push(req.body);
  res.send(tools);
};

module.exports.updateUser = (req, res, next) => {
  res.send("Updated");
};

// ager
module.exports.getToolDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const filter = {_id: id};
  const foundTool = tools.find((tool) => tool.id === Number(id));
  res.status(200).send({
    success: true,
    messages: "Success",
    data: foundTool,
  });
  // res.status(500).send({
  //   success: false,
  //   error: "Internal server error."
  // });
};

module.exports.updateTool = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { _id: id };
  const newDtaa = tools.find((tool) => tool.id === Number(id));
  newDtaa.id = id;
  newDtaa.name = req.body.name;
  res.send(newDtaa);
};

module.exports.deleteTool = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  tools = tools.filter((tool) => tool.id !== Number(id));

  res.send(tools);
};
