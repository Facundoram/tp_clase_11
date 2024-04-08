const fs = require("fs");

function importar(nombreMarca) {
  const datos = "./datos";
  const figuras = [];

  // fs.readdirSync : para leer el contenido de "datos"
  //forEach: para iterar sobre la lista de archivos, donde "archivo", es el nombre de un archivo
  fs.readdirSync(datos).forEach((archivo) => {
    const figurasArchivo = `${datos}/${archivo}`; // le paso a figurasArchivo la ruta completa
    const figurasMarca = JSON.parse(fs.readFileSync(figurasArchivo, "utf8"));

    figuras.push(
      ...figurasMarca.filter((figura) => figura.marca === nombreMarca)
    );
  });

  return figuras;
}

module.exports = { importar };
