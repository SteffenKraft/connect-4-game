import React, { useReducer, useState, useEffect, useRef } from 'react';
import Column from '../column/Column';
import Token from '../token/Token';
import styled from 'styled-components';
import { checkForWinInHorizontal, checkForWinInVertical } from './helper';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-token-into-column':
      return [...state, action.payload];
    case 'reset-game':
      return [];
    default:
      return state;
  }
};

const StyledGameHeader = styled.div`
  margin-bottom: 60px;
`;
const StyledGameMain = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const StyledGameFooter = styled.div``;

const StyledResetButton = styled.button`
  background: red;
  border: none;
  color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
`;

const Main = () => {
  const [color, setColor] = useState('yellow');
  const [state, dispatch] = useReducer(reducer, []);
  const prevToken = useRef();

  useEffect(() => {
    if (state.length > 0 && prevToken.current) {
      checkForWinInVertical(state, prevToken.current, handleReset);
      checkForWinInHorizontal(state, prevToken.current, handleReset);
    }
  }, [state]);

  const insertToken = (position, column) => {
    dispatch({
      type: 'add-token-into-column',
      payload: { column, position, color },
    });
    setColor((prev) => (prev === 'yellow' ? 'red' : 'yellow'));
    prevToken.current = { column, position, color };
  };

  const getTokenInColumn = (column) => {
    return state.filter((state) => state.column === column);
  };

  const handleReset = () => {
    dispatch({
      type: 'reset-game',
    });
    setColor('yellow');
  };

  return (
    <>
      <StyledGameHeader>
        <Token color={color} />
      </StyledGameHeader>
      <StyledGameMain>
        <Column
          insertToken={insertToken}
          column="0"
          tokens={getTokenInColumn('0')}
        />
        <Column
          insertToken={insertToken}
          column="1"
          tokens={getTokenInColumn('1')}
        />
        <Column
          insertToken={insertToken}
          column="2"
          tokens={getTokenInColumn('2')}
        />
        <Column
          insertToken={insertToken}
          column="3"
          tokens={getTokenInColumn('3')}
        />
        <Column
          insertToken={insertToken}
          column="4"
          tokens={getTokenInColumn('4')}
        />
        <Column
          insertToken={insertToken}
          column="5"
          tokens={getTokenInColumn('5')}
        />
        <Column
          insertToken={insertToken}
          column="6"
          tokens={getTokenInColumn('6')}
        />
      </StyledGameMain>
      <StyledGameFooter>
        <StyledResetButton onClick={handleReset}>Reset</StyledResetButton>
      </StyledGameFooter>
    </>
  );
};

export default Main;
