import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { setActiveCard, removeCard } from '../../cardSlice';
import './CardStack.css'; 

const CardStack = () => {
  const cards = useSelector(state => state.cards.items);
  const activeCardId = useSelector(state => state.cards.activeCardId);
  const dispatch = useDispatch();

  const handleCardClick = (id) => {
    dispatch(setActiveCard(id));
  };

  const handleDeleteCard = (id, event) => {
    event.stopPropagation();
    dispatch(removeCard(id));
  };

  const inactiveCardOffset = 100; 
  const activeCardOffset = -300; 

  const getZIndex = (isActive, index, cardsArray) => isActive ? cardsArray.length : cardsArray.length - index;

  return (
    <div className="cardStack">
      {cards.map((card, index) => {
        const isActive = card.id === activeCardId;
        const translateY = isActive ? activeCardOffset : inactiveCardOffset * index;
        const style = {
          transform: `translateY(${translateY}px)`,
          zIndex: getZIndex(isActive, index, cards),
        };

        return (
          <div key={card.id} className={`cardContainer ${isActive ? 'active' : ''}`} style={style} onClick={() => handleCardClick(card.id)}>
            <Card {...card} />
            <button className="deleteButton" onClick={(e) => handleDeleteCard(card.id, e)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default CardStack;
