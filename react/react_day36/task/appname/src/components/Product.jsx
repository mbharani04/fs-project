const Product = ({ title, price }) => {
  return (
    <div className="border p-4 rounded shadow w-60">
      <h2 className="font-bold">{title}</h2>
      <p className="text-green-600">₹{price}</p>
    </div>
  );
};

export default Product;