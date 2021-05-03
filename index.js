var fJunction = () => {
    var colors = ["red","red","red","red","green","green","green","green",
    "orange","orange","orange","orange","white","white","white","white",
    "yellow","yellow","yellow","yellow","blue","blue","blue","blue"];
    var x = document.getElementsByClassName("hucre");
    shuffleArray(colors);
    let i;
    for(i=0;i<x.length;i++){
        if (i <= 3)
        {
            x[i].style.backgroundColor =  colors[i]
        }
        else if (i>=4 && i <= 7)
        {
            x[i].style.backgroundColor = colors[i];

        }
        else if (i>=8 && i <= 11)
        {
            x[i].style.backgroundColor = colors[i];

        }
        else if (i>=13 && i <= 15)
        {
            x[i].style.backgroundColor = colors[i-1];

        }
        else if (i>=16 && i <= 19)
        {
            x[i].style.backgroundColor = colors[i-1];

        }
        else if (i >=20 && i <= 24)
        {
            x[i].style.backgroundColor = colors[i-1];

        }
    }
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}