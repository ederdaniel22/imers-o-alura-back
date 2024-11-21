import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    {
        id: 1,
        descricao: "Foto de um gato",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x150/?nature,landscape",
    },
    {
        id: 3,
        descricao: "Citação inspiradora",
        imagem: "https://picsum.photos/300/150",
    },
    {
        id: 4,
        descricao: "Receita deliciosa",
        imagem: "https://unsplash.com/photos/food",
    },
    {
        id: 5,
        descricao: "Meme engraçado",
        imagem: "https://imgflip.com/memegenerator",
    },
    {
        id: 6,
        descricao: "Gráfico interessante",
        imagem: "https://www.chartjs.org/docs/latest/samples/line.html", // Note: Esta é uma página HTML, não uma imagem direta. Você precisaria capturar o conteúdo da imagem.
    }
];
// Usando Express
const app = express();

// Usando Express para transformar a resposta em JSON
app.use(express.json());

// Usando o app para indicar a porta de comunicação/execução
app.listen(3000, () => {
    console.log("Meu Deus meu Tudo!");
});

/* Criar rotas*/

app.get("/posts", (req, res)=> {
    res.status(200).json(posts);
});


// Localizando posts por id
function buscarPostsPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res)=> {
    const index = buscarPostsPorID(req.params.id)
    res.status(200).json(posts[index]);
});