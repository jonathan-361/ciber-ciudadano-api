module.exports = (req, res, next) => {
  const { name, last_name, email, password, birth_date } = req.body;

  if (!name || !last_name || !email || !password || !birth_date) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  next();
};
