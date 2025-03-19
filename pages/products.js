import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Artisan Ceramic Vase',
      description: 'Handcrafted ceramic vase with unique geometric patterns.',
      price: '$59.99'
    },
    {
      id: 2,
      name: 'Minimalist Wall Clock',
      description: 'Elegant wooden wall clock with a clean, modern design.',
      price: '$45.99'
    },
    {
      id: 3,
      name: 'Luxury Throw Blanket',
      description: 'Soft, hand-woven throw blanket in rich earthy tones.',
      price: '$79.99'
    },
    {
      id: 4,
      name: 'Decorative Wall Mirror',
      description: 'Round brass-framed mirror that adds depth and light to any room.',
      price: '$129.99'
    }
  ];

  return (
    <div className="container">
      <Head>
        <title>Products - LuksaraDecor</title>
        <meta name="description" content="Our Products - LuksaraDecor - Bold Design, Beautiful Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Our Products</h1>
        <p className="subtitle">Transforming spaces with bold design</p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
              <button className="cta-button">View Details</button>
            </div>
          ))}
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
          align-items: center;
          background-color: #f8f5f2;
        }
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          width: 100%;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #2d2926;
        }
        .subtitle {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          color: #5e503f;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
          width: 100%;
          padding: 0 1rem;
          margin-bottom: 3rem;
        }
        .product-card {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }
        .product-card h2 {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          color: #2d2926;
        }
        .description {
          color: #5e503f;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .price {
          font-size: 1.3rem;
          font-weight: 600;
          color: #a67f5d;
          margin-bottom: 1.5rem;
        }
        .cta-button {
          background-color: #a67f5d;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 0.7rem 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s;
          font-weight: 500;
          width: 100%;
        }
        .cta-button:hover {
          background-color: #8a6343;
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
          margin-top: 2rem;
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