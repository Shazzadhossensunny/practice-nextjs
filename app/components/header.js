import Link from "next/link";


export default function Header() {
  return (
    <nav className="bg-yellow-200 py-5">
        <ul className="flex justify-center items-center gap-6">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/blogs'>Blogs</Link></li>
            <li><Link href='/posts'>Posts</Link></li>
            <li><Link href='/contact'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}
