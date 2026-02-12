const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

const UserService = {
  async register(userData) {
    const existingUser = await UserModel.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("El correo ya está registrado");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = {
      ...userData,
      password: hashedPassword,
    };

    return await UserModel.create(newUser);
  },

  async login(email, password) {
    const user = await UserModel.findByEmail(email);

    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Credenciales inválidas");
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },
};

module.exports = UserService;
