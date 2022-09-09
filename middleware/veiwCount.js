// Application level  middle ware/applicaton a kotojon view korche/api call koreche count kore rakhbe
let count = 0;

const viewCount = (req, res, next) => {
  count++;
  console.log(count);

  // res.send("tools found");
  next();
};

module.exports = viewCount;
