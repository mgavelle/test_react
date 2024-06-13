//component qui affiche les produits dans le tableau de la page liste
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductItem.scss';

const ProductItem = ({ product }) => {
  return (
    <tr>
      <td data-label="Product name">
        {/* affiche le titre du produit */}
        <Link className="product-item" to={`/product/${product.id}`}>
          {product.title}
        </Link>
      </td>
      {/* affiche la catégorie du produit */}
      <td data-label="Category"><span className='tag'>{product.category}</span></td>
      {/* affiche le prix du produit */}
      <td data-label="Price" className='align-right'>{product.price}€</td>
      {/* affiche le prix du produit avec la TVA ajoutée */}
      <td data-label="Price VAT" className='align-right'>{(product.price * 1.2).toFixed(2)}€</td>
    </tr>
  );
};

export default ProductItem;
