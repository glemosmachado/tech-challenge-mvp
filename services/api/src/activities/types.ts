export type Role = "teacher" | "student";
export type Subject = "math" | "portuguese";
export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  prompt: string;
  options?: string[];
  answer?: string;
  difficulty: Difficulty;
  skill: string;
}

export interface Activity {
  id: string;
  subject: Subject;
  topic: string;
  grade: number;
  questions: Question[];
  seed: number;
  status: "draft" | "published";
  createdAt: string;
}