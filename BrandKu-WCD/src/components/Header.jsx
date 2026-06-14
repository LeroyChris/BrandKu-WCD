export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">BrandKu</h1>
      <nav className="flex gap-4">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
          Beranda
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
          Fitur
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
          Harga
        </a>
      </nav>
    </header>
  );
}
