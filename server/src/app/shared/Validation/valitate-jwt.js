// const { json } = require("express");
// const jwt = require("jsonwebtoken");

// const validateJWT = (req, res, next) => {
//     // leer el token

//     const token = req.header('Authorization');

//     if (!token) {
//         return res.status(401).json({
//             ok: false,
//             message: "Unauthorized"
//         });
//     }

//     try {

//         const { uid } = jwt.verify(token, process.env.JWT_SECRET);

//         console.log(uid);

//     } catch (error) {
//         res.status(401).json({
//             ok: false,
//             message: "Unauthorized"
//         });
//     }

//     next();
// }

// module.exports = {
//     validateJWT
// }