import { useState } from "react";
import "./App.scss";
import AddProduct from "./assets/components/addProduct/AddProduct.jsx";

function App() {
  const [products, setProducts] = useState([
    { name: "Latte", price: 1.5, category: "Bevande" },
    { name: "Pane", price: 1.0, category: "Alimentari" },
    { name: "Olio", price: 5.0, category: "Condimenti" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  const [isEditindex, setIsEditIndex] = useState("");
  const [editValue, setEditValue] = useState("");

  return (
    <div className="app-container">
      <AddProduct products={products} setProducts={setProducts} />
      <div>
        <label>Filtra per </label>
        <select
          name="category"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
        >
          <option value="Tutti">Tutti</option>
          <option value="Alimentari">Alimentari</option>
          <option value="Bevande">Bevande</option>
          <option value="Condimenti">Condimenti</option>
        </select>
      </div>

      <ul>
        {products
          /* .filter(
            (product) =>
              selectedCategory === "Tutti" ||
              product.category === selectedCategory
          ) */
          .map(
            (product, currentIndex) =>
              (selectedCategory === "Tutti" ||
                product.category === selectedCategory) && (
                <li key={currentIndex}>
                  {isEditindex === currentIndex ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                  ) : (
                    product.name
                  )}
                  , {product.price}, {product.category}
                  {isEditindex === currentIndex ? (
                    <>
                      <button
                        onClick={() => {
                          let newProductList = [...products];

                          newProductList.map((product, index) => {
                            if (index === currentIndex) {
                              product.name = editValue;
                            }
                          });

                          setProducts([...newProductList]);

                          setIsEditIndex("");
                        }}
                        disabled={product.name === editValue}
                      >
                        Salva
                      </button>
                      <button
                        onClick={() => {
                          setIsEditIndex("");
                        }}
                      >
                        {" "}
                        Annulla{" "}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setIsEditIndex(currentIndex);
                        setEditValue(product.name);
                      }}
                    >
                      Modifica
                    </button>
                  )}
                  <span
                    onClick={() => {
                      const newProducts = [...products];
                      newProducts.splice(currentIndex, 1);
                      setProducts(newProducts);
                    }}
                  >
                    {" "}
                    X{" "}
                  </span>
                </li>
              )
          )}
      </ul>
    </div>
  );
}

export default App;
