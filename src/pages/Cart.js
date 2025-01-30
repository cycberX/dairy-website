import { FiTrash2 } from "react-icons/fi"

const cartItems = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 99.99,
    quantity: 1,
    image: "https://via.placeholder.com/100x100?text=Wireless+Earbuds",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    quantity: 1,
    image: "https://via.placeholder.com/100x100?text=Smart+Watch",
  },
]

function Cart() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>
        <div className="mt-12">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity}</p>
                        <div className="flex">
                          <button type="button" className="font-medium text-purple-800 hover:text-purple-700">
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <button className="w-full bg-purple-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Checkout
            </button>
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or{" "}
              <button type="button" className="text-purple-800 font-medium hover:text-purple-700">
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

