import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
  const handleQuantityChange = (val) => {
    console.log("QP Changed", val);
  };

  return (
    <div className="product">
      <label className="prod-category">{props.info.category}</label>
      <img id="img" src={"/images/" + props.info.image} alt="product"></img>
      <h2>{props.info.title}</h2>

      <div>
        <label className="price">$ {props.info.price.toFixed(2)} </label>
        <label className="total">$ Total </label>
      </div>

      <div>
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        <button className="btn-add btn btn-sm btn-success">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
