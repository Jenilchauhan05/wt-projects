import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexwrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style = {styles}>
        <Product title="Logitech Mx Master" idx={0} />
        <Product title="Apple Pencil (2nd Gen)" idx={1} />
        <Product title="Zebronics Zeb-Transformer" idx={2} />
        <Product title="Portronics Toad 23" idx={3} />
    </div>
  );
}   

export default ProductTab;  