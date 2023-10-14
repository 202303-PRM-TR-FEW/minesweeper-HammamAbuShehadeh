//Happy coding !
const example = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];
// minesweeper function to change 1 to 9
const minesweeper = (matrix) => {
  let result = [];
  for (let i = 0; i <= matrix.length - 1; i++) {
    result[i] = [];
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      if (matrix[i][j] === 1) {
        result[i][j] = 9;
      } else {
        result[i][j] = 0;
      }
    }
  }
  //   console.log(result);
  modifiedMinesweeper(result);
};

// modifiedMinesweeper function to change 0 to number of minesweeper around it
const modifiedMinesweeper = (result) => {
  // loops to change 0 to number of minesweeper
  for (let i = 0; i <= result.length - 1; i++) {
    for (let j = 0; j <= result[i].length - 1; j++) {
      if (result[i][j] >= 9) {
        result[i][j] = 9;

        // first row and (first column else middle column else last column)
        if (i === 0 && j === 0 && result[i][j] === 9) {
          result[i][j + 1]++;
          result[i + 1][j]++;
          result[i + 1][j + 1]++;
        } else if (
          i === 0 &&
          j !== 0 &&
          j !== result[i].length - 1 &&
          result[i][j] === 9
        ) {
          result[i][j - 1]++;
          result[i][j + 1]++;
          result[i + 1][j - 1]++;
          result[i + 1][j]++;
          result[i + 1][j + 1]++;
        } else if (
          i === 0 &&
          j !== 0 &&
          j === result[i].length - 1 &&
          result[i][j] === 9
        ) {
          result[i][j - 1]++;
          result[i + 1][j - 1]++;
          result[i + 1][j]++;
        }

        // middle row and (first column else middle column else last column)
        if (
          i !== 0 &&
          i !== result.length - 1 &&
          j === 0 &&
          result[i][j] === 9
        ) {
          result[i - 1][j]++;
          result[i - 1][j + 1]++;
          result[i][j + 1]++;
          result[i + 1][j]++;
          result[i + 1][j + 1]++;
        } else if (
          i !== 0 &&
          i !== result.length - 1 &&
          j !== 0 &&
          j !== result[i].length - 1 &&
          result[i][j] === 9
        ) {
          result[i][j - 1]++;
          result[i][j + 1]++;
          result[i + 1][j - 1]++;
          result[i + 1][j]++;
          result[i + 1][j + 1]++;
          result[i - 1][j - 1]++;
          result[i - 1][j]++;
          result[i - 1][j + 1]++;
        } else if (
          i !== 0 &&
          i !== result.length - 1 &&
          j !== 0 &&
          j === result[i].length - 1 &&
          result[i][j] === 9
        ) {
          result[i][j - 1]++;
          result[i + 1][j - 1]++;
          result[i + 1][j]++;
          result[i - 1][j - 1]++;
          result[i - 1][j]++;
        }

        // last row and (first column else middle column else last column
        if (
          i !== 0 &&
          i === result.length - 1 &&
          j === 0 &&
          result[i][j] === 9
        ) {
          result[i][j + 1]++;
          result[i - 1][j]++;
          result[i - 1][j + 1]++;
        } else if (
          i !== 0 &&
          i === result.length - 1 &&
          j !== 0 &&
          j !== result[i].length - 1 &&
          result[i][j] === 9
        ) {
          result[i][j - 1]++;
          result[i][j + 1]++;
          result[i - 1][j - 1]++;
          result[i - 1][j]++;
          result[i - 1][j + 1]++;
        } else if (
          i !== 0 &&
          i === result.length - 1 &&
          j !== 0 &&
          j === result[i].length - 1 &&
          result[i][j] === 9
        ) {
          result[i][j - 1]++;
          result[i - 1][j - 1]++;
          result[i - 1][j]++;
        }
      }
    }
  }

  //   another loop to change back number above 9 to 9
  for (let i = 0; i <= result.length - 1; i++) {
    for (let j = 0; j <= result[i].length - 1; j++) {
      if (result[i][j] >= 9) {
        result[i][j] = 9;
      }
    }
  }
  console.log(result);
};
minesweeper(example);

/* output 
  [
    [1, 9, 2, 1],
    [2, 3, 9, 2],
    [3, 9, 4, 9],
    [9, 9, 3, 1],
  ]
  */
