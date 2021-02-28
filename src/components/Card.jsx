import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem;
`;

const Card = ({ title, image, openDetail, record }) => {
  return (
    <Wrapper key={record.id} onClick={() => openDetail(record)} >
        <img src={image} alt={image} />
        <Title>{title}</Title>
    </Wrapper>
  );
};

export default Card;
