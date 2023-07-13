const repository = require('../repositories/users_repository.js');
const { compare } = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const credentials = req.body;
    const email = credentials.email;
    const password = credentials.password;
    const user = await repository.getByEmail(email);
    if (!user) {
        return res.status(404).send("user not found");
    }

    const isValid = await compare(password,user.password);

    if (!isValid) {
        return res.status(401).send("Invalid password");
    }

    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    res.status(201).json({
        token: token,
    });

}



module.exports = { login };