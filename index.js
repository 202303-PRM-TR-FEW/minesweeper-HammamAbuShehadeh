//Happy coding !
const example = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

const minesweeper = (matrix) => {
  let result = [];
  let str = [];
  for (let i = 0; i <= matrix.length - 1; i++) {
    //  console.log(matrix[i]);
    //  console.log(matrix[i+1]);
    //  console.log(matrix[i-1]);
    result[i] = [];
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      if (matrix[i][j] === 1) {
        // console.log(i,j);
        result[i][j] = 9;
        str.push(result[i][j]);
        // return (i,j)
      } else {
        // result[i][j] = 1;
        result[i][j] = 0;

        str.push(result[i][j]);
      }
    }
    // str.push(result[i])
  }
  console.log(str);
  // console.log(i,j);
  console.log(result);
  modifiedMinesweeper(result);
};

const modifiedMinesweeper = (result) => {
  for (let i = 0; i <= result.length - 1; i++) {
    for (let j = 0; j <= result[i].length - 1; j++) {
      if (result[i][j] >= 9) {
        result[i][j] = 9;
        if (i === 0 && j === 0 && result[i][j] === 9) {
          result[i][j + 1]++;
          result[i + 1][j]++;
          result[i + 1][j + 1]++;
        } else if (
          i === 0 &&
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
          j === result[i].length - 1 &&
          result[i][j] === 9
        ) {
          result[i][j - 1]++;
          result[i + 1][j - 1]++;
          result[i + 1][j]++;
        }

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
  for (let i = 0; i <= result.length - 1; i++) {
    for (let j = 0; j <= result[i].length - 1; j++) {
        if (result[i][j]>=9){
            result[i][j]=9
        }
    }}
  console.log(result);
};

// if ( i > 0 && i < matrix.length - 1 ) {
//     result[i][j] = 9

//  result[i][j-1] +=1
// result[i][j+1]+=1

// result[i-1][j]+=1
// result[i-1][j-1]+=1
// result[i-1][j+1]+=1

// result[i+1][j]+=1
// result[i+1][j-1]+=1
// result[i+1][j+1]+=1

// }

// result[i][j-1] =+1
// result[i][j+1]=+1

//  return result

//  console.log(result);

//

// if ( i = matrix.length - 1){}
//

/*
      
        waldo = matrix[0][0];
        if (waldo === matrix[i][j]) {
          continue;
        } else {
          waldo = matrix[i][j];
          console.log([i + 1, j + 1]);
          return [i + 1, j + 1];
        }
      }
*/

minesweeper(example);

/*
  [
    [1, 9, 2, 1],
    [2, 3, 9, 2],
    [3, 9, 4, 9],
    [9, 9, 3, 1],
  ]
  */
