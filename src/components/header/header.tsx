import Link from 'next/link'

export default function Header() {
  return (
	 <header className="header flex justify-center	bg-gray-700 items-center p-4  text-white">
		<nav className="header-nav flex space-x-4">
		  <ul className="flex space-x-4">
		    <Link href="/"><li>Home</li></Link>
			 <Link href="/about"><li>About</li></Link>
			 <Link href="/sto"><li>Sto</li></Link>
		  </ul>
		</nav>
	 </header>
  );
}