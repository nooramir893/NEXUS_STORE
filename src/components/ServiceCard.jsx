import { Link } from 'react-router-dom';

export default function ServiceCard({ product }) {
  return (
    <div className="service-card">
      <img src={product.image} alt={product.title} className="service-card__img" />
      <h3 className="service-card__title">{product.title}</h3>
      <p className="service-card__price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="service-card__link">
        View Details
      </Link>
    </div>
  );
}
