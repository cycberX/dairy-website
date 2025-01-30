import { useState } from "react"
import { Link } from "react-router-dom"
import { FiMenu, FiX, FiPhone } from "react-icons/fi"

const navItems = [
  { name: "मुख्यपृष्ठ", href: "/" },
  { name: "उत्पादने", href: "/products" },
  { name: "आमच्याबद्दल", href: "/about" },
  { name: "संपर्क", href: "/contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">सिद्धेश्वर</span>
              <span className="text-sm font-medium">दूध उत्पादने</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:bg-brand-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:9921569821" className="flex items-center space-x-2 hover:bg-brand-700 px-3 py-2 rounded-md">
              <FiPhone className="h-5 w-5" />
              <span>9921569821</span>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:bg-brand-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:9921569821"
              className="hover:bg-brand-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <FiPhone className="inline-block h-5 w-5 mr-2" />
              9921569821
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

