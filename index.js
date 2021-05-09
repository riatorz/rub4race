var fJunction = () => {
    var colors = ["red","red","red","red","green","green","green","green",
    "orange","orange","orange","orange","white","white","white","white",
    "yellow","yellow","yellow","yellow","blue","blue","blue","blue"];
    var x = document.getElementsByClassName("cell");
    var cells = [];
    shuffleArray(colors);
    let i,j,k;
    for(j=0;j<5;j++){
        cells[j] = Array();
        for(k=0;k<5;k++)
            cells[j][k] = x[k+j*5];
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
    Game(cells);
    counter();
}
var counter = () => {
    var minutes = document.getElementById("minutes");
    var second = document.getElementById("seconds");
    var tSecond = 0;
    var timer = setInterval(Time, 1000);

    function Time() {
    ++tSecond;
    second.innerHTML = pad(tSecond % 60);
    minutes.innerHTML = pad(parseInt(tSecond / 60));
    }
    function pad(val) {
    var valstr = val + "";
    if (valstr.length < 2) {
        return "0" + valstr;
    } else {
        return valstr;
    }
    }
    
}
left = 37;
up = 38;
right = 39;
down = 40;
var cbox = () => {
    var chbox = document.getElementById("checkbox");
    if(chbox.checked == true){
        left = 39;
        right = 37
        up=40;
        down=38;
    }else{
        left = 37;
        up = 38;
        right = 39;
        down = 40;
    }
}
var Game = (array) => {
    document.onkeydown = function(e) {
        let i,j,n,m;
        for(i =0;i<5;i++){
            for(j=0;j<5;j++){
                if(array[i][j].style.backgroundColor==""){
                    n=i;
                    m=j;
                }
            }
        }
        var verification = () => {
            var x = document.getElementsByClassName("scells");
            scells = [];
            for(j=0;j<3;j++){
                scells[j] = Array();
                for(k=0;k<3;k++)
                    scells[j][k] = x[k+j*3];
            }
            counter = 0;
            for(i =0;i<3;i++){
                for(j=0;j<3;j++){
                    if(scells[i][j].style.backgroundColor == array[i+1][j+1].style.backgroundColor){
                        counter++;
                        
                    }
                }
            }
            console.log(counter);
            if(counter==9){
                var totalsec = parseInt(document.getElementById("minutes").innerHTML)*60+parseInt(document.getElementById("seconds").innerHTML);
                if(totalsec<120){
                    alert("Well done your score is nice!"+"\n"+"Your time is: "+document.getElementById("minutes").innerHTML+" : "+document.getElementById("seconds").innerHTML);
                }else if(totalsec>120 && totalsec<200){
                    alert("That's nice you can do better!"+"\n"+"Your time is: "+document.getElementById("minutes").innerHTML+" : "+document.getElementById("seconds").innerHTML);
                }else{
                    alert("You need to imporove yourself!"+"\n"+"Your time is: "+document.getElementById("minutes").innerHTML+" : "+document.getElementById("seconds").innerHTML);
                }
                document.getElementById("counter").hidden = true;
            }
        }
        
        switch (e.keyCode) {
            case left://left
                if(m>0){
                    var tmp= array[n][m-1].style.backgroundColor;
                    array[n][m-1].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    verification();
                    console.log("left");
                }
                break;
            case up://up
                if(n>0){
                    var tmp= array[n-1][m].style.backgroundColor;
                    array[n-1][m].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    verification();
                    console.log("up");
                }
                break;
            case right://right
                if(m<4){
                    var tmp= array[n][m+1].style.backgroundColor;
                    array[n][m+1].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    verification();
                    console.log("right");
                }
                break;
            case down://down
                if(n<4){
                    var tmp= array[n+1][m].style.backgroundColor;
                    array[n+1][m].style.backgroundColor = array[n][m].style.backgroundColor;
                    array[n][m].style.backgroundColor = tmp;
                    verification();
                    console.log("down");
                }
                break;
        }
    };
}
var shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
let shuffleTable = () => {
    var colors = ["red","red","red","red","green","green","green","green",
    "orange","orange","orange","orange","white","white","white","white",
    "yellow","yellow","yellow","yellow","blue","blue","blue","blue"];
    var x = document.getElementsByClassName("scells");
    let i;
    shuffleArray(colors);
    for(i=0;i<x.length;i++){
        if (i <= 2)
            x[i].style.backgroundColor =  colors[i];
        else if (i>=3 && i <= 5)
            x[i].style.backgroundColor = colors[i];
        else if (i>=6 && i <= 8)
            x[i].style.backgroundColor = colors[i];
    }
}
// let verification = () => {

// }
var id;
let timeout = () =>{
    id = setInterval(()=>{
        shuffleTable();
    },10);
}
let start = () =>{
    timeout();
    setTimeout(()=>{
        clearInterval(id);
    },1000);
    setTimeout(()=>{
        fJunction();
    },2000);
    document.getElementById("checkbox").hidden = true;
    document.getElementById("label").hidden = true;
    document.getElementById("start").hidden = true;
}