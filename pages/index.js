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
          background-color: #f8f5f2;
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
          color: #2d2926;
        }
        .tagline {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #5e503f;
          font-weight: 500;
        }
        .links {
          display: flex;
          margin-top: 2rem;
          gap: 1.5rem;
        }
        .button {
          background-color: #a67f5d;
          color: white;
          border-radius: 4px;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          transition: background-color 0.3s;
          font-weight: 500;
        }
        .button:hover {
          background-color: #8a6343;
        }
        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #5e503f;
        }
      `}</style>
    </div>
  );
} 