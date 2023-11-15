const grids = document.querySelector('#grids');
const start = document.querySelector('#start');


start.addEventListener('click', () => {
    
    grids.innerHTML = '';  // emptying the box
    
   const numGrids = +prompt('pad size: ', '16');
   
   if(numGrids > 0 && numGrids <=100){  // avoid negative numbers and big number of grids
        for (let i = 1; i<=numGrids; i++){
            const gridElem = document.createElement('div');
             gridElem.setAttribute('class', 'gridElem');
                for (let j = 1; j<= numGrids; j++){
                    const square = document.createElement('div');
                    square.setAttribute('class', 'square');
                    gridElem.appendChild(square);
                    
                    // putting color on the divs
            square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
                /*if(!gridElem.style.opacity){
                    gridElem.style.opacity = 0.1;
                }else {
                    gridElem.style.opacity += 0.1
                };  */  
            }) 
                };
             
            grids.appendChild(gridElem);
            
            
            
        }
    }else{
       alert('Enter a valid pad size.');
    }

})





