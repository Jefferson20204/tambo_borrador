import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({
  discount,
  imageUrl,
  description,
  price,
  originalPrice,
  productName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // debe coincidir con la duración de la animación CSS
  };

  return (
    <>
      <div className="product-card" onClick={openModal}>
        {discount && <div className="discount-badge">{discount}% OFF</div>}
        <img src={imageUrl} alt={productName} className="product-image" />
        <div className="product-details">
          <div className="product-description">{description}</div>
          <div>
            <span className="product-price">${price}</span>
            {originalPrice && (
              <span className="product-original-price">${originalPrice}</span>
            )}
          </div>
          <button className="add-to-cart" onClick={(e) => e.stopPropagation()}>
            Añadir al carrito
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className={`modal-overlay ${
            isClosing ? "overlay-fade-out" : "overlay-fade-in"
          }`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${isClosing ? "fade-out" : "fade-in"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2>{productName}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt={productName} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
