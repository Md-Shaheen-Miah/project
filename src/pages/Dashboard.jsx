import React from 'react'
import './style.css'
const Dashboard = () => {
  return (
    <div className="homepage">
      
      <main>
        <section className="hero">
          <h2>Welcome to ShopEasy</h2>
          <p>Your one-stop shop for all your needs!</p>
          <button>Shop Now</button>
        </section>
        
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$19.99</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$29.99</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 3" />
              <h3>Product 3</h3>
              <p>$39.99</p>
            </div>
          </div>
        </section>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$19.99</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$29.99</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 3" />
              <h3>Product 3</h3>
              <p>$39.99</p>
            </div>
          </div>
        </section>
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$19.99</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$29.99</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product 3" />
              <h3>Product 3</h3>
              <p>$39.99</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 ShopEasy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Dashboard
