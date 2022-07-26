import './Card.scss';
import '../../../styles/variables.scss';
import Heart from '../../../components/Heart/Heart';

const Card = ({ cardList }) => {
  return (
    <>
      {cardList.map(
        ({
          id,
          thumbnail_image_url,
          brand_name,
          furniture_korean_name,
          price,
        }) => (
          <div className="card" key={id}>
            <div className="img-container">
              <img
                className="card-img"
                src={thumbnail_image_url}
                alt="product"
              />
              <div className="img-hover">
                <div className="hover-items">
                  <i className="fas fa-shopping-cart" />
                  <Heart />
                </div>
              </div>
            </div>
            <span className="brand-name">{brand_name}</span>
            <p className="card-name">{furniture_korean_name}</p>
            <p className="card-price">{price}</p>
          </div>
        )
      )}
    </>
  );
};

export default Card;
