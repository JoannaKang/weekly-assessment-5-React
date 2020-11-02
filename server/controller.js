const VoteInfo = require('./voteinfo');

exports.voteListCreate = async (req, res) => {
  try {
    const { title } = req.body;
    const newTopic = await VoteInfo.create({ title });
    res.status(201).send(newTopic);
  } catch (err) {
    res.sendStatus(500);
  }
}

exports.voteListDelete = async (req, res) => {
  await VoteInfo.deleteOne({
    _id: req.params.id
  });
  res.sendStatus(204);
}

exports.voteListfromDB = async (req, res) => {
  try {
    const allList = await VoteInfo.find();
    res.status(200).send(allList);
  } catch (err) {
    res.sendStatus(500);
  }
};

exports.voteUpandDown = async (req, res) => {
  let { id, dir } = req.params;
  if (dir === 'up') {
    const result = await VoteInfo.findByIdAndUpdate({ _id: id }, { $inc: { score: 1 } });
    res.send(await VoteInfo.findById(id));
  } else if (dir === 'down') {
    await VoteInfo.findByIdAndUpdate({ _id: id }, { $inc: { score: -1 } });
    res.send(await VoteInfo.findById(id));
  }
};

