import Image from 'next/image'

export default function InfoPage() {
  return (
	 <div className='max-w-[1180px] mx-auto mb-[180px]'>
		<h1 className='mt-[40px]'><span className=' text-[35px] text-[#4A789C]'>Used Cars/</span><span className=' text-[35px] text-[#4A789C]'>Sedan /</span><span className='text-[35px] font-bold'>2018 Honda Civic</span></h1>
	
   <Image
		src="/parviz/info.png"
		alt="2018 Honda Civic"
		width={1180}
		height={450}
		className="w-full h-auto mt-[40px] rounded-lg shadow-lg"
	/>
   <section className='mt-[40px]'>
		<h1 className='text-[30px] font-bold mt-4'>
			2018 Honda Civic Sedan
		</h1>
		<p className='text-[20px] mt-2'>This 2018 Honda Civic Sedan is in excellent condition with low mileage. It features a fuel-efficient engine, comfortable interior, and advanced safety features. Perfect for daily commutes or long drives.</p>

	</section>

	<section>
		<h1 className='text-[30px] font-bold mt-4'>
			Specifications
		</h1>
		 <div className='mt-[40px]'>
     
      <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-[20px]">
        <div>
          <p className="text-gray-500">Make</p>
          <p className="text-black">Honda</p>
        </div>
        <div>
          <p className="text-gray-500">Model</p>
          <p className="text-black">Civic</p>
        </div>
        <div>
          <p className="text-gray-500">Year</p>
          <p className="text-black">2018</p>
        </div>
        <div>
          <p className="text-gray-500">Mileage</p>
          <p className="text-black">45,000 miles</p>
        </div>
        <div>
          <p className="text-gray-500">Body Type</p>
          <p className="text-black">Sedan</p>
        </div>
        <div>
          <p className="text-gray-500">Fuel Type</p>
          <p className="text-black">Gasoline</p>
        </div>
        <div>
          <p className="text-gray-500">Transmission</p>
          <p className="text-black">Automatic</p>
        </div>
        <div>
          <p className="text-gray-500">Color</p>
          <p className="text-black">Silver</p>
        </div>
      </div>
    </div>
	</section>


	{/* <section>
	<h1 className='text-[30px] font-bold mt-4'>
			Seller Information
		</h1>
		<div className='flex items-center w-[40%]'>
			<Image
				src="/parviz/avatar.png"
				alt="Seller Information"
				width={100}
				height={0}
				className="mt-[40px] rounded-lg shadow-lg"
			/>
			<div>
				<p>Sophia Carter</p>
			<p className='text-[20px]'>Available for calls and messages</p>
			</div>
		</div>

	</section> */}
<section className="bg-white p-6 mt-[60px]">
      <h1 className="text-[24px] font-bold mb-4">Seller Information</h1>
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="/parviz/avatar.png"
          alt="Seller Avatar"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold text-[16px]">Sophia Carter</p>
          <p className="text-blue-500 text-sm">Available for calls and messages</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-600 transition">
          Contact Seller
        </button>
        <button className="bg-gray-100 text-black text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition">
          Add to Favorites
        </button>
      </div>
    </section>
	 </div>
  );
}