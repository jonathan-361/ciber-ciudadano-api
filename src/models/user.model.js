const db = require("../config/db");

const UserModel = {
  async create(user) {
    const query = `
      INSERT INTO users 
      (name, last_name, email, password, birth_date)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      user.name,
      user.last_name,
      user.email,
      user.password,
      user.birth_date,
    ]);

    return result;
  },

  async findByEmail(email) {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  },

  async getAll() {
    const [rows] = await db.execute(
      "SELECT id, name, last_name, email, birth_date, created_at FROM users",
    );
    return rows;
  },
};

module.exports = UserModel;
