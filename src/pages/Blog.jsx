import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Component() {
  return (
    <div className="min-h-screen">

      <main className="pt-20">
        {/* Featured Post */}
        <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
          <img
            src="/images/family.JPG"
            alt="Featured post"
            className="object-cover opacity-70 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <div className="container mx-auto px-4 h-full flex items-end pb-16">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl font-bold mb-4">
                  Mengapa Wisata di Swiss Sangat Spesial bagi Wisatawan Indonesia?
                </h1>
                <Link 
                  to="#" 
                  className="inline-block text-red-500 hover:text-red-400"
                >
                  LANJUTKAN MEMBACA →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Pentingnya Bagi Travelers Mengetahui Kedutaan Besar Republik Indonesia yang Berada di Eropa",
                  date: "15 Agu 2024",
                  image: "/images/blog1.png"
                },
                {
                  title: "Rekomendasi Destinasi Terbaik di Eropa untuk Liburan Musim Panas",
                  date: "10 Jun 2024",
                  image: "/images/blog2.png"
                },
                {
                  title: "Siapa Kami? - Mega Liyanti",
                  date: "20 Mei 2024",
                  image: "/images/blog3.png"
                },
                {
                  title: "Mengungkap Sejarah dan Keajaiban Christmas Market di Seluruh Dunia",
                  date: "30 Des 2023",
                  image: "/images/blog4.png"
                },
                {
                  title: "10 Rekomendasi Taman Nasional di Eropa",
                  date: "17 Jul 2023",
                  image: "/images/blog5.png"
                },
                {
                  title: "Menjelajahi Keindahan Hamburg dengan Beragam Wisatanya",
                  date: "25 Jun 2023",
                  image: "/images/blog6.png"
                },
                {
                  title: "Liburan Seru ke London Bersama Keluarga dan Anak-anak",
                  date: "15 Jun 2023",
                  image: "/images/blog7.png"
                },
                {
                  title: "Daylight Saving Time: Upaya Maksimalkan Cahaya Matahari",
                  date: "10 Jun 2023",
                  image: "/images/blog8.png"
                },
                {
                  title: "Menyalami Pesona Desa Dolomites: Memahami Keajaiban Alam dan Budaya di Italia Utara",
                  date: "5 Jun 2023",
                  image: "/images/blog9.png"
                }
              ].map((post, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover transition-transform group-hover:scale-105 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-semibold text-lg line-clamp-2 group-hover:text-red-600">
                      {post.title}
                    </h2>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link 
                        to="#" 
                        className="text-red-600 text-sm hover:underline"
                      >
                        LANJUTKAN MEMBACA →
                      </Link>
                    </div>
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
