import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, "Campo titulo é Obrigatorio"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O Autor é Obrigatorio"]},
    editora: {type: String, required: [true, "Campo editoria é Obrigatorio"]},
    numeroPaginas: {type: Number,
      min:[10, "Quantidade de paginas deve estar entre 10 e 5000."],
      max:[5000, "Quantidade de paginas deve estar entre 10 e 5000."],
      required:[true, "Campo Numero de paginas é Obrigatorio"]}
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;