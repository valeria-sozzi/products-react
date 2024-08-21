import { useState } from "react";
import "./App.scss";

function App() {
  const [products, setProducts] = useState([
    { name: "Latte", price: 1.5, category: "Bevande" },
    { name: "Pane", price: 1.0, category: "Alimentari" },
    { name: "Olio", price: 5.0, category: "Condimenti" },
  ]);

  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPriceValue, setInputPriceValue] = useState("");
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  const [isEditindex, setIsEditIndex] = useState("");
  const [editValue, setEditValue] = useState("");

  return (
    <div className="app-container">
      <div className="products">
        <label>Inserisci nuovo prodotto</label>
        <input
          type="text"
          name="name"
          value={inputNameValue}
          onChange={(e) => {
            setInputNameValue(e.target.value);
          }}
          placeholder="inserisci il nome del prodotto"
        />

        <input
          type="text"
          name="price"
          value={inputPriceValue}
          onChange={(e) => {
            setInputPriceValue(e.target.value);
          }}
          placeholder="inserisci il prezzo del prodotto"
        />
        <select
          name="category"
          placeholder="inserisci la cateogria del prodotto"
          value={inputCategoryValue}
          onChange={(e) => {
            setInputCategoryValue(e.target.value);
          }}
        >
          <option>Seleziona la categoria</option>
          <option value="Alimentari">Alimentari</option>
          <option value="Bevande">Bevande</option>
          <option value="Condimenti">Condimenti</option>
        </select>

        <button
          className="btn"
          onClick={() => {
            const newProduct = {
              name: inputNameValue,
              price: inputPriceValue,
              category: inputCategoryValue,
            };
            const newProducts = [...products, newProduct];
            setProducts(newProducts);
          }}
        >
          Aggiungi nuovo prodotto
        </button>
      </div>
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
