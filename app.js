// Importa el módulo collectibles.js
const collectiblesObj = require("./collectibles");

const hotToys = collectiblesObj.importar("Hot Toys");
const bandai = collectiblesObj.importar("Bandai");
const starWars = collectiblesObj.importar("Star Wars");

/*console.log("Figuras de Hot Toys:", hotToys);
console.log("Figuras de Bandai:", bandai);
console.log("Figuras de Star Wars:", starWars);*/

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/* Imprime el array unificado.
console.log("Todas las figuras coleccionables:");
console.log(unifiedCollectibles);*/

const collectibles = {
  figuras: unifiedCollectibles,
  listFigures: function () {
    console.log("lista de figuras: ");
    this.figuras.forEach((figura, elemento) => {
      console.log(`figura ${elemento}`);
      console.log(`marca: ${figura.marca}`);
      console.log(`nombre: ${figura.nombre}`);
      console.log(`precio: ${figura.precio}`);
      console.log(`stock: ${figura.stock}`);
      console.log(`-------------------------`);
    });
  },
  figuresByBrand: function (marca) {
    return unifiedCollectibles.filter((figura) => figura.marca === marca);
  },
};
console.log(collectibles.listFigures());
console.log(collectibles.figuresByBrand("Star Wars"));
