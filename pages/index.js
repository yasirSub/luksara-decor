import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LuksaraDecor - Bold Design, Beautiful Home</title>
        <meta name="description" content="LuksaraDecor - Bold Design, Beautiful Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>LuksaraDecor</h1>
        <p className="tagline">Bold Design, Beautiful Home</p>
        <p className="subtitle">Experience the difference</p>
        <div className="links">
          <Link href="/about" className="button">
            About Us
          </Link>
          <Link href="/products" className="button">
            Our Products
          </Link>
        </div>
      </main>

      <footer>
        <p>© 2023 LuksaraDecor. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #121212;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
          text-shadow: 0 0 10px rgba(255,255,255,0.1);
        }
        .tagline {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #b3b3b3;
          font-weight: 500;
        }
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #808080;
          font-style: italic;
        }
        .links {
          display: flex;
          margin-top: 2rem;
          gap: 1.5rem;
        }
        .button {
          background-color: #2c2c2c;
          color: #ffffff;
          border-radius: 4px;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          border: 1px solid #404040;
        }
        .button:hover {
          background-color: #404040;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #2c2c2c;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #808080;
        }
      `}</style>
    </div>
  );
} 