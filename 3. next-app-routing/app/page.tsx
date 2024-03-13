import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/users">Users Page</Link>
    </main>
  );
}
