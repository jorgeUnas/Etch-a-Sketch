const grids = document.querySelector('#grids');
const start = document.querySelector('#start');
const random = document.querySelector('#random');
const blackmode = document.querySelector('#blackMode');
const erasermode = document.querySelector('#eraser');

const black = RGBA(0,0,0,1.0);
const white = RGBA(255,255,255,1.0);
var rainbow = false;
var eraser = false;



//rainbow activactor

random.addEventListener('click', () => {
    rainbow = true;
});
blackmode.addEventListener('click', () => {
    rainbow = false;
    eraser = false;
});
erasermode.addEventListener('click', () => {
    eraser = true;
    rainbow = false;
});





start.addEventListener('click', () => {
    
    grids.innerHTML = '';  // emptying the box
    
   const numGrids = +prompt('pad size: ', '16');
   
   if(numGrids > 0 && numGrids <=100){  // avoid negative numbers and big number of grids
        for (let i = 1; i<=numGrids; i++){
            const gridElem = document.createElement('div');
             gridElem.setAttribute('class', 'gridElem');
                //create squares
                for (let j = 1; j<= numGrids; j++){
                    const square = document.createElement('div');
                    square.setAttribute('class', 'square');
                    gridElem.appendChild(square);
                    
                    // putting color on the squares
                    square.addEventListener('mouseover', () => {
                        
                        if (rainbow){  // rainbow mode
                            square.style.backgroundColor = randomColors();
                        }else if (eraser){  // black mode
                            square.style.backgroundColor = white;
                        }else{
                            square.style.backgroundColor = black;
                        }
                         
                    }) 
                };
             
            grids.appendChild(gridElem);
            
            
            
        }
    }else{
       alert('Enter a valid pad size.');
    }

})


function RGBA(red,green,blue,alpha) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
        return "rgba("+this.red+","+this.green+","+this.blue+","+this.alpha+")";

}

//use ramdom colors

function randomColors(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    
    return RGBA(red, green, blue, 1.0);
}

console.log(randomColors());




