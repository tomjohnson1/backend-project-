const { update } = require("lodash");
const { selectTopics } = require("../models/index");
exports.getTopics = (req, res, next) => {
  console.log("in the controller");
  selectTopics()
    .then((topics) => {
      res.status(200).send({ topics });
    })
    .catch(next);
};
