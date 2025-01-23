import jwt from "jsonwebtoken";

const JWT_SECRET = "s3cret";

function auth(req, res, next) {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
}

export { auth, JWT_SECRET };
