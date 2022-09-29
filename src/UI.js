/**
 * User Interface Class
 */
export class UI {
  /**
   * Add a New Product
   * @param {Object} usuario A new product Object
   */
  addProduct(usuario) {

    
    // proceso(horas, coste)
    

    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Usuario</strong>: ${usuario.name} -
                    <strong>Cedula</strong>: ${usuario.cedula} - 
                    <strong>Horas Trabajadas</strong>: ${usuario.horas} - 
                    <strong>Costo de la hora</strong>: ${usuario.coste} -   
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  

  /**
   * Reset Form Values
   */
  
  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Usuario eliminado con éxito", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // mostrar en el DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insertar un mensaje en UI
    container.insertBefore(div, app);

    // Remover el mensaje despues 3 segundos
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
