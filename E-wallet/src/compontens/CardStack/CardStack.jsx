import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { setActiveCard, removeCard } from '../../cardSlice'; // Import removeCard
import './CardStack.css';

const CardStack = () => {
  const cards = useSelector((state) => state.cards.items);
  const activeCardId = useSelector((state) => state.cards.activeCardId);
  const dispatch = useDispatch();

  const handleCardClick = (id) => {
    dispatch(setActiveCard(id));
  };

  // Function to handle card deletion
  const handleDeleteCard = (id, event) => {
    event.stopPropagation(); // Prevent card click event
    dispatch(removeCard(id));
  };

  // Dynamically calculate zIndex for each card
  // The active card should have the highest zIndex
  const getZIndex = (cardId, index) => {
    if (cardId === activeCardId) {
      return 1000; // Ensure active card is always on top
    }
    // Other cards have a lower zIndex, further from the top based on their index
    return cards.length - index;
  };

  return (
    <div className="cardStack">
      {cards.map((card, index) => {
        const isActive = card.id === activeCardId;
        const translateY = isActive ? 0 : 30 * (index + 1);
        return (
          <div key={card.id} className="cardContainer" style={{ position: 'relative' }}>
         <Card
  {...card}
  className={card.id === activeCardId ? 'active' : 'inactive'}
  onClick={() => handleCardClick(card.id)}
  style={{
    transform: `translateY(${translateY}px) translateX(-50%)`,
    zIndex: getZIndex(card.id, index),
  }}
/>
            <button
              className="deleteButton"
          
              onClick={(e) => handleDeleteCard(card.id, e)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CardStack;
