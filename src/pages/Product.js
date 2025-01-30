import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FiShoppingCart,
  FiMinusCircle,
  FiPlusCircle,
  FiHeart,
} from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const sampleProducts = [
  {
    id: 1,
    name: "बासुंदी",
    description:
      "गोड आणि घट्ट केलेले दूध, विविध मसाल्यांच्या गोडसर चवीसह, एक उत्तम डेसर्ट. खास सण आणि तिव्हारी प्रसंगी खाण्यासाठी. हे दूध लहान मुलांसाठी आणि वयोवृद्धांसाठी खास फायदेशीर आहे. बासुंदी खाण्यामुळे शरीराला ऊर्जा मिळते आणि ते हायड्रेटेड राहते.",
    price: "१५० रु प्रति किलो",
    image: "/images/basundi.png",
    ingredients: "दूध, साखर, केसर, वेलची",
    storage: "ठंड्या ठिकाणी ठेवावे, २-३ दिवस टिकते",
    health_benefits: "पचन सुधारणारे, हायड्रेशन आणि ऊर्जा प्रदान करते",
    rating: 4.5,
  },
  {
    id: 2,
    name: "पनीर",
    description:
      "ताजा घरगुती पनीर, अत्यंत मऊ आणि चवदार, तुमच्या विविध पदार्थांना एक अद्भुत चव देते. पनीर उच्च दर्जाचे प्रोटीन आणि कॅल्शियमचे स्रोत आहे, जे हाडांची शक्ती वाढवण्यासाठी आवश्यक आहे. खासकरून शाकाहारी लोकांसाठी अत्यंत उपयुक्त.",
    price: "३४० रु प्रति किलो",
    image: "/images/panner.png",
    ingredients: "दूध, साइट्रिक अॅसिड",
    storage: "फ्रिजमध्ये ठेवा, ३-४ दिवस वापरता येईल",
    health_benefits: "प्रोटीन आणि कॅल्शियमचा उत्तम स्रोत",
    rating: 4.7,
  },
  {
    id: 3,
    name: "खवा",
    description:
      "शुद्ध दुधापासून बनवलेला खवा, जो मिठाईसाठी आणि विविध रेसिपीसाठी आदर्श आहे. हा खवा संपूर्ण कुटुंबासाठी योग्य आहे आणि स्वयंपाकाच्या विविध पाककृतींमध्ये वापरता येतो. खवा पोषणतत्त्वांनी भरपूर आहे.",
    price: "३६० रु प्रति किलो",
    image: "/images/khawa.jpg",
    ingredients: "दूध, साखर",
    storage: "ठंड्या ठिकाणी ठेवावा, २-३ दिवस टिकते",
    health_benefits: "ऊर्जा आणि प्रोटीन प्रदान करते",
    rating: 4.6,
  },
  {
    id: 4,
    name: "ताक",
    description:
      "ताजी दही छाछ, प्रथिनांचा आणि कॅल्शियमचा उत्तम स्त्रोत, पाचन सुधारण्यासाठी उत्तम. खास उन्हाळ्यात शरीराला थंडावा आणि ऊर्जा देण्यासाठी आदर्श आहे. ताक पोटाच्या समस्या कमी करण्यासाठी देखील फायदेशीर आहे.",
    price: "२० रु प्रति लिटर",
    image: "/images/taak.png",
    ingredients: "दही, पाणी, मसाले",
    storage: "फ्रिजमध्ये ठेवावे",
    health_benefits: "पचनसंस्थेला मदत करणारे, शरीराला थंडावा देणारे",
    rating: 4.8,
  },
  {
    id: 5,
    name: "श्रीखंड",
    description:
      "चकचकीत श्रीखंड, मीठ आणि ताज्या फळांपासून तयार केलेले, एक गोड आणि ताजेतवाने स्वाद. श्रीखंड एक लोकप्रिय महाराष्ट्रियन डेसर्ट आहे, जो सण आणि विशेष प्रसंगी बनवला जातो. ताज्या फळांपासून बनवलेलं श्रीखंड आणखी चवदार बनतं.",
    price: "४०० रु प्रति किलो",
    image: "/images/shrikand.png",
    ingredients: "दही, साखर, केशर, फळांचे तुकडे",
    storage: "फ्रिजमध्ये ठेवावे, २-३ दिवस वापरता येईल",
    health_benefits: "पचनसाठी उपयुक्त, चवदार आणि ताजं",
    rating: 4.9,
  },
  {
    id: 6,
    name: "दही",
    description:
      "घट्ट जमलेले दही, ताज्या दूधावर आधारित, ताजेपण आणि स्वादासाठी सर्वोत्तम. दही पचनसंस्थेसाठी उपयुक्त आहे आणि शरीरात प्रोटीन व कॅल्शियमचा दर्जा वाढवते. दही आपल्या पचनसंस्थेची देखभाल करण्यासाठी आदर्श आहे.",
    price: "८० रु प्रति किलो",
    image: "/images/basundi.png",
    ingredients: "दूध, दह्याचे बुरशी",
    storage: "फ्रिजमध्ये ठेवा",
    health_benefits: "पचनासाठी उत्तम, कॅल्शियमचा दर्जा वाढवते",
    rating: 4.4,
  },
  {
    id: 7,
    name: "तूप",
    description:
      "शुद्ध गाईचे तूप, उत्तम शाकाहारी पदार्थांसाठी, हजमपणास मदत करते आणि स्वादिष्ट असते. तूप हे भारतीय पारंपरिक खाणामध्ये मुख्य घटक आहे, जे चांगल्या आरोग्यासाठी आवश्यक आहे.",
    price: "८०० रु प्रति किलो",
    image: "/images/curd.png",
    ingredients: "गाईचे दूध",
    storage: "ठंड्या ठिकाणी ठेवा, जास्त काळ टिकते",
    health_benefits: "हाजम पचन सुधारते, शरीरासाठी आवश्यक पोषण",
    rating: 4.7,
  },
  {
    id: 8,
    name: "लस्सी",
    description:
      "थंडगार लस्सी, गोड आणि ताज्या दह्यापासून बनवलेली, शरीराला शीतलता आणि ऊर्जा देणारी. हे शरीराला आराम आणि शांती प्रदान करते. लस्सी शरीराच्या आंतरिक स्थितीला सुधारण्याचे काम करते.",
    price: "३० रु प्रति ग्लास",
    image: "/images/milk-bottal.jpg",
    ingredients: "दही, साखर, पाणी",
    storage: "फ्रिजमध्ये ठेवा",
    health_benefits: "पचन सुधारते, शरीराला शीतलता आणि आराम देतो",
    rating: 4.5,
  },
  {
    id: 9,
    name: "पेडा",
    description:
      "गोड पेडे, आपल्या खास सणांसाठी बनवलेले, ताज्या खव्याचे आणि साखरेचे मिश्रण. पेडे एक पारंपरिक भारतीय मिठाई आहे, जो खास प्रसंगी खाल्ला जातो. पेडे पिऊन शरीरात ऊर्जा आणि उत्साह येतो.",
    price: "४०० रु प्रति किलो",
    image: "/images/pedha.jpg",
    ingredients: "खवा, साखर, केशर",
    storage: "ठंड्यात ठेवावे",
    health_benefits: "शरीराला ऊर्जा आणि पौष्टिकता प्रदान करतो",
    rating: 4.6,
  },
];

function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = sampleProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product {id} not found</div>;
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <div className="mt-3">
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>

            {/* Product Rating */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {product.rating}
              </span>
            </div>

            {/* Product Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            {/* Product Details Accordion */}
            <div className="mt-5">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-900">
                  Product Details
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                  Ingredients: {product.ingredients}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Usage: {product.health_benefits}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Storage: {product.storage}
                </p>
              </div>
            </div>

            <div className="bg-white px-6">
              {/* Quantity Selector */}
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 focus:outline-none focus:text-gray-600 hover:bg-gray-200 p-2 rounded"
                  >
                    <FiMinusCircle className="h-6 w-6" />
                  </button>
                  <span className="text-gray-700 text-lg mx-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 focus:outline-none focus:text-gray-600 hover:bg-gray-200 p-2 rounded"
                  >
                    <FiPlusCircle className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex sm:flex-row gap-5 justify-center">
                <button
                  type="button"
                  className="w-full sm:w-auto bg-purple-800 border border-transparent rounded-xl py-3 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <FiShoppingCart className="mr-2 h-5 w-5" />
                  Add to cart
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto py-3 px-6 gap-3 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <FiHeart className="h-6 w-6" />
                  <span className=""> Add to favorites</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
