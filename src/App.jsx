import React, { useState } from "react";
import Card from "./components/Card";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let [cart, setCart] = useState(0);
  let data = [
    {
      name: "levis",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "80",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: false,
      action: "View options",
    },
    {
      name: "dior",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: " 3l",
      sale: true,
      originalPrice: "2l",
      original: true,
      reviews: true,
      action: "Add to cart",
    },
    {
      name: "lakmee",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: " 550",
      sale: true,
      originalPrice: "678",
      original: true,
      reviews: false,
      action: "Add to cart",
    },
    {
      name: "Dazzle",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "950",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true,
      action: "Add to cart",
    },
    {
      name: "sugar",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: " 450",
      sale: true,
      originalPrice: "760",
      original: true,
      reviews: false,
      action: "Add to cart",
    },
    {
      name: "sephora",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "12000",
      sale: false,
      originalPrice: "",
      original: true,
      reviews: false,
      action: "View options",
    },
    {
      name: "mayblee",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "660",
      sale: true,
      originalPrice: "900",
      original: true,
      reviews: true,
      action: "Add to cart",
    },
    {
      name: "gucci",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg'",
      price: "17l",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true,
      action: "Add to cart",
    },
  ];
  return (
    <>
      <TopBar cart={cart} setCart={setCart} />
      <Header cart={cart} setCart={setCart} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((e, i) => {
              return <Card data={e} key={i} cart={cart} setCart={setCart} index={i} />;
            })}
          </div>
        </div>
      </section>
      <Footer cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
