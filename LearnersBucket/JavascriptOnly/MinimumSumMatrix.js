const matrix = [
    [21, 12, 36, 23],
    [14, 51, 66, 12],
    [72, 28, 91, 11],
    [72, 2, 99, 12],
    [23, 81, 1, 33]
  ];

//  the minimum sum possible is 38 [23,2,1,33]. We can move from first column to last column. diagonally up, move forward, diagonally down. 
// this question was asked in Vikas Service now interview first round


const findMinimumSum = (matrix) =>
{
    let row = matrix.length;
    let column = matrix[0].length;

    for(let i=0;i<row;i++){
        console.log(matrix[i])
    }
};

findMinimumSum(matrix)