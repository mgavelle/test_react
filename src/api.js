import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

// Récupération de la liste des produits en limitant le nombre de produits à 7
export const fetchLimitProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products?limit=7`);
  return response.data;
};
// Récupération de la liste des catégories
export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
};
// Récupération d'un produit par son id
export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
// Mise à jour du prix d'un produit
export const updateProductPrice = async (productId, newPrice) => {
  const response = await axios.put(`${API_BASE_URL}/products/${productId}`, {
    price: newPrice,
  });
  return response.data;
};
