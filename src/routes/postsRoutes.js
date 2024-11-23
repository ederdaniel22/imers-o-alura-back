import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem} from "../controllers/postsController.js";

// Configuração no Windows para escrever corretamente o nome dos objetos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
})
// Até aqui, se for no linux só precisa da linha abaixo sem o storage
const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
   // Habilita o parsing de JSON nas requisições
   app.use(express.json());
   // Rota GET para obter todos os posts
   app.get("/posts", listarPosts);
   // Rota para criar posts
   app.post("/posts", postarNovoPost);
   app.post("/upload", upload.single("imagem"), uploadImagem)
}
export default routes;

