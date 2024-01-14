const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }

    if (req.body.password) {
      hashPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashPassword;
    }

    if (req.body.name) {
      user.name = req.body.name;
    }

    if (req.body.phone) {
      user.phone = req.body.phone;
    }

    if (req.body.email) {
      user.email = req.body.email;
    }

    const updatedUser = await user.save();

    console.log(user.password);
    res.status(201).json({ message: "Cập nhật thành công" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json({ message: "Người dùng đã bị xóa" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getUserByPhone = async (req, res) => {
  const { phone } = req.params;
  try {
    const user = await User.findOne({ phone: phone });
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      res.json({ message: "Đăng nhập thành công", user });
    } else {
      res.status(401).json({ message: "Mật khẩu không đúng" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ error: "Email đã tồn tại trong hệ thống." });
    }

    const existingUserByPhone = await User.findOne({ phone });
    if (existingUserByPhone) {
      return res
        .status(400)
        .json({ error: "Số điện thoại đã tồn tại trong hệ thống." });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Mật khẩu phải có ít nhất 8 ký tự, chứa ít nhất một chữ thường, một chữ hoa, một số, và một ký tự đặc biệt.",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      phone,
      password: hashedPassword,
      email,
      watched: [],
      role: "user",
    });

    await newUser.save();

    res.status(201).json({ message: "Đăng ký thành công", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
