// Exemple de liste de produits
const produits = [
    { id: 1, nom: "Produit 1", prix: 10.99 },
    { id: 2, nom: "Produit 2", prix: 8.99 },
    // Ajoutez d'autres produits si nécessaire
];

// Panier
let panier = [];

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(idProduit) {
    // Trouver le produit dans la liste des produits
    const produitSelectionne = produits.find(produit => produit.id === idProduit);

    // Vérifier si le produit existe
    if (produitSelectionne) {
        // Ajouter le produit au panier
        panier.push(produitSelectionne);
        // Mettre à jour l'affichage du panier
        mettreAJourPanier();
    }
}

// Fonction pour mettre à jour l'affichage du panier
function mettreAJourPanier() {
    const panierListe = document.getElementById("panier-liste");
    const totalPrixElement = document.getElementById("total-prix");

    // Efface le contenu actuel du panier
    panierListe.innerHTML = "";

    // Calcule le total du panier
    let totalPrix = 0;

    // Affiche chaque produit dans le panier
    panier.forEach(produit => {
        const produitElement = document.createElement("div");
        produitElement.className = "panier-produit";
        produitElement.innerHTML = `
            <p>${produit.nom} - ${produit.prix.toFixed(2)}£</p>
        `;
        panierListe.appendChild(produitElement);

        // Ajoute le prix du produit au total
        totalPrix += produit.prix;
    });

    // Met à jour le total affiché
    totalPrixElement.textContent = totalPrix.toFixed(2);
}

// Fonction pour passer la commande
function passerLaCommande() {
    // Ici, vous pourriez implémenter une logique pour traiter la commande
    // Par exemple, envoyer les détails de la commande à un serveur
    alert("Commande passée avec succès !");
}