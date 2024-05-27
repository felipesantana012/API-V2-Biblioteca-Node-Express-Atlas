import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next){
  const error404 = new NaoEncontrado();
  next(error404);
}

export default manipulador404;