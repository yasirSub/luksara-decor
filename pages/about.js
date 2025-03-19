import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Us - LuksaraDecor</title>
        <meta name="description" content="Learn about LuksaraDecor's mission and values" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About LuksaraDecor</h1>
        <div className="content">
          <p>
            Welcome to LuksaraDecor, where we transform houses into homes through
            thoughtfully curated decor and furniture pieces. Our passion lies in
            creating spaces that reflect your unique style while maintaining
            functionality and comfort.
          </p>
          <p>
            Founded with a vision to make high-quality home decor accessible to
            everyone, we carefully select each piece in our collection to ensure it
            meets our standards of excellence in both design and craftsmanship.
          </p>
          <p>
            Our team of experienced designers and craftspeople work together to
            bring you pieces that are not just beautiful, but also built to last.
          </p>
        </div>
        <Link href="/" className="button">
          Back to Home
        </Link>
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
          background-color: #121212;
        }
        main {
          padding: 5rem 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
          margin: 0 auto;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #ffffff;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.1);
        }
        .content {
          margin-bottom: 2rem;
          line-height: 1.8;
        }
        .content p {
          margin-bottom: 1.5rem;
          color: #e0e0e0;
          font-size: 1.1rem;
          text-align: justify;
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