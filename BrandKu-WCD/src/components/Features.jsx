const features = [
  {
    title: "Mudah Digunakan",
    description: "Tidak perlu keahlian teknis. Setup dalam 5 menit.",
  },
  {
    title: "Serba Otomatis",
    description:
      "Otomatiskan tugas berulang dan fokus pada hal yang penting.",
  },
  {
    title: "Laporan Real-time",
    description:
      "Pantau performa bisnismu kapan saja dan di mana saja.",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Mengapa BrandKu?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((item, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
