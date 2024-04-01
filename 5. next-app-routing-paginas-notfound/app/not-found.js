"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 my-4">Page Not Found</h1>
        <hr />
        <p className="text-base mt-4">La ruta NO EXISTE</p>
        <button>Volver</button>
      </main>
    </>
  );
}
