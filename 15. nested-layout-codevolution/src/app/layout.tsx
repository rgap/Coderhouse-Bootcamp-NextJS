// root layout
// created even if deleted

export const metadata = {
  title: "Next.js",
  description: "Generated by Next",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue" }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}