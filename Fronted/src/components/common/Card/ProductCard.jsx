import React, { useState } from "react";
import ProductModal from "../Modal/ProductModal";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <>
      <div className="product-card" onClick={() => setShowModal(true)}>
        <div className="image-container">
          <img
            src={product.imageUrl || "/image/producto-defecto.jpg"}
            alt={product.name}
            className="product-image"
          />
          {hasDiscount && (
            <div className="card-discount">-{product.discountPercentage}%</div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <div className="price-section">
            <span className="price">${discountedPrice.toFixed(2)}</span>
            {hasDiscount && (
              <span className="original-price">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>

      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProductCard;
