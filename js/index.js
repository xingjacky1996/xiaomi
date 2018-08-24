
    let ShoppingCart=document.getElementsByClassName("ShoppingCart")[0];
    let ds=document.getElementsByClassName("ds")[0];
    console.log(ShoppingCart,ds);

    ShoppingCart.onmouseenter=function(){
        ds.style.height="98px";
        ds.style.boxShadow="0px 4px 5px rgba(0,0,0,0.2)"; 
    }
    ShoppingCart.onmouseleave=function(){
        ds.style.height="0";
        ds.style.boxShadow="none"; 
    }
    let ku=document.getElementsByClassName("ku")[0];
    let aside=document.getElementsByClassName("aside");
    let lis=aside[0].getElementsByTagName("li");

    console.log(ku,aside,lis);


    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function(){
            ku.style.width="992px";
            ku.style.boxShadow="0px 3px 10px 4px rgba(0,0,0,0.2)"; 
        }
        lis[i].onmouseleave=function(){
            ku.style.width="0";
            ku.style.boxShadow="none"; 
        }
    }

    let  img_box=document.getElementsByClassName("img_box")[0];
    let  img_b=document.getElementsByClassName("img_b")
    let  imgz=img_box.getElementsByTagName("img");
    let ui_left=document.getElementsByClassName("ui_left")[0];
    let ui_right=document.getElementsByClassName("ui_right")[0];
    let pointny=document.querySelectorAll(".pointny")
    console.log(img_box,imgz,ui_left,ui_right,pointny);
    
    let num=0;

    let t=setInterval(move,3000);

    img_box.onmouseenter=function(){
        clearInterval(t);
    }
    img_box.onmouseleave=function(){
        t=setInterval(move,3000);
    }

    ui_right.onclick=function(){
        move();
    }

    ui_left.onclick=function(){
        move1();
    }
    
    function move(){
        num++;
        if(num==imgz.length){
            num=0;
        }
        for(let i=0;i<imgz.length;i++){
            imgz[i].style.zIndex="5";
            pointny[i].style.background="#948F86";
        }
        imgz[num].style.zIndex="10";
        pointny[num].style.background="#E8E8EB";
    }

    function move1(){
        num--;
        if(num<0){
            num=imgz.length-1;
        }
        for(let i=0;i<imgz.length;i++){
            imgz[i].style.zIndex="5";
            pointny[i].style.background="#948F86";
        }
        imgz[num].style.zIndex="10";
        pointny[num].style.background="#E8E8EB";
        }

        for(let i=0;i<pointny.length;i++){
            pointny[i].onclick=function(){
                for(let j=0;j<pointny.length;j++){
                    imgz[j].style.zIndex="5";
                    pointny[j].style.background="#948F86";
                }
                imgz[num].style.zIndex="10";
                pointny[num].style.background="#E8E8EB";
                num=i;
                }
            }

