import Link from "next/link";


export default function Header2() {
  return (
    <nav className="bg-purple-200 py-5">
        <ul className="flex justify-center items-center gap-6">
            <li><Link href='/about/mission'>Mission</Link></li>
            <li><Link href='/about/vission'>Vission</Link></li>
        </ul>
    </nav>
  )
}
