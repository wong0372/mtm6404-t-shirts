const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Bright Purple T-Shirt",
    image: "bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
    quantity: 1,
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
    quantity: 1,
  },
  {
    title: "Green T-Shirt",
    image: "green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Grey T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 4.99,
    stock: 2,
    quantity: 1,
  },
  {
    title: "Light Green T-Shirt",
    image: "light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
    quantity: 1,
  },
  {
    title: "Purple T-Shirt",
    image: "purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
    quantity: 1,
  },
  {
    title: "Red T-Shirt",
    image: "red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
    quantity: 1,
  },
  {
    title: "Teal T-Shirt",
    image: "teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
    quantity: 1,
  },
];

// react framework //

// create a TShirtCard component to represent each t-shirt
function TShirtCard({ tshirt }) {
  // create state for quantity with default 1 and stock
  // stock starts at the number of items in the tshirt.stock property
  const [quantity, setQuantity] = React.useState(1);
  const [stock, setStock] = React.useState(tshirt.stock);

  // create quantity options based on available stock
  const quantityOptions = Array.from({ length: stock }, (_, i) => i + 1);

  // decrease stock by selected quantity and use setStock to update
  // checks if prevStock - quantity < 0, if true, stock will be 0, if false, stock will be prevStock - quantity
  function handleBuy() {
    setStock((prevStock) => {
      if (prevStock - quantity < 0) {
        return 0;
      }
      return prevStock - quantity;
    });
  }

  //render card
  return (
    <div className="tshirt-card">
      {/* show t-shirt image */}
      <img
        src={`images/${tshirt.image}`}
        alt={tshirt.title}
        className="tshirt-image"
      />

      {/* show t-shirt title and price */}
      <h2>{tshirt.title}</h2>
      <p>Price: ${tshirt.price}</p>

      {/* check stock availability, if stock = 0 is true, msg will execute, 
      if the stock not equal to 0, stock and drop down option after else will be executed */}
      {stock === 0 ? (
        <p className="out-of-stock">Out of Stock</p>
      ) : (
        <div>
          <p>Stock: {stock}</p>

          {/* dropdown option to select purchase quantity*/}
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {quantityOptions.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          {/* when click the buy button, stock will decrease base on the selected quantity*/}
          <button onClick={handleBuy}>Buy</button>
        </div>
      )}
    </div>
  );
}

// container to hold all tshirt
// maps through the tshirt array and render a TShirtCard component for each item.
function App() {
  return (
    <div>
      <h1>T-Shirt Store</h1>
      <div className="tshirt-container">
        {tshirts.map((tshirt, index) => (
          <TShirtCard key={index} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
