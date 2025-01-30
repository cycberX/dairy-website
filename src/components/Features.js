import React from 'react';
import { FiDroplet, FiThumbsUp, FiTruck, FiClock } from 'react-icons/fi';

const features = [
  {
    name: 'शुद्ध दूध',
    description: 'आमचे दूध १००% शुद्ध आणि ताजे असते.',
    icon: FiDroplet,
  },
  {
    name: 'उत्कृष्ट गुणवत्ता',
    description: 'आम्ही केवळ सर्वोत्तम गुणवत्तेची उत्पादने देतो.',
    icon: FiThumbsUp,
  },
  {
    name: 'घरपोच सेवा',
    description: 'तुमच्या दारापर्यंत आम्ही उत्पादने पोहोचवतो.',
    icon: FiTruck,
  },
  {
    name: '२४/७ उपलब्धता',
    description: 'आम्ही दिवसभर तुमच्या सेवेसाठी उपलब्ध आहोत.',
    icon: FiClock,
  },
];

function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">उत्कृष्ट सेवा</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            आमच्या सेवेची वैशिष्ट्ये
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            सिद्धेश्वर दूध उत्पादने तुम्हाला देते सर्वोत्तम गुणवत्ता आणि सेवा.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-brand-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;

