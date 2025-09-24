import * as jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecretkey"; // ⚠️ store securely

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" }); // 7-day validity
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
