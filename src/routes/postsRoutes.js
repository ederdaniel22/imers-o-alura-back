import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

 const routes = (app) => {
    // Habilita o parsing de JSON nas requisições
    app.use(express.json());
    // Rota GET para obter todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar posts
    app.post("/posts", postarNovoPost)
}
export default routes;

