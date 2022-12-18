import { IProduct } from "../../../models";
import "./ProductCard.css";

function ProductCard(product:IProduct) {
  return (
    <div className="card">
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover hover:scale-150 transition-all duration-500"
          src={product.thumbnail}
          alt="headphone"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        {/* badge */}
        <div className="flex items-center gap-2">
          <span className="badge">{product.brand}</span>
          <span className="badge">Qty: {product.stock}</span>
        </div>

        {/* product title */}
        <h2 className="product-title" title={product.title}>
          {product.title}
        </h2>

        {/* product price */}
        <div>
          <span className="text-xl font-bold">Rs {(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">Rs {product.price}</span>
            <span className="discount-percent">save {product.discountPercentage}%</span>
          </div>
        </div>

        {/* product rating */}
        <span className="flex items-center mt-1">
          <img src="/images/star.svg" />
          <img src="/images/star.svg" />
          <img src="/images/star.svg" />
          <img src="/images/star-half-fill.svg" />
          <img src="/images/star-no-fill.svg" />
          <span className="text-xs ml-2 text-gray-500">20k reviews</span>
        </span>

        {/* product acction button */}
        <div className="mt-5 flex gap-2">
          <button className="button-primary">Add to cart</button>
          <button className="button-icon">
            <img
              className="opacity-50"
              src="/images/love.svg"
              alt="add to wishlist"
            />
          </button>
          <button className="button-icon">
            <img
              className="opacity-50"
              src="/images/eye.svg"
              alt="add to wishlist"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
