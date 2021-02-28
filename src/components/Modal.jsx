import React from 'react';
import styled from 'styled-components';

// These are private components

export const CM_CENTER_CENTER = Symbol('CM_CENTER_CENTER');
export const CM_TOP_LEFT = Symbol('CM_TOP_LEFT');
export const CM_TOP_CENTER = Symbol('CM_TOP_CENTER');
export const CM_TOP_RIGHT = Symbol('CM_TOP_RIGHT');

// Modal background layer - visible or invisible, but always floating above client's elements
const Model = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

// Rendered popup - a positional demo confirmation box
const Container = styled.div`
  position: fixed;
  background: #fff;
  width: 33%;
  height: auto;

  top: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: '40%',
      [CM_TOP_LEFT]: '10%',
      [CM_TOP_CENTER]: '10%',
      [CM_TOP_RIGHT]: '10%',
    }[openPos])};

  left: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: '50%',
      [CM_TOP_LEFT]: '5%',
      [CM_TOP_CENTER]: '50%',
      [CM_TOP_RIGHT]: '95%',
    }[openPos])};

  transform: ${({ openPos }) =>
    ({
      [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
      [CM_TOP_LEFT]: 'translate(0,0)',
      [CM_TOP_CENTER]: 'translate(-50%,0)',
      [CM_TOP_RIGHT]: 'translate(-100%,0)',
    }[openPos])};
  border-radius: 10px;
  padding: 0.75rem;
  color: rgba(0, 0, 139, 0.9);
`;

const Button = styled.button`
    background: ${props => props.primary ? "#424651" : "white"};
    color: ${props => props.primary ? "white" : "#424651"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #424651;
    border-radius: 3px;
    cursor: pointer;
`;

const Body = styled.div`
    margin: 20px;
    text-align: center;
`;

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: flex-end;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
`;
const Modal = (props) => {
  const {
    handleClose,
    show,
    detail,
    openPos,
  } = { ...props };

  return (
    <Model show={show}>
      <Container openPos={openPos}>
        <Body>
            <Img src={detail.image} alt={detail.image} />
            <h4>{detail.name}</h4>
            <p>
                <strong>Species : </strong> {detail.species}
                &nbsp;&nbsp;&nbsp;
                <strong>Gender : </strong> {detail.gender}
                &nbsp;&nbsp;&nbsp;
                <strong>Origin : </strong> {detail.origin.name}
            </p>
            <p>
                <strong>Status : </strong> {detail.status}
                &nbsp;&nbsp;&nbsp;
                <strong>Location : </strong> {detail.location.name}
            </p>
        </Body>
        <ButtonBar>
          <Button onClick={handleClose} primary={false}>
            Close
          </Button>
        </ButtonBar>
      </Container>
    </Model>
  );
};
export default Modal;
