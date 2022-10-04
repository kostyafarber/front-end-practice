import Preview from "./components/Preview";

function App() {
  const product = {
    productType: 'playing card', 
    productName: 'Farber Playing Card 2022 Mint', 
    productDesc: `A floral, solar and voluptuous inerpretation composed by Oliver
                  Polge, Perfumer-Creator for the House of CHANEL.`, 
    price: "$149.99",  
    priceReduced: "$169.99"
  }

  return (
    <Preview product = {product} />
  );
}

export default App;
