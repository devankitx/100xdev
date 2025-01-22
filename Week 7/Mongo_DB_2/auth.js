import jwt from "jsonwebtoken";
const JWT_SECRET = "s3cret";

function auth(req, res, next) {
  try {
    const token = req.header.token; // Bearer Token
    if (token) {
      return res.status(401).json({ message: "token provided" });
    }

    const payload = jwt.verify(token, JWT_SECRET);
    req.userId = payload.id; // Extract user ID from the token payload
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

export { auth, JWT_SECRET };
