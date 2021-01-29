document.addEventListener("DOMContentLoaded", function() {
    
    let button = document.createElement('button');
    document.body.appendChild(button);
    let btnTxt = document.createTextNode('Add square');
    button.appendChild(btnTxt);

    let colors = ['pink', 'brown', 'orange', 'gray', 'marroon', 'blue', 'purple', 'green'];

    button.addEventListener("click",function(addSquare)  {  
        let div = document.createElement('div');
        div.className = 'square';
        document.body.appendChild(div);

        function addSquare() {
            let existingSquares = document.getElementsByClassName('squares').length;
            let squares = document.createElement('div');
            squares.classname = 'squares';
            squares.id=existingSquares;
            document.body.appendChild(squares);

            squares.addEventListener("click" , changeColor);
            div.appendChild(squares);
        }

        function changeColor() {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            return randomColor;
        } 
    });
    

});
