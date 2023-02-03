//document.title= "Page title Changed";
//console.log(document.title);
let x= document.getElementById("header-title");
x.style.borderBottom="solid 4px #000";
let y=document.getElementsByClassName("title1");
///console.log(y);
//y.style.fontWeight ='bold';
//y.style.fontcolor='yellow';
for(let i=0;i<y.length;i++)
{
    y[i].style.fontWeight ='bold';
    y[i].style.color='yellow';
    y[i].style.backgroundColor='black';
}





