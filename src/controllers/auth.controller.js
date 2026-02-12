const UserService = require("../services/user.service");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Intento de login:", email);

    const user = await UserService.login(email, password);

    console.log("Login exitoso:", email);
    res.json(user);
  } catch (error) {
    console.error("Error en login:", error.message);
    res.status(401).json({ message: error.message });
  }
};
