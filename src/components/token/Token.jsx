import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 53px;
  width: 60px;
  display: flex;
  justify-content: center;
`;

const StyledToken = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  background-color: ${(props) => props.color === 'yellow' && '#ffdf00'};
  border-color: ${(props) => props.color === 'yellow' && '#e4c72f'};
  background-color: ${(props) => props.color === 'red' && '#fb4c4c'};
  border-color: ${(props) => props.color === 'red' && '#e42f2f'};
`;

const Token = ({ color }) => {
  return (
    <StyledWrapper>
      <StyledToken color={color}></StyledToken>
    </StyledWrapper>
  );
};

export default Token;
