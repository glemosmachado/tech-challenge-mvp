import { Request, Response, NextFunction } from "express";
import { Role } from "../activities/types";

declare global {
  namespace Express {
    interface Request {
      role?: Role;
    }
  }
}

export function roleMiddleware(req: Request, _: Response, next: NextFunction) {
  const role = (req.header("x-role") || "").toLowerCase();
  if (role === "teacher" || role === "student") {
    req.role = role;
  }
  next();
}

export function requireRole(role: Role) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.role !== role) {
      return res.status(403).json({ message: `Forbidden: ${role} only` });
    }
    next();
  };
}