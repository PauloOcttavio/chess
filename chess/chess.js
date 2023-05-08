let counter =0
let createButton= document.createElement('button')
let children = document.getElementById('chessboard').children
let ids =[]
for(let f=0;f<children.length;f++)
{
    ids[f]=children[f].id
}
    

class Pieces{
    constructor(vector,icon,name){
        this.position = vector
        this.icon = icon
        this.name =name
    }
    displayIcon(){
        for(let i=0;i<this.position.length;i++)
        {
            
            let id= this.position[i]
            let doc =document.getElementById(id)
            doc.innerHTML = this.icon
            let item =document.getElementById(id).appendChild(createButton) 
            item.classList.add('piece')
            item.classList.add(this.name)
            let newId = this.name + i
            item.setAttribute("id",newId);
            
            doc.addEventListener('click',movePiece=>
            {   
                let newPos =moveButton(id,this.name)
                for(let g=0;g<newPos.length;g++){
                    let move =[]
                    move[g]=document.getElementById(newPos[g])
                    move[g].appendChild(createButton)
                    move[g].style.backgroundColor = "yellow" 
                    move[g].addEventListener('click',endmove=>{

                        for(let f=0;f<newPos.length;f++){
                            let tile = document.getElementById(newPos[f])
                            
                            if(tile.classList[0]=='black'){
                                tile.style.backgroundColor = 'green'
                            }else{
                                tile.style.backgroundColor ='#ffcfb6'
                            }
                        }
                        this.finishMove(newPos[g],id,i)
                    })
                }
            })
        }
    }    
    finishMove(np,id,i){
        document.getElementById(id).innerHTML= ""
        this.position[i]= np
        this.displayIcon()
    }
} 
function moveButton(a,c){
var newButton =[]
    if(c== 'PawnBlack'){
        newButton[0] = a+10 
    }else if(c=='horseBlack'){
        newButton[0] = a+19
        newButton[1] = a+21
        newButton[2] = a+12
        newButton[3] = a+8
    }
    for(let g=0; g<newButton.length;g++)
    {
        let dontExists = newButton[g].toString()
        if(ids.includes(dontExists))
        { 
        }else{
            delete newButton[g]
            newButton=newButton.filter(newButton => newButton !=null )
        }
    }
   return newButton
}
    
let KingWhite = new Pieces([[8,5]],"&#9812;",'KingWhite')
let QueenWhite = new Pieces([[8,4]],"&#9813;",'QueenWhite')

let PawnBlack = new Pieces([21,22,23,24,25,26,27,28],"&#9823;","PawnBlack")
let horseBlack = new Pieces([12,17],"&#9822;","horseBlack")
PawnBlack.displayIcon()
horseBlack.displayIcon()