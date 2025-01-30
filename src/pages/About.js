import { FiCheckCircle } from "react-icons/fi";

const timelineEvents = [
  {
    year: 2015,
    title: "Founded",
    description:
      "PurpleTech was established with a vision to revolutionize tech retail.",
  },
  {
    year: 2017,
    title: "Expansion",
    description:
      "Opened our first physical store and launched our e-commerce platform.",
  },
  {
    year: 2019,
    title: "Innovation",
    description:
      "Introduced our own line of tech accessories and smart home devices.",
  },
  {
    year: 2021,
    title: "Global Reach",
    description: "Expanded operations to serve customers in over 50 countries.",
  },
  {
    year: 2023,
    title: "Sustainability",
    description:
      "Launched our eco-friendly product line and carbon-neutral shipping initiative.",
  },
];

function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-purple-800 tracking-wide uppercase">
            Our Story
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About PurpleTech
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Discover our journey from a small startup to a leading tech
            retailer.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h3>
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative pb-8">
                {index !== timelineEvents.length - 1 && (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                )}
                <div className="relative flex items-start">
                  <span className="h-8 w-8 rounded-full bg-purple-800 flex items-center justify-center ring-8 ring-white">
                    <FiCheckCircle
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="ml-4 min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {event.year}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{event.title}</p>
                    <p className="mt-2 text-sm text-gray-500">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Mission</h3>
          <p className="text-lg text-gray-500">
            At PurpleTech, our mission is to make cutting-edge technology
            accessible to everyone. We strive to provide our customers with the
            latest and most innovative tech products, coupled with exceptional
            customer service and expert advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
