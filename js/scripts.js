//Del div con el id box-1 imprime por consola: Todos los hijos de la lista y el item especial por separado
const elementBox1 = document.getElementById("box-1");
//console.dir(elementBox1);

console.log(
  `${elementBox1.id}${elementBox1.children[0].children[0].textContent} ${elementBox1.children[0].children[1].textContent} ${elementBox1.children[0].children[3].textContent}`
);
console.log(
  `${elementBox1.id}${elementBox1.children[0].children[2].textContent}`
);

//Del div con el id box-2 imprime por consola: El textContent y las clases del h2 y el p
const elementBox2 = document.getElementById("box-2");
console.dir(elementBox2);

console.log(
  `${elementBox2.id} ${elementBox2.children[0].children[0].textContent} ${elementBox2.children[0].children[1].textContent}`
);

//Del h2 con el id subtitle-1 imprime por consola: Su textContent; la clase del div; el textContent y la clase del p que tiene debajo.
const elementBox3 = document.getElementById("box-3");

console.log();
//Del h2 con el id subtitle-2 imprime por consola: Su textContent; el textContent y la clase de los dos span que tiene.
