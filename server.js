import express from "express";

const posts = [
    {
        descricao: "Foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x150/?nature,landscape",
    },
    {
        descricao: "Citação inspiradora",
        imagem: "https://picsum.photos/300/150",
    },
    {
        descricao: "Receita deliciosa",
        imagem: "https://unsplash.com/photos/food",
    },
    {
        descricao: "Meme engraçado",
        imagem: "https://imgflip.com/memegenerator",
    },
    {
        descricao: "Gráfico interessante",
        imagem: "https://www.chartjs.org/docs/latest/samples/line.html", // Note: Esta é uma página HTML, não uma imagem direta. Você precisaria capturar o conteúdo da imagem.
    }
];
// Usando Express
const app = express();

// Usando Express para transformar a resposta em JSON
app.use(express.json);

// Usando o app para indicar a porta de comunicação/execução
app.listen(3000, () => {
    console.log("Meu Deus meu Tudo!");
});

/* Criar rotas*/

app.get("/posts", (req, res)=> {
    res.status(200).json(posts);
});