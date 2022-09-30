let i = 0;
let total = 0;
let color='#000000';
let isDown = false;

// const getVal = () => {
//   let val = document.querySelector('input').value;
//   val = parseInt(val);
//   if (typeof(val) !== 'number'){
//     alert("Please provide valid number");
//   } else if (val > 100){
//     createNewBoard(16);
//   } else {
//     createNewBoard(val);
//   }
// }

//whenever the number of cells are entered it will be converted to the celled board
let main_el = document.querySelector('#cell');
main_el.addEventListener('input', () => {
  if (main_el.value>50) {  
  createNewBoard(50)
  } else {
  createNewBoard(main_el.value);
  }
})



//picks color and assigns it to a color variable
let color_el = document.querySelector('#colorPicker');
color_el.addEventListener('input', () => {
  color = color_el.value;
  let cell_id = document.querySelectorAll('.cellito');
  cell_id.forEach( element => {
  element.addEventListener('mousedown', () => {
    element.style.backgroundColor = color;
    
  })
  element.addEventListener('mouseover', () => {
    if (isDown === true ) {
      element.style.backgroundColor = color;
    } 
  })
  
})

})


//Creates a one cell of 
const createCell = () => {
  const a = document.querySelector('.container');
  let el = document.createElement('div');
  el.classList = "cellito";
  el.style.cssText = "background-color: white; border: 1px solid gray";
  a.appendChild(el);
}

//creates a new board of specified cell with row and col, removes the previous cell
const createNewBoard = (row) => {

  const delAll = document.querySelectorAll('.cellito');
  let i = 0;
  for (i=0; i<delAll.length; i++){
    delAll[i].remove();
  }

  const total = row*row;
  for (i = 0; i<total; i++) {
    createCell();
  }
  const container = document.querySelector('.container');
  container.style['grid-template-rows'] = `repeat(${row},${100/row}%)`;
  container.style['grid-template-columns'] = `repeat(${row},${100/row}%)`;
  container.addEventListener('mousedown', () => {
    isDown = true;
  })
  container.addEventListener('mouseup', () => {
    isDown = false;
  })
  
  let cell_id = document.querySelectorAll('.cellito');
  


  cell_id.forEach( element => {
  element.addEventListener('mousedown', () => {
    element.style.backgroundColor = color;
  })
  element.addEventListener('mouseover', () => {
    if (isDown === true ) {
      element.style.backgroundColor = color;
    } 
  })
  });
}

const erase = () => {
  color = '#FFFFFF';
  
}



