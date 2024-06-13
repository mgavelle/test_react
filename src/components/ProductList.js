//page liste qui affiche la liste des produits
import React, { useState, useEffect } from 'react';
//recupération des valeurs de l'api
import { fetchLimitProducts } from '../api';
//import du fichier ProductItem 
import ProductItem from './ProductItem';
//feuille de style de la page productList
import '../styles/ProductList.scss';

const ProductList = () => {
  //déclaration des variables d'état
  const [products, setProducts] = useState([]);
  //variable d'état pour le chargement
  const [loading, setLoading] = useState(true);
  //variable d'état pour les erreurs
  const [error, setError] = useState(null);

  useEffect(() => {
    //fonction asynchrone pour récupérer les produits
    const getProducts = async () => {
      try {
        //appel de la fonction fetchLimitProducts pour récupérer les produits
        const productList = await fetchLimitProducts();
        //mise à jour de la variable d'état products
        setProducts(productList);
      } catch (error) {
        //mise à jour de la variable d'état error
        setError(error.message);
      } finally {
        //mise à jour de la variable d'état loading
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  //affiche un message de chargement si la requête est en cours
  if (loading) {
    return <div>Loading...</div>;
  }

  //affiche un message d'erreur si la requête n'a pas abouti
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1 className='align-center title_36'>Products management</h1>
      <table className="product-list" cellSpacing="0" cellpPdding="0">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Price including VAT</th>
          </tr>
        </thead>
        <tbody>
          {/* boucle sur la liste des produits pour afficher chaque produit */}
          {products.map(product => (
            // appel du composant ProductItem pour afficher un produit
            <ProductItem key={product.id} product={product} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
