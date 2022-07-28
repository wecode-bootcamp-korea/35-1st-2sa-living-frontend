// import Heart from '../../components/Heart/Heart';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';
import '../../../styles/variables.scss';
import Heart from '../../../components/Heart/Heart';

const Card = ({ cardList }) => {
  const navigate = useNavigate();
  let [likes, setLikes] = useState([]);

  useEffect(() => {
    fetch('http://10.58.7.204:8000/users/likes', {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('jwt') },
    })
      .then(response => response.json())
      .then(data => setLikes(data.product_ids));
  }, []);

  const addCart = product => {
    fetch('http://10.58.7.204:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        product_id: product,
        quantity: 1,
      }),
    }).then(response => response.json());
  };

  let goTo = id => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      {cardList.map(({ id, image, brandName, productName, price }) => (
        <div className="card" key={id}>
          <div className="img-container">
            <img className="card-img" src={image} alt="product" />
            <div className="img-hover">
              <div onClick={goTo} className="hover-items" />
              <div className="card-icons">
                <i
                  className="fas fa-shopping-cart"
                  onClick={() => {
                    addCart(id);
                  }}
                />
                {likes.length === 0 ? (
                  <Heart id={id} a={false} setLikes={setLikes} />
                ) : (
                  likes.map(els => {
                    return els === id ? (
                      <Heart id={id} a={true} setLikes={setLikes} />
                    ) : (
                      <Heart id={id} a={false} setLikes={setLikes} />
                    );
                  })
                )}
              </div>
            </div>
          </div>
          <span className="brand-name">{brandName}</span>
          <p className="card-name">{productName}</p>
          <p className="card-price">{price}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
