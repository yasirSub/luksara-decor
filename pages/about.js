import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About - LuksaraDecor</title>
        <meta name="description" content="About LuksaraDecor - Bold Design, Beautiful Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About LuksaraDecor</h1>
        <div className="content">
          <p>
            LuksaraDecor brings bold design aesthetics to transform ordinary spaces into beautiful homes. 
            We believe that your living space should reflect your personality and style.
          </p>
          <p>
            Our carefully curated collection of home decor items combines elegance, functionality, and artistic expression
            to create spaces that inspire and comfort.
          </p>
        </div>
        <div className="back-link">
          <Link href="/" className="button">Back to Home</Link>
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
          background-color: #f8f5f2;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 800px;
          text-align: center;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #2d2926;
        }
        .content {
          margin-bottom: 2rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #5e503f;
          margin-bottom: 1.5rem;
        }
        .back-link {
          margin-top: 2rem;
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