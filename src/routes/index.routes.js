import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.cookie("foo", "bar", { sameSite: "none", secure: true });
  res.render("index");
});
router.get("/programacion", (req, res) => {
  res.render("programacion");
});

router.get("/noticias", (req, res) => {
  res.render("noticias");
});

router.get("/ranking", (req, res) => {
  res.render("ranking");
});

export default router;
