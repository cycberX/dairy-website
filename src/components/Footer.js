import { FiPhone, FiMapPin } from "react-icons/fi"

function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">सिद्धेश्वर दूध उत्पादने</h3>
            <p className="text-brand-100">
              म्हशींचे दूध खरेदी व विक्री
              <br />
              आईस्क्रीम व कोल्ड्रिंक मिळेल
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">संपर्क</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <FiPhone className="h-5 w-5 mr-2" />
                <a href="tel:9921569821">9921569821</a>
              </p>
              <p className="flex items-center">
                <FiMapPin className="h-5 w-5 mr-2" />
                पटेल चौक, बँक ऑफ इंडिया समोर, कुडवाडी
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">वेळ</h3>
            <p className="text-brand-100">
              सकाळी ७ ते रात्री १०
              <br />
              सर्व दिवस उपलब्ध
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-800">
          <p className="text-center text-brand-300">
            {new Date().getFullYear()} सिद्धेश्वर दूध उत्पादने. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

