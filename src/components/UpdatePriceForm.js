import React, { useState } from 'react';

const UpdatePriceForm = ({ product, onUpdatePrice }) => {
  //déclaration des variables d'état
  const [newPrice, setNewPrice] = useState(product.price);
  // variable d'état pour savoir si le prix a été mis à jour
  const [isUpdated, setIsUpdated] = useState(false);

  //fonction pour gérer le changement de prix
  const handlePriceChange = (e) => {
    //mise à jour de la variable d'état newPrice
    setNewPrice(e.target.value);
    //mise à jour de la variable d'état isUpdated
    setIsUpdated(true);
  };

  //fonction pour mettre à jour le prix
  const handleUpdate = async () => {
    //appel de la fonction onUpdatePrice pour mettre à jour le prix
    await onUpdatePrice(product.id, newPrice);
    //mise à jour de la variable d'état isUpdated
    setIsUpdated(false);
  };

  return (
    <article>
      <div className="update-price-form">
        <input
          className='price-input'
          type="text"
          value={newPrice}
          //appel de la fonction handlePriceChange au changement de la valeur de l'input
          onChange={handlePriceChange}
        />
        <span><strong className='color_grey'>Price</strong> (including VAT) {(newPrice * 1.2).toFixed(2)}€</span>
      </div>
      
      <button
        className='update-button'
        //appel de la fonction handleUpdate au clic sur le bouton
        onClick={handleUpdate}
        //désactivation du bouton si le prix n'a pas été mis à jour
        disabled={!isUpdated}
      >
        Update Product
      </button>
    </article>
  );
};

export default UpdatePriceForm;
