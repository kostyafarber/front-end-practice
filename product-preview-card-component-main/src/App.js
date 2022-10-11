import Preview from "./components/Preview";

function App() {
  const product = {
    productType: "playing card",
    productName: "Dark Magician Playinf Card @ v1.0",
    productDesc: `Dark Magician was created when Mahad fused his ba with "Illusion Magician", his ka while fighting Thief King Bakura.`,
    price: "$149.99",
    priceReduced: "$169.99",
  };

  return <Preview product={product} />;
}

export default App;
