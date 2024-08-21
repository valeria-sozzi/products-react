import React, { useState } from "react";

const AddProduct = ({ products, setProducts }) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPriceValue, setInputPriceValue] = useState("");
  const [inputCategoryValue, setInputCategoryValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: inputNameValue,
      price: inputPriceValue,
      category: inputCategoryValue,
    };
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="products">
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

      <button className="btn" type="submit">
        Aggiungi nuovo prodotto
      </button>
    </form>
  );
};

export default AddProduct;
