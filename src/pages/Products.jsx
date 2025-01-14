import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Importing images from assets folder
import apple from "../assets/apple.png";
import cabbage from "../assets/cabbage.png";
import carrot from "../assets/carrot.png";
import chicken from "../assets/chicken.png";
import cucumber from "../assets/cuccubar.png";
import grapes from "../assets/grapes.png";
import mango from "../assets/mango.png";
import onion from "../assets/onion.png";
import milk from "../assets/milk.png";
import potato from "../assets/pottato.png";
import rice from "../assets/rise.png";
import tomato from "../assets/tomato.png";

const ProductCards = () => {
  const products = [
    { id: 1, name: "Apple", price: "$3", stars: 4, image: apple },
    { id: 2, name: "Cabbage", price: "$2", stars: 3, image: cabbage },
    { id: 3, name: "Carrot", price: "$1.5", stars: 5, image: carrot },
    { id: 4, name: "Chicken", price: "$7", stars: 4, image: chicken },
    { id: 5, name: "Cucumber", price: "$1.2", stars: 3, image: cucumber },
    { id: 6, name: "Grapes", price: "$4", stars: 5, image: grapes },
    { id: 7, name: "Mango", price: "$5", stars: 5, image: mango },
    { id: 8, name: "Onion", price: "$2.5", stars: 2, image: onion },
    { id: 9, name: "Milk", price: "$1.8", stars: 3, image: milk },
    { id: 10, name: "Potato", price: "$1.3", stars: 2, image: potato },
    { id: 11, name: "Rice", price: "$6", stars: 4, image: rice },
    { id: 12, name: "Tomato", price: "$4", stars: 4, image: tomato },
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index} className="text-warning">⭐</span>
    ));
  };

  
  const handleCreateOrder = (product) => {
    alert(`Order Successfully for ${product.name}`);
  };

  return (
    <div style={{ background: '#fbd66e',paddingTop:'100px' }}>
      <div className="container">
        {/* Heading */}
        <h1 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          Products
        </h1>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div
                className="card h-100"
                style={{
                  transition: "box-shadow 0.3s ease, border 0.3s ease",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "250px" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title d-flex justify-content-between align-items-center"
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {product.name}
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{
                        color: "red",
                      }}
                    />
                  </h5>
                  <p
                    className="card-text text-primary fw-bold"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {product.price}
                  </p>
                  <div>{renderStars(product.stars)}</div>
                  {/* Create Order Button */}
                  <div style={{margin:" 0 30px"}}>
                    <button
                          className="btn btn-success w-100 mt-3 "
                          style={{ borderRadius: "20px" ,width:'300px', padding:'8px' }}  // Adjust the value as needed
                          onClick={() => handleCreateOrder(product)}
                        >
                          Create Order
                        </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
