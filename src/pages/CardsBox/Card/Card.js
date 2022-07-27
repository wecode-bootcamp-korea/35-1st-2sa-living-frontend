// import Heart from '../../components/Heart/Heart';
import { useNavigate } from 'react-router-dom';
import './Card.scss';
import '../../../styles/variables.scss';
import Heart from '../../../components/Heart/Heart';

const Card = ({ cardList }) => {
  const navigate = useNavigate();

  const addCart = product => {
    fetch('http://10.58.1.126:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        product_id: product,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  let goTo = id => {
    navigate(`/products/${id}`);
  };

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
                <div onClick={goTo} className="hover-items" />
                <div className="card-icons">
                  <i
                    className="fas fa-shopping-cart"
                    onClick={() => {
                      addCart(id);
                    }}
                  />
                  <Heart id={id} />
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
