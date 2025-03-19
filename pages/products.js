import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Modern Accent Chair',
      description: 'Elegant velvet accent chair with gold-finished metal legs',
      price: '$299.99'
    },
    {
      id: 2,
      name: 'Geometric Wall Mirror',
      description: 'Hexagonal wall mirror with brass frame',
      price: '$159.99'
    },
    {
      id: 3,
      name: 'Ceramic Vase Set',
      description: 'Set of 3 handcrafted ceramic vases in earth tones',
      price: '$89.99'
    },
    {
      id: 4,
      name: 'Pendant Light Fixture',
      description: 'Contemporary black and gold pendant light',
      price: '$249.99'
    }
  ];

  return (
    <div className="container">
      <Head>
        <title>Our Products - LuksaraDecor</title>
        <meta name="description" content="Explore our collection of premium home decor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
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
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #ffffff;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.1);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          width: 100%;
          margin-bottom: 3rem;
        }
        .product-card {
          background-color: #1e1e1e;
          border: 1px solid #2c2c2c;
          border-radius: 8px;
          padding: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }
        .product-card h2 {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .description {
          color: #b3b3b3;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .price {
          color: #4CAF50;
          font-size: 1.25rem;
          font-weight: 600;
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
          margin-top: 2rem;
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
        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
} 