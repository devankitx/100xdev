import jwt from "jsonwebtoken";
const JWT_SECERT = "FEURHOUWR";

function auth(req, res, next) {
  const token = req.header.token;

  const response = jwt.verify(token, JWT_SECERT);

  if (response) {
    req.userId = response.userId;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
}

module.exports = {
  auth,
  JWT_SECERT,
};
