import ProductCard from "./ProductCard";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "बासुंदी",
    description: "गोड आणि घट्ट केलेले दूध, विविध मसाल्यांच्या गोडसर चवीसह, एक उत्तम डेसर्ट. खास सण आणि तिव्हारी प्रसंगी खाण्यासाठी. हे दूध लहान मुलांसाठी आणि वयोवृद्धांसाठी खास फायदेशीर आहे.",
    price: "१५० रु प्रति किलो",
    image: "/images/basundi.png",
    ingredients: "दूध, साखर, केसर, वेलची",
    usage: "सण, खास प्रसंगी, डेसर्ट म्हणून",
    storage: "ठंड्या ठिकाणी ठेवावे",
  },
  {
    id: 2,
    name: "पनीर",
    description: "ताजा घरगुती पनीर, अत्यंत मऊ आणि चवदार, तुमच्या विविध पदार्थांना एक अद्भुत चव देते. पनीर उच्च दर्जाचे प्रोटीन आणि कॅल्शियमचे स्रोत आहे.",
    price: "३४० रु प्रति किलो",
    image: "/images/panner.png",
    ingredients: "दूध, साइट्रिक अॅसिड",
    usage: "पाककला, पराठा, बिर्याणी, भाज्या, सूप",
    storage: "फ्रिजमध्ये ठेवा, ३-४ दिवस वापरता येईल",
  },
  {
    id: 3,
    name: "खवा",
    description: "शुद्ध दुधापासून बनवलेला खवा, जो मिठाईसाठी आणि विविध रेसिपीसाठी आदर्श आहे. हा खवा संपूर्ण कुटुंबासाठी योग्य आहे आणि स्वयंपाकाच्या विविध पाककृतींमध्ये वापरता येतो.",
    price: "३६० रु प्रति किलो",
    image: "/images/khawa.jpg",
    ingredients: "दूध, साखर",
    usage: "मिठाई, हलवा, दुधाचे पदार्थ",
    storage: "ठंड्या ठिकाणी ठेवावा",
  },
  {
    id: 4,
    name: "ताक",
    description: "ताजी दही छाछ, प्रथिनांचा आणि कॅल्शियमचा उत्तम स्त्रोत, पाचन सुधारण्यासाठी उत्तम. खास उन्हाळ्यात शरीराला थंडावा आणि ऊर्जा देण्यासाठी आदर्श आहे.",
    price: "२० रु प्रति लिटर",
    image: "/images/taak.png",
    ingredients: "दही, पाणी, मसाले",
    usage: "पाचनासाठी, थंड पेय म्हणून",
    storage: "फ्रिजमध्ये ठेवावे",
  },
  {
    id: 5,
    name: "श्रीखंड",
    description: "चकचकीत श्रीखंड, मीठ आणि ताज्या फळांपासून तयार केलेले, एक गोड आणि ताजेतवाने स्वाद. श्रीखंड एक लोकप्रिय महाराष्ट्रियन डेसर्ट आहे, जो सण आणि विशेष प्रसंगी बनवला जातो.",
    price: "४०० रु प्रति किलो",
    image: "/images/shrikand.png",
    ingredients: "दही, साखर, केशर, फळांचे तुकडे",
    usage: "डेसर्ट, मिठाई, खास सणांसाठी",
    storage: "फ्रिजमध्ये ठेवावे, २-३ दिवस वापरता येईल",
  },
  {
    id: 6,
    name: "दही",
    description: "घट्ट जमलेले दही, ताज्या दूधावर आधारित, ताजेपण आणि स्वादासाठी सर्वोत्तम. दही पचनसंस्थेसाठी उपयुक्त आहे आणि शरीरात प्रोटीन व कॅल्शियमचा दर्जा वाढवते.",
    price: "८० रु प्रति किलो",
    image: "/images/basundi.png",
    ingredients: "दूध, दह्याचे बुरशी",
    usage: "थंड पेय, लहान मुलांसाठी, दही-चटणी, भातासोबत",
    storage: "फ्रिजमध्ये ठेवा",
  },
  {
    id: 7,
    name: "तूप",
    description: "शुद्ध गाईचे तूप, उत्तम शाकाहारी पदार्थांसाठी, हजमपणास मदत करते आणि स्वादिष्ट असते. तूप हे भारतीय पारंपरिक खाणामध्ये मुख्य घटक आहे.",
    price: "८०० रु प्रति किलो",
    image: "/images/curd.png",
    ingredients: "गाईचे दूध",
    usage: "पाककला, हलवा, रोट्या, भाजी",
    storage: "ठंड्या ठिकाणी ठेवा, जास्त काळ टिकते",
  },
  {
    id: 8,
    name: "लस्सी",
    description: "थंडगार लस्सी, गोड आणि ताज्या दह्यापासून बनवलेली, शरीराला शीतलता आणि ऊर्जा देणारी. हे शरीराला आराम आणि शांती प्रदान करते.",
    price: "३० रु प्रति ग्लास",
    image: "/images/milk-bottal.jpg",
    ingredients: "दही, साखर, पाणी",
    usage: "थंड पेय म्हणून, पचन सुधारण्यासाठी",
    storage: "फ्रिजमध्ये ठेवा",
  },
  {
    id: 9,
    name: "पेडा",
    description: "गोड पेडे, आपल्या खास सणांसाठी बनवलेले, ताज्या खव्याचे आणि साखरेचे मिश्रण. पेडे एक पारंपरिक भारतीय मिठाई आहे, जो खास प्रसंगी खाल्ला जातो.",
    price: "४०० रु प्रति किलो",
    image: "/images/pedha.jpg",
    ingredients: "खवा, साखर, केशर",
    usage: "डेसर्ट, सण-उत्सव",
    storage: "ठंड्यात ठेवावे",
  },
];


function ProductGrid({display = 9}) {
  const [displayedCount, setDisplayedCount] = useState(display); // Show 6 products initially

  // Get the products to display based on the current state
  const displayedProducts = products.slice(0, displayedCount);

  // Handle the "Load More" button click
  const loadMore = () => {
    setDisplayedCount(displayedCount + 4); // Load 6 more products
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">आमची उत्पादने</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {/* Load More Button */}
        {displayedCount < products.length && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMore}
              className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductGrid;