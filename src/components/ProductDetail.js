import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// recupération des valeurs de l'api
import { fetchProductById, updateProductPrice } from '../api';
import UpdatePriceForm from './UpdatePriceForm';
import '../styles/ProductDetail.scss';
import backButton from '../assets/images/Back-button.svg'


const ProductDetail = () => {
  //recupération de l'id du produit
  const { id } = useParams();
  //déclaration de la variable d'état product
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //fonction asynchrone pour récupérer un produit par son id
    const getProduct = async () => {
      //appel de la fonction fetchProductById pour récupérer un produit par son id
      const productData = await fetchProductById(id);
      //mise à jour de la variable d'état product
      setProduct(productData);
    };
    //appel de la fonction getProduct
    getProduct();
  }, [id]);

  return (
    <div className='product-detail'>
      {product && (
        <>
          <section className='title'>
            <button onClick={() => navigate('/')}>
              <img src={backButton} alt='Back' />
            </button>
            <h1 className='align-center title_36'>{product.title}</h1>
          </section>
          <section className='product-content'>
            <img src={product.image} alt={product.title} className='product-image'/>
            <article className='product-info'>
              <div className='description'>
                <div className='title_24'>Description</div>
                <p>{product.description}</p>
              </div>
              <div className='category'>
                <div className='title_24'>Category</div>
                <p className='tag'>{product.category}</p>
              </div>
              <div className='price'>
                <div className='title_24'>Price</div>
                <UpdatePriceForm product={product} onUpdatePrice={updateProductPrice} />
              </div>
            </article>
          </section>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
