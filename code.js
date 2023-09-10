

const container = document.querySelector('.container')
const colorPrompt = 'red'
const resizeBtn = document.querySelector('button')
      
const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')
  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div')
    row.classList.add('grid-row')
    
    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 960 / amtOfGrids
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width = `${widthAndHeight}px`
      gridBox.style.height = `${widthAndHeight}px`
      
      row.appendChild(gridBox)
      gridBox.addEventListener('mouseenter', () => {
gridBox.style.backgroundColor = 'black'})
      
    }
  
 wrapper.appendChild(row) 
  }
  container.appendChild(wrapper)
}



resizeBtn.addEventListener('click', () => {
  let userSize = Number(prompt('What dimensions do you want for the grid?'))
  while (userSize > 100) {
    userSize = Number(prompt('Pick a number less than or equal to 100'))
  }
  const wrapper = document.querySelector('.wrapper')
  
  if (!wrapper) {
    createGrid(userSize)
  } else {
  wrapper.remove()
  createGrid(userSize)
  }
  
})


createGrid(16)

