import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const testimonials = [
  {
    id: 1,
    content: "सिद्धेश्वर दूध उत्पादनांचे दूध आणि दही अतिशय चविष्ट आहे. मी नेहमी इथूनच खरेदी करतो.",
    author: "सुनील पाटील",
    role: "नियमित ग्राहक",
    rating: 5, // Rating out of 5
  },
  {
    id: 2,
    content: "त्यांचे खवा आणि श्रीखंड उत्कृष्ट आहे. प्रत्येक सण-उत्सवाला मी इथूनच मिठाई घेतो.",
    author: "अंजली देशमुख",
    role: "स्थानिक रहिवासी",
    rating: 4, // Rating out of 5
  },
];

function Feedback() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              ग्राहकांचे अभिप्राय
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              आमच्या ग्राहकांनी आमच्या उत्पादनांबद्दल काय म्हटले आहे ते वाचा.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center mb-4">
                    {/* Rating Stars */}
                    {[...Array(5)].map((_, i) => {
                      return i < testimonial.rating ? (
                        <AiFillStar key={i} className="h-5 w-5 text-yellow-400" />
                      ) : (
                        <AiOutlineStar key={i} className="h-5 w-5 text-yellow-300" />
                      );
                    })}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-base text-gray-600 mb-4">{testimonial.content}</p>

                  {/* Author and Role */}
                  <p className="font-semibold text-lg text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
