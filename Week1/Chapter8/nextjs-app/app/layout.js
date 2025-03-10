import "./globals.css"; // Import global styles

export const metadata = {
    title: "My Next.js App",
    description: "A simple Next.js application",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <nav>
            <h2>Dashboard Navigation</h2>
          </nav>
          {children}
          <footer>© 2025 My Next.js App</footer>
        </body>
      </html>
    );
  }
  