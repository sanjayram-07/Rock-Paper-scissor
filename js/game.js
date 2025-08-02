
const point  = JSON.parse(localStorage.getItem('point')) || {win:0,lose:0,tie:0};
display_score();
function computer_move()
{
    let move='';
    let a = Math.random();
    if(a>=0 && a<1/3)
    {
        move = 'rock';
    }
    else if(a>=1/3 && a<2/3)
    {
        move = 'paper';

    }
    else if(a>=2/3 && a<1)
    {
        move = 'scissor'
    }
    console.log(a);
    return move;
    
}
function play(player)
{
    let result='';
    let move='';
    if(player === 'rock')
    {
       move= computer_move();
       if(move === 'rock')
        result = 'tie';
       else if(move==='paper')
        result ='lose';
       else if(move ==='scissor')
        result = 'win';

    }

    else if(player ==='paper')
    {
        move= computer_move();
       if(move === 'rock')
        result = 'win';
       else if(move==='paper')
        result = 'tie';
       else if(move==='scissor')
        result ='lose';

    }

    else if(player === 'scissor')
    {
        move= computer_move();
       if(move === 'rock')
       result ='lose';
       else if(move==='paper')
        result= 'win';
       else if(move ==='scissor')
        result = 'tie';

    }

    if(result === 'win')
        point.win++;
    else if(result === 'lose')
        point.lose++;
    else if(result === 'tie')
        point.tie++;
    localStorage.setItem('point',JSON.stringify(point));
    
    document.getElementById('moves').innerHTML =`  you <img src="./images/${player}-emoji.png" class="image-front">
    computer<img src="./images/${move}-emoji.png" class ="image-front">`;
    document.getElementById('result').innerHTML=`${result}`;
    display_score();
    
}

function reset()
{
    localStorage.removeItem('point');
    point.win=0;
    point.lose=0;
    point.tie=0;
    display_score();
    document.getElementById('moves').innerHTML =" "; 
    document.getElementById('result').innerHTML=" ";
}
function display_score()
{

 document.getElementById('score-board').innerHTML= `Win:${point.win}  |  Lose:${point.lose}  |  Tie:${point.tie}`;
    
}