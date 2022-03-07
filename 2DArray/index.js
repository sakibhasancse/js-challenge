
var numberGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for (let i = 0; i < numberGrid.length; i++) {
  for (let j = 0; j < numberGrid[i].length; j++) {
    document.write(`<button id="btn${numberGrid[i][j]}">${numberGrid[i][j]}</button>`)
  }
  document.write('<br/>')
}

const btn5 = document.getElementById('btn5')

btn5.addEventListener('click', () => {
  const x = [...numberGrid.slice(-1, numberGrid.length), ...numberGrid.slice(0, -1)]
  numberGrid = x
  console.log(numberGrid, x)
})