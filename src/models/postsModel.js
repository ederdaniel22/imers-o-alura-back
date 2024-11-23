import conectarAoBanco from "../config/dbConfig.js"
// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Obtém o banco de dados 'imersao-alura-backend'
    const db = conexao.db("imersao-alura-backend");
    // Obtém a coleção 'posts'
    const colecao = db.collection("posts");
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-alura-backend");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}