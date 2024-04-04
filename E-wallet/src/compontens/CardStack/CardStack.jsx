// src/components/CardStack/CardStack.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { setActiveCard } from '../../cardSlice';

const CardStack = () => {
  const cards = useSelector((state) => state.cards.items);
  const activeCardId = useSelector((state) => state.cards.activeCardId);
  const dispatch = useDispatch();

  const handleCardClick = (id) => {
    dispatch(setActiveCard(id));
  };

  return (
    <div className="cardStack">
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
          isActive={card.id === activeCardId}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default CardStack;
