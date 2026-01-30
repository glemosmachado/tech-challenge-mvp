import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});