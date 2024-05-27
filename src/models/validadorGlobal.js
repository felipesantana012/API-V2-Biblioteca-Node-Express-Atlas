
import mongoose from "mongoose";

//definindo uma propriedade para todos os campos do tipo string dos meus modelos
mongoose.Schema.Types.String.set("validate",{
  validator:(valor) => valor !== "", 
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
});