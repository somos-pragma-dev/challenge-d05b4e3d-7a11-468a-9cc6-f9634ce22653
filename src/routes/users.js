const router = express.Router();
const User = require('../models/user');
const { validateUser } = require('../middlewares/validation');
const { logOperation } = require('../utils/logger');

router.post('/', validateUser, async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    logOperation('create', user);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put('/:id', validateUser, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send('User not found');
    logOperation('update', user);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('User not found');
    logOperation('delete', user);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;