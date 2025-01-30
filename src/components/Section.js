import { Link } from "react-router-dom"
import { FiArrowRight } from "react-icons/fi"

function Section() {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/milk.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">शुद्ध दूध, उत्कृष्ट स्वाद</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          सिद्धेश्वर दूध उत्पादने आपल्याला देतात ताजी आणि दर्जेदार दुग्धजन्य पदार्थ. आमच्या विविध उत्पादनांचा आस्वाद घ्या.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <Link
            to="/products"
            className="bg-primary-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm flex items-center gap-3 rounded-3xl">
            उत्पादने पहा <FiArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section

