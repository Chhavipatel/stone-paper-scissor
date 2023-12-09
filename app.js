let circle=document.querySelectorAll(".all");
let score1=document.querySelector('.score1');
let score2=document.querySelector('.score2');
let h4=document.querySelector("h4");
let btn=document.querySelector(".btn");
let draw=document.querySelector(".draw");
let userwinner=[[1,3],[2,1],[3,2]];
let randomwinner=[[1,3],[2,3],[3,1]];
let userscount=0;
let compcount=0;
circle.forEach((ele)=>{
   
   
    ele.addEventListener("click",()=>{
    if(!ele.clicked){
        let newindex=ele.getAttribute('classIndex');
let randomNo=Math.floor((Math.random()*3)+1);
let index=Number(newindex);
// console.log(typeof(index));
if(index==randomNo){
    draw.innerText="Draw!!";

}
else{
draw.innerText="";
}
let arr=[index,randomNo];

if (userwinner.some(([a, b]) => arr[0] === a && arr[1] === b)) {
          
            userscount++;
            score1.innerText=`${userscount}`;
           
            checkwinner();

        } else if (randomwinner.some(([a, b]) => arr[0] === a && arr[1] === b)) {
           
            compcount++;
            score2.innerText=`${compcount}`;
            checkwinner();
        }

    }
    })
})
const checkwinner=()=>{
    if(userscount==5){
        h4.innerText="congratulations!!!..you won the game";
    }
    if(compcount==5){
        h4.innerText="sad!!..you lose the game";
    }
    if(userscount==5 || compcount==5){
        circle.forEach((ele)=>{
         ele.clicked=true;
        
            })
        }
    
}

btn.addEventListener("click",()=>{
    circle.forEach((ele)=>{
        ele.clicked=false;
        h4.innerText="";
        userscount=0;
        compcount=0;
        score1.innerText=0;
        score2.innerText=0;
       
    })
})