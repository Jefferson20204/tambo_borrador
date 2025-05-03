import React from "react";
import Slider from "../../components/common/Slider/MainSlider";
import ProductSection from "../../components/common/ProductSection/ProductSection"; // asegúrate de que esta ruta sea correcta

const productList = [
  {
    id: 1,
    name: "Pack (2 Huevo Pardo La Calera x 15 Und)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/pdkmxQL2QvJnLvk2J-2400-x.webp",
    price: 23.8,
    discountPercentage: 0,
    description: "Este producto está limitado a 2 unidades por compra.",
  },
  {
    id: 2,
    name: "Pack 2 Macaroni & Cheese Jappy Macs Original 226 Gr",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/8KeFbfjHXrNT3BXHq-1000-x.webp",
    price: 9.98,
    discountPercentage: 20,
    description: "",
  },
  {
    id: 3,
    name: "Pack (2 Sopa Oriental Shin Ramyun x 120 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/H7NvWpDxfFY3YyL2B-2400-x.webp",
    price: 15,
    discountPercentage: 0,
    description: "Este producto está limitado a 2 unidades por compra.",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
  {
    id: 4,
    name: "Pack (4 Conserva Trozos De Atún Campomar x 150 Gr)",
    imageUrl:
      "https://tofuu.getjusto.com/orioneat-local/resized2/654TTG4hdmSRH8bZt-2400-x.webp",
    price: 24.4,
    discountPercentage: 18,
    description: "",
  },
];

const productCategories = ["cervezas", "licores", "comidas", "descuentos"];

const Home = () => {
  return (
    <>
      <Slider />
      {productCategories.map((category) => (
        <div key={category}>
          <ProductSection
            title={category}
            products={productList} // Aquí puedes filtrar por categoría y limitar a 8
            onSeeMore={() => (window.location.href = `/productos/${category}`)}
          />
        </div>
      ))}
    </>
  );
};

export default Home;
