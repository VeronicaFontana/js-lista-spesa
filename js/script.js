const listaSpesa = ["uova", "latte", "pasta", "frutta", "verdura", "carne"];

let indice = 0;

while(indice < listaSpesa.length){
  const ul = document.querySelector("ul");
  const li = document.querySelector("li");
  const prodotti = listaSpesa[indice];

  ul.append(li)
  li.append(prodotti)

  indice++
}

console.log(listaSpesa[indice])