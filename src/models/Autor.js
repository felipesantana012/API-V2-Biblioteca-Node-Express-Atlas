import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String,
      required: [true, "Campo nome é Obrigatorio"]
    },
    nacionalidade: {type: String,
      validate: {             
        validator: (valor) => validarNacionalidade(valor),
        message: "A Nacionalidade {VALUE} que foi passada é Invalida"
      }
    }
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;


// função de validações perconalizadas
function validarNacionalidade(valor){
  if(valor.toLowerCase() === "brasil" || valor.toLowerCase() === "espanha" ){
    return true;
  }else{
    return false;
  }
  
}

