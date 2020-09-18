/*eslint no-loop-func: 0*/

export const checkForWinInVertical = (state, prevToken, handleReset) => {
  if (prevToken.position >= 3) {
    const columnState = state.filter((s) => s.column === prevToken.column);
    let iPosition = prevToken.position;
    let count = [];

    while (iPosition >= 0) {
      // check if the one position below Token has the same color as the last insert Token
      if (columnState[iPosition].color === prevToken.color) {
        count.push(columnState[iPosition].color);
      } else {
        break;
      }
      iPosition--;
    }
    if (count.length >= 4) {
      alert(`Congrats ${prevToken.color}, you did win the game!`);
      handleReset();
    }
  }
};

export const checkForWinInHorizontal = (state, prevToken, handleReset) => {
  const rowState = state.filter((s) => s.position === prevToken.position);
  if (rowState.length >= 4) {
    let iLeftColumn = prevToken.column;
    let iRightColumn = prevToken.column;
    let leftSideCount = [];
    let rightSideCount = [];

    // check left side of last insert Token
    while (iLeftColumn >= 0) {
      const nextLeftToken = rowState.find(
        (s) => s.column === iLeftColumn.toString()
      );

      // check next left Token has the same color as the last insert Token
      if (nextLeftToken && nextLeftToken.color === prevToken.color) {
        leftSideCount.push(nextLeftToken.color);
      } else {
        break;
      }
      iLeftColumn--;
    }

    // check right side of current Token
    while (iRightColumn <= 6) {
      const nextRightToken = rowState.find(
        (s) => s.column === iRightColumn.toString()
      );

      // check next right Token has the same color as the last insert Token
      if (nextRightToken && nextRightToken.color === prevToken.color) {
        rightSideCount.push(nextRightToken.color);
      } else {
        break;
      }
      iRightColumn++;
    }

    const total = leftSideCount.length + rightSideCount.length - 1;
    if (total >= 4) {
      alert(`Congrats ${prevToken.color}, you did win the game!`);
      handleReset();
    }
  }
};
