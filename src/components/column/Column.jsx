import React from 'react';
import styled from 'styled-components';
import Token from '../token/Token';

const StyledColumn = styled.div`
  height: 323px;
  width: 60px;
  border: 4px solid #6fa7fd;
  border-top: 1px solid #6fa7fd;
  display: flex;
  flex-wrap: wrap-reverse;
  align-content: flex-start;
  margin-left: -4px;
  cursor: pointer;
`;

const Column = ({ insertToken, column, tokens }) => {
  const position = tokens.length;

  const handleClickOnColumn = () => {
    if (position > 5) {
      alert('This Column is already full');
    } else {
      insertToken(position, column);
    }
  };

  return (
    <StyledColumn onClick={handleClickOnColumn}>
      {tokens?.length > 0
        ? tokens.map((token) => (
            <Token key={token.position} color={token.color} />
          ))
        : null}
    </StyledColumn>
  );
};

export default Column;
