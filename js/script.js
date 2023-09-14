const listaSpesa = ["uova", "latte", "pasta", "frutta", "verdura", "carne"];

let indice = 0;
const ul = document.querySelector("ul");
const li = document.querySelector("li");


while(indice < listaSpesa.length){
  const prodotti = listaSpesa[indice];
  ul.append(li)
  li.append(prodotti)

  indice++
}

console.log(listaSpesa[indice])
