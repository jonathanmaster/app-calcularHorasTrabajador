import { Usuario } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Anular el comportamiento por defecto de los formularios
    e.preventDefault();

    // Obtención de los valores del formulario
    const name = document.getElementById("name").value,
      cedula = document.getElementById("cedula").value,
      horas = document.getElementById("horas").value,
      coste = document.getElementById("coste").value;

    // Create un nuevo proyecto de usuario
    const usuario = new Usuario(name, cedula, horas, coste);

    const proceso = () => {

      // const productList = document.getElementById("product-list");
      // const elem = document.createElement("div");

      // let total;
      if (horas >= 40) {
        let total = horas * coste;
        // elem.innerHTML = `<strong>${total}</strong>`;
        setTimeout(() => {
          alert("El coste total de horas trabjadas es de:  $" + total);
        }, 2000);
        
        return total;
      }
      if (horas >= 45) {
        let total = (horas * coste * 20) / 100;
        setTimeout(() => {
          alert("El coste total de horas trabjadas es de:  $" + total);
        }, 2000);
        return total
      }
      if (horas >= 50) {
        let total = (horas * coste * 0,4);
        setTimeout(() => {
          alert("El coste total de horas trabjadas es de:  $" + total);
        }, 2000);
        return total
      }

      // productList.appendChild(elem);

    };
    const resul = proceso(horas, coste);


    // Create una new UI instance
    const ui = new UI();
    // ui.addProduct(resul)

    // Input User Validation
    if (name === "" || cedula === "" || horas === "" || coste === "") {
      ui.showMessage("Introduzca los datos en todos los campos", "danger");
    }

    // guardar Product
    ui.addProduct(usuario);
    ui.showMessage("Usuario ingresado con exito", "éxito");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
