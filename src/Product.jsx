import "./Product.css";
import Price from "./Price";

function Product({title, idx}) {
  let styles = {
    border: "1px solid #050906",
    borderRadius: "15px",
    marginBottom: "15px",
    padding: "0, 10px, 0, 10px",
    width: "250px",
    height: "150px",
    marginLeft: "15px",
  }
    let oldPrices = ["29,999", "49,999", "1999", "2499"];
    let newPrices = ["25,999", "45,999", "1799", "2199"];
    let description = [
      ["8000 DPI", "5 programabble buttons"], 
      ["intutive surface", "designed for i-pad pro"],
      ["designed for ipad pro", "bluetooth connectivity"],
      ["23 hours playback", "fast charging support"],
    ];
  return (
    <div style = {styles}>
      <div className="product">
        <h3>{title}</h3>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </div>
  );
}

export default Product;