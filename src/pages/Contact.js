import { FiPhone, FiMapPin, FiClock } from "react-icons/fi"

function Contact() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">संपर्क</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FiPhone className="h-6 w-6 text-brand-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">फोन</h3>
                <p className="mt-1">
                  <a href="tel:9921569821" className="text-brand-600 hover:text-brand-500">
                    9921569821
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiMapPin className="h-6 w-6 text-brand-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">पत्ता</h3>
                <p className="mt-1 text-gray-600">
                  पटेल चौक, बँक ऑफ इंडिया समोर,
                  <br />
                  कुडवाडी
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FiClock className="h-6 w-6 text-brand-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">वेळ</h3>
                <p className="mt-1 text-gray-600">
                  सकाळी ७ ते रात्री १०
                  <br />
                  सर्व दिवस उपलब्ध
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">आम्हाला संपर्क करा</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  नाव
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  फोन नंबर
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  संदेश
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-600 text-white py-2 px-4 rounded-md hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                पाठवा
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

