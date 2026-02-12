const UserService = require("../services/user.service");
const UserModel = require("../models/user.model");

exports.register = async (req, res) => {
  try {
    const { name, last_name, email, password, birth_date } = req.body;

    await UserService.register({
      name,
      last_name,
      email,
      password,
      birth_date,
    });

    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.login(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await UserModel.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error interno" });
  }
};
