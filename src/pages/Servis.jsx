"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Component() {
  const [formData, setFormData] = useState({
    namaDepan: "",
    namaBelakang: "",
    email: "",
    telepon: "",
    service: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const tripsData = [
    {
      title: "Fall- Aghnest",
      image: "/images/fall.JPG",
    },
    {
      title: "Spring - Rizky",
      image: "/images/spring2.jpg",
    },
    {
      title: "Summer - meta",
      image: "/images/summer.jpg",
    },
    {
      title: "Winter - Permadi",
      image: "/images/winter.jpg",
    },
    {
      title: "Summer - LOP",
      image: "/images/summer2.jpg",
    },
    {
      title: "Spring -Vincent",
      image: "/images/spring2.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] bg-gray-900">
          <img
            src="/images/family.JPG"
            alt="Hero background"
            className="object-cover opacity-50 w-full h-full"
          />
          <div className="container mx-auto px-4 py-16 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-xl mb-2">PRIVATE TRIP</h3>
                <h1 className="text-4xl font-bold mb-8">
                  Berangkat <span className="text-red-500">Kapan Saja</span>{" "}
                  <br />
                  Semaumu
                </h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm">
                      Tentukan tanggal keberangkatan sesukamu
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm">
                      Tidak ada kuota minimum, jadi pasti berangkat
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm">
                      Fleksibel, bebas tentukan destinasi dan aktivitas
                      perjalanan
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-sm">
                      Liburan jadi lebih exclusive untuk kamu dan keluarga
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 p-6 rounded-lg text-white">
                <h2 className="text-xl font-bold mb-4">
                  Konsultasikan dengan Kami
                </h2>
                <p className="text-sm mb-6">
                  Kami akan segera menghubungi rencana perjalananmu!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm">Nama Depan *</label>
                      <input
                        type="text"
                        name="namaDepan"
                        value={formData.namaDepan}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm">Nama Belakang</label>
                      <input
                        type="text"
                        name="namaBelakang"
                        value={formData.namaBelakang}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm">Alamat Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm">Nomor Telepon</label>
                    <input
                      type="tel"
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
                    >
                      <option value="">PILIH SERVICE</option>
                      <option value="Private Trip">Private Trip</option>
                      <option value="Group Trip">Group Trip</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm">Tulis Pesanmu</label>
                    <textarea
                      name="pesan"
                      value={formData.pesan}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded bg-white/10 border border-white/20"
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-green-500 text-white py-2 rounded-full hover:bg-green-600"
                    >
                      Chat Via WA
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-white text-red-600 py-2 rounded-full hover:bg-gray-100"
                    >
                      Gratis Konsultasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Trip Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              {tripsData.map((trip, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={trip.image}
                    alt={`Trip ${index + 1}`}
                    className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <h4 className="text-white font-bold p-4">{trip.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
