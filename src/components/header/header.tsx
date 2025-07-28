import Link from 'next/link'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Header() {
  return (
	 <header className=" p-4 w-[100%] flex justify-around">
		<nav className=" flex justify-around w-[100%]">
			   		  <Link href="/">
						 <div className='flex gap-[10px] items-center'> <ToysOutlinedIcon sx={{fontSize:'30px'}}/>
						  <h1 className="text-2xl font-bold">DriveTime.tj</h1></div></Link>
		  <ul className="flex space-x-4">
		    <Link href="/"><li>Главная</li></Link>
			 <Link href="/auto"><li>Автомобили</li></Link>
			 <Link href="/arenda"><li>Аренда</li></Link>
			 <Link href="/auto-parts"><li>Запчасти</li></Link>
			 <Link href="/sto"><li>СТО</li></Link>
		  </ul>
		  <div className="flex space-x-4">
			<FavoriteBorderIcon/>
			<ShoppingCartOutlinedIcon/>
		  </div>
		</nav>
	 </header>
  );
}























