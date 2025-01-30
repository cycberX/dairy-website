import { FiShoppingCart } from "react-icons/fi";

function ProductCard({ id, name, price, image }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:translate-y-[-10px]">
      {/* Image Section with Hover Effects */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
        />
        
        
      </div>

      {/* Product Information Section */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-gray-900 truncate mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-4">{price}</p>

        <div className="flex justify-between w-full items-center">
          {/* View Details Link */}
          <a
            href={`/products/${id}`}
            className="text-purple-700 hover:text-purple-900 font-medium text-sm transition-colors duration-300 ease-in-out"
          >
            View Details
          </a>

          {/* Add to Cart Button */}
          <button className="bg-primary-800 text-white px-2 py-1 rounded-2xl text-lg font-semibold shadow-lg flex items-center space-x-2">
            <FiShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
