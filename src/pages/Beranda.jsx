"use client";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, MapPin, Users, Info } from "lucide-react";


const featuresData = [
  {
    image: "/images/son.JPG",
    features: [
      { icon: <MapPin className="h-12 w-12 text-gray-500 mr-2 transition-colors duration-200 hover:text-gray-500" />, title: "Trip Planner", description: "Susun Rute Perjalananmu Sendiri" },
      { icon: <Users className="h-12 w-12 text-gray-500 mr-2 transition-colors duration-200 hover:text-gray-500" />, title: "Guide", description: "Tour Guide berbahasa Indonesia" },
      { icon: <Info className="h-12 w-12 text-gray-500 mr-2 transition-colors duration-200 hover:text-gray-500" />, title: "Info", description: "Info penting di luar negeri" },
    ],
  },
  {
    image: "/images/family.JPG",
    features: [
      { icon: <MapPin className="h-12 w-12 text-gray-500 mr-2 transition-colors duration-200 hover:text-gray-500" />, title: "Trip Planner", description: "Susun Rute Perjalananmu Sendiri" },
      { icon: <Users className="h-12 w-12 text-gray-500 mr-2 transition-colors duration-200 hover:text-gray-500" />, title: "Guide", description: "Tour Guide berbahasa Indonesia" },
      { icon: <Info className="h-12 w-12 text-gray-500 mr-2 transition-colors duration-200 hover:text-gray-500" />, title: "Info", description: "Info penting di luar negeri" },
    ],
  },
];
const testimonialsData = [
    {
      text: "Pengalaman saya bersama GetGoing sangat menyenangkan! Mereka sangat profesional dan membantu dalam merencanakan perjalanan saya.",
      name: "Diana",
    },
    {
      text: "Saya merasa sangat puas dengan pelayanan yang diberikan. Semua berjalan dengan lancar dan saya dapat menikmati liburan saya.",
      name: "Rudi",
    },
    {
      text: "GetGoing adalah solusi terbaik untuk semua kebutuhan perjalanan. Sangat direkomendasikan!",
      name: "Sarah",
    },
  ];

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuresData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === featuresData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">APA YANG GETGOING PUNYA?</h2>
        <div className="flex items-center justify-between">
          <button onClick={handlePrev} className="p-2 rounded-full bg-red-600 text-white">
            &#8592; 
          </button>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
           
              <img src={featuresData[currentIndex].image} alt="Feature Image" className="w-120 h-60 object-cover rounded-lg mr-4" />
              <div className="flex flex-col justify-center">
                {featuresData[currentIndex].features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-4 text-center hover:text-gray-500 transition-colors duration-200">
                    {feature.icon}
                    <div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button onClick={handleNext} className="p-2 rounded-full bg-red-600 text-white">
            &#8594; 
          </button>
        </div>
      </div>
    </section>
  );
};


const Component = () => {
  return (
    <div className="min-h-screen">
      <main>
        <FeaturesSection />
        

        {/* Quote Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto px-4">
            "Better to <span className="text-red-600">SEE</span> something once than hear about it{" "}
            <span className="text-blue-600">A THOUSAND TIMES</span>"
          </h2>
          <p className="mt-4 text-gray-600">- Asian Proverb.</p>
        </section>

        {/* Private Trip Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-400">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h3 className="text-xl mb-2">PRIVATE TRIP</h3>
                <h2 className="text-4xl font-bold mb-8">Berangkat <span className="text-red-600">Kapan Saja</span> Semaumu</h2>
                <PrivateTripFeatures />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <TripInfoCard title="Konsultasi GRATIS" description="Curhat aja semuanya!" />
                <TripInfoCard title="Local Guide" description="Biar ada temen!" />
                <TripInfoCard title="Transportasi" description="Bebas pilih transportasi apa" />
                <TripInfoCard title="Lengkap Paketnya" description="Hotel, Asuransi, Visa, Wifi dll" />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Cities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Kota <span className="text-red-600">Populer</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Paris", country: "Prancis", image: "/images/paris.png" },
                { name: "Bern", country: "Swiss", image: "/images/bern.png" },
                { name: "Amsterdam", country: "Belanda", image: "/images/amsterdam.png" },
                { name: "London", country: "Inggris", image: "/images/london.png" },
                { name: "Roma", country: "Italia", image: "/images/roma.png" },
              ].map((city, index) => (
                <CityCard key={index} city={city} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-2">Kata Mereka</h2>
            <p className="text-gray-600 mb-8">Pengalaman seru dari para Traveler</p>
            <div className="flex space-x-4 overflow-x-auto">
              <TestimonialCard
                text="Pengalaman saya bersama GetGoing sangat menyenangkan! Mereka sangat profesional dan membantu dalam merencanakan perjalanan saya."
                name="Diana"
              />
              <TestimonialCard
                text="Saya merasa sangat puas dengan pelayanan yang diberikan. Semua berjalan dengan lancar dan saya dapat menikmati liburan saya."
                name="Rudi"
              />
              <TestimonialCard
                text="GetGoing adalah solusi terbaik untuk semua kebutuhan perjalanan. Sangat direkomendasikan!"
                name="Sarah"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Component;

const PrivateTripFeatures = () => {
  return (
    <ul className="space-y-4 mt-4">
      <li>✓ Fleksibilitas waktu</li>
      <li>✓ Rute perjalanan khusus</li>
      <li>✓ Pilihan akomodasi</li>
      <li>✓ Pengalaman lokal yang otentik</li>
    </ul>
  );
};

const TripInfoCard = ({ title, description }) => {
  return (
    <div className="p-4 border border-white rounded-lg bg-white shadow-md text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

const CityCard = ({ city }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-semibold">{city.name}</h3>
        <p>{city.country}</p>
      </div>
    </div>
  );
};

const TestimonialCard = ({ text, name }) => {
  return (
    <div className="flex-none bg-white p-4 rounded-lg shadow-md">
      <p className="text-gray-700 mb-2">{text}</p>
      <p className="font-semibold">{name}</p>
    </div>
  );
};
