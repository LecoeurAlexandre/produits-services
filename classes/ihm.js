import Product from "./product.js";
import Service from "./service.js";


export class Ihm {
    constructor(formulaire,tableauProduct, tableauService){
        this.products = [];
        this.services = [];
        this.formulaire = formulaire;
        this.tableauProduct = tableauProduct;
        this.tableauService = tableauService;
    }

    demarrer(){
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
            this.ajouter();
        })
    }

    ajouter(){
        // Récupérer les champs et créer un produit
        const type = this.formulaire.querySelector("input[name='sort']:checked").value;
        const title = this.formulaire.querySelector("input[name='title']").value;
        const price = this.formulaire.querySelector("input[name='price']").value;
        const description = this.formulaire.querySelector("textarea[name='description']").value;
        if (type==="Produit") {
            const stock = this.formulaire.querySelector("input[name='stock']").value;
            const product = new Product(title,price,description,stock);
            this.products.push(product);
            this.afficher(product);
        } else {
            const domain = this.formulaire.querySelector("input[name='domain']").value;
            console.log(domain)
            const service = new Service(title,price,description,domain);
            this.products.push(service);
            this.afficher(service);
        } 
    }

    afficher(p){
        if (p.stock) {
        // Ajouter un produit à l'affichage HTML
        this.tableauProduct.innerHTML += `<tr>
        <td>${p.title}</td>
        <td>${p.price}</td>
        <td>${p.description}</td>
        <td>${p.stock}</td>
        </tr>
        `
        } else {
        // Ajouter un service à l'affichage HTML
        this.tableauService.innerHTML += `<tr>
        <td>${p.title}</td>
        <td>${p.price}</td>
        <td>${p.description}</td>
        <td>${p.domain}</td>
        </tr>
        `
        };
    };
};
