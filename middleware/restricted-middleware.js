module.exports = (req, res, next) => {
  if (req.session && req.session.loggedIn) {
    next()
  } else {
    res.status(400).json({ message: 'No session' });
  }
};
