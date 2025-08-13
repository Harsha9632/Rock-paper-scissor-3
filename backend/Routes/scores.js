const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/:username', async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user.scores);
});

router.post('/:username', async (req, res) => {
  const { yourScore, computerScore } = req.body;
  const user = await User.findOneAndUpdate(
    { username: req.params.username },
    { scores: { yourScore, computerScore } },
    { new: true }
  );
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user.scores);
});

module.exports = router;
