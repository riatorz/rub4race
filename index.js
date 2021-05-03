var fJunction = () => {
    var colors = ["red","red","red","red","green","green","green","green",
    "orange","orange","orange","orange","white","white","white","white",
    "yellow","yellow","yellow","yellow","blue","blue","blue","blue"];
    var x = document.getElementsByClassName("hucre");
    var hucreler = [];
    shuffleArray(colors);
    let i,j,k;
    for(j=0;j<5;j++){
        hucreler[j] = Array();
        for(k=0;k<5;k++)
            hucreler[j][k] = x[k+j*5];
    }
    for(i=0;i<x.length;i++){
        if (i <= 3)
            x[i].style.backgroundColor =  colors[i];
        else if (i>=4 && i <= 7)
            x[i].style.backgroundColor = colors[i];
        else if (i>=8 && i <= 11)
            x[i].style.backgroundColor = colors[i];
        else if (i>=13 && i <= 15)
            x[i].style.backgroundColor = colors[i-1];
        else if (i>=16 && i <= 19)
            x[i].style.backgroundColor = colors[i-1];
        else if (i >=20 && i <= 24)
            x[i].style.backgroundColor = colors[i-1];
    }
    Game(hucreler);
}
var Game = (array) => {
    document.onkeydown = function(e) {
        let i,j,n,m;
        for(i =0;i<5;i++){
            for(j=0;j<5;j++){
                if(array[i][j].style.backgroundColor==""){
                    n=i;m=j;
                }
            }
        }
        switch (e.keyCode) {
            case 37:
                if(m>0){
                    var tmp= array[n][m-1].style.backgroundColor;
                    array[n][m-1].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    console.log("left");
                }
                break;
            case 38:
                if(n>0){
                    var tmp= array[n-1][m].style.backgroundColor;
                    array[n-1][m].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    console.log("up");
                }
                break;
            case 39:
                if(m<4){
                    var tmp= array[n][m+1].style.backgroundColor;
                    array[n][m+1].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    console.log("right");
                }
                break;
            case 40:
                if(n<4){
                    var tmp= array[n+1][m].style.backgroundColor;
                    array[n+1][m].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    console.log("down");
                }
                break;
        }
    };
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}