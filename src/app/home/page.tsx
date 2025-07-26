import Image from 'next/image'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Home() {
  return (
	<>
		   <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-400 text-white text-center px-4 w-full">
  <div className="w-full h-full flex flex-col items-center justify-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Ваш путь к идеальному автомобилю
    </h1>
    <p className="text-sm md:text-lg text-white/80 mb-6">
      Покупка, аренда, обслуживание и запчасти — все в одном месте.
    </p>
    <div className="flex justify-center gap-4">
      <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
        Найти авто
      </button>
      <button className="border border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition">
        Продать авто
      </button>
    </div>
  </div>
</section>
<section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Наши Услуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <div className="text-blue-600 mb-4">
              <DirectionsCarIcon style={{ fontSize: 40 }} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Подержанные авто</h3>
            <p className="text-gray-500 mb-4">Широкий выбор проверенных автомобилей.</p>
            <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
              Подробнее
            </button>
          </div>

        
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <div className="text-blue-600 mb-4">
              <ShoppingCartIcon style={{ fontSize: 40 }} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Аренда авто</h3>
            <p className="text-gray-500 mb-4">Автомобили на любой срок и бюджет.</p>
            <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
              Подробнее
            </button>
          </div>

       
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <div className="text-blue-600 mb-4">
              <BuildIcon style={{ fontSize: 40 }} />
            </div>
            <h3 className="text-lg font-semibold mb-2">СТО</h3>
            <p className="text-gray-500 mb-4">Профессиональный ремонт и обслуживание.</p>
            <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
              Подробнее
            </button>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
            <div className="text-blue-600 mb-4">
              <LocationOnIcon style={{ fontSize: 40 }} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Запчасти</h3>
            <p className="text-gray-500 mb-4">Оригинальные и аналоговые запчасти.</p>
            <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </section>

	</>
  );
}
