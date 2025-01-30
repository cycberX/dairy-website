import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function Hero() {
  return (
    <div className="relative bg-hero overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/images/hero.jpg"
          alt="दूध उत्पादने पृष्ठभूमी"
        />
        <div className="absolute inset-0 bg-brand-600 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl">
          सिद्धेश्वर दूध उत्पादने
        </h1>
        <p className="mt-6 max-w-3xl text-xl ">
          म्हशींचे दूध खरेदी व विक्री. लग्नकार्य व वाढदिवसासाठी लागणारे दुग्धजन्य पदार्थ ऑर्डर स्विकारल्या जातील.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            to="/products"
            className="bg-white text-brand-600 hover:bg-brand-50 px-4 py-2 rounded-md text-lg font-semibold transition duration-150 ease-in-out"
          >
            उत्पादने पहा
          </Link>
          <a href="tel:9921569821" className="hover:text-brand-100 font-semibold flex items-center">
            आमच्याशी संपर्क साधा <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

