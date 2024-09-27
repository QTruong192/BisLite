import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductBox.scss";
import { FaEye } from "react-icons/fa";
import { FiLink } from "react-icons/fi";



const ProductBox = ({ item }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(item);
  }, [item]);

  return (
    <NavLink to={`/product/${product.name}`} className="product_details_link">
      <div className="product_card">
        <img
          src={product.picture}
          alt={product.name}
          className="product_image"
        />
        <div className="product_info">
        <FaEye />
        <FiLink />
        </div>
      </div>
    </NavLink>
  );
};

export default ProductBox;
