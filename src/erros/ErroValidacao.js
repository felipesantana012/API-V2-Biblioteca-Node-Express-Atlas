import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mensagensErro = Object.values(erro.errors).map(itemErro => itemErro.message).join("; ");
    super(`Erros encontrados: ${mensagensErro}`);
  }
}


export default ErroValidacao;