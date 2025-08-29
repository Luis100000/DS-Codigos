function buscarProduto(lista, nomeBuscado) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].nome === nomeBuscado) {
      return lista[i];
    }
  }
  return null;
}
