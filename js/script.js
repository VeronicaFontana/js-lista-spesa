const listaSpesa = ["uova", "latte", "pasta", "frutta", "verdura", "carne"];

let indice = 0;
const ul = document.querySelector("ul");

while(indice < listaSpesa.length){
  let prodotti = listaSpesa[indice];
  const li = document.createElement("li");
  
  li.append(prodotti)
  ul.append(li)

  indice++
  
}

console.log(listaSpesa[indice])


