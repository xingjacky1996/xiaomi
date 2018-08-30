
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


            function floor(n){
            let Appliance=document.querySelectorAll(".Appliance")[n];
            let TAB1=document.querySelectorAll(".TAB1")[n];
            let tab=TAB1.querySelectorAll(".tab");
            let box=Appliance.querySelectorAll(".box");
            
    for(let i=0;i<tab.length;i++){
        box[i].style.display = "none";
        tab[i].onmouseenter=function(){
            for(let j=0;j<tab.length;j++){
                box[j].style.display = "none";
                tab[j].className=""
                tab[j].style.borderBottom = "none";
            }
            box[i].style.display = "block";
            tab[i].className="tab";
            tab[i].style.borderBottom = "2px solid #FF6700";
        }
    }
    box[0].style.display = "block";
    }
    floor(0);
    floor(1);
    floor(2);
    floor(3);
    floor(4);


    function cont(n){
    let content=document.querySelector(".content");
    let re1=content.querySelector(".re1")[n];
    let re_y_contian=re1.querySelectorAll(".re_y_contian");
    let li=re1.querySelectorAll("li");
    let co_left=re1.querySelector(".co_left");
    let co_right=re1.querySelector(".co_right");
    console.log(content);

    let now=0;
    let next=0;
    let flag=true;
    let wid=296;


    co_left.onclick=function(){
        if(flag==false){
            return;
        }
        if(next==0){
            return
        }
        flag=false;
        con_move1();
    }

    co_right.onclick=function(){
        if(flag==false){
            return;
        }
        if(next==re_y_contian.length-1){
            return
        }
        flag=false;
        con_move();
    }

    function con_move() {
        next++;
        if(next==re_y_contian.length){
            next=0;
        }
        re_y_contian[next].style.left=wid+"px";
        animate(re_y_contian[now],{left:-wid});
        animate(re_y_contian[next],{left:0},function () {
            flag=true;
        });
        li[next].className=("pa_y");
        li[now].className=("pa");
        now=next
    }
    function con_move1() {
        next--;
        if(next<0){
            next=re_y_contian.length-1;
        }
        re_y_contian[next].style.left=-wid+"px";
        animate(re_y_contian[now],{left:wid});
        animate(re_y_contian[next],{left:0},function () {
            flag=true;
        });
        li[next].className=("pa_y");
        li[now].className=("pa");
        now=next
    }

    li.forEach(function (element,index) {
        element.onclick=function () {
            if(now==index){
                return;
            }
            if(now>index){
                re_y_contian[index].style.left=-wid+"px";
                animate(re_y_contian[now],{left:wid}) ;
                animate(re_y_contian[index],{left:0});
                li[index].className=("pa_y");
                li[now].className=("pa");
                now=next=index;

            }
            if(now<index){
                re_y_contian[index].style.left=wid+"px";
                animate(re_y_contian[now],{left:-wid});
                animate(re_y_contian[index],{left:0});
                li[index].className=("pa_y");
                li[now].className=("pa");
                now=next=index;
            }
        }
    })
    }
    cont(0);
    cont(1);
    cont(2);
    cont(3);

