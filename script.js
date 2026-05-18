fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
      afficheProduit(data)
    console.log(data)
});
  


  function afficheProduit(tableauProduit){
    tableauProduit.forEach(produit => {
        let produitCard =`
          <div class="card flex w-40">
            <img src="${produit.image}" alt="" class="w-20">

            <div class="w-60">
                <h2>${produit.title}</h2>
                <p>${produit.category}</p>
                <p class="flex"><i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
            <i class="ph-fill ph-star"></i>
        <i class="ph-fill ph-star"></i></p>
            </div>

            <div class="w-20">
                <p class="bg-black">${produit.price} €</p>
            </div>

        </div>
        `
        document.querySelector("#carte").innerHTML += produitCard
    });
  }
