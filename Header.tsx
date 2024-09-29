import Link from "next/link";
export default function Header() {
  return (
   <div>
   <ul className="flex gap-2 bg-red-600">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about-us">About-Us</Link></li>
    <li><Link href="/contact-us">Contact-Us</Link></li>
    <li><Link href="/carrier">Carrier</Link></li>
   </ul>
   </div>
  );
}
