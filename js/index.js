
    //购物车
    // let ShoppingCart=document.getElementsByClassName("ShoppingCart")[0];
    // let ds=document.getElementsByClassName("ds")[0];

    // ShoppingCart.onmouseenter=function(){
    //     ds.style.height="98px";
    //     ds.style.boxShadow="0px 4px 5px rgba(0,0,0,0.2)";
    // }
    // ShoppingCart.onmouseleave=function(){
    //     ds.style.height="0";
    //     ds.style.boxShadow="none"; 
    // }

    $(".ShoppingCart").mouseenter(function(){
        $(".ds").css("height","98px").css("boxShadow","0px 4px 5px rgba(0,0,0,0.2)")
    })
    $(".ShoppingCart").mouseleave(function(){
        $(".ds").css("height","0").css("boxShadow","none")
    })

    // 导航栏
    // let Navigation=document.querySelector('.Navigation');
    let inoptionbar=document.querySelector('.inoptionbar');
    let li=inoptionbar.querySelectorAll('li');
    // let inoptionbar_hidden=Navigation.querySelector('.inoptionbar_hidden');
    // let inoptionbar_hidden_in=inoptionbar_hidden.querySelector('.inoptionbar_hidden_in');
    

    // li[i].onmouseenter=function(){
    //     inoptionbar_hidden.style.boxShadow="0px 4px 5px rgba(0,0,0,0.2)";
    //     inoptionbar_hidden.style.height="229px"
    //     inoptionbar_hidden.style.border="1px solid #e0e0e0" 
    // }
    // li[i].onmouseleave=function(){
    //     inoptionbar_hidden.style.boxShadow="none";
    //     inoptionbar_hidden.style.height="0"
    //     inoptionbar_hidden.style.border="0"
    // }
    // }

    $("li").slice(0,8).mouseenter(function(){
        $(".inoptionbar_hidden").css("boxShadow","0px 4px 5px rgba(0,0,0,0.2)").css("height","229px").css("border","1px solid #e0e0e0")
    })
    $("li").slice(0,8).mouseleave(function(){
        $(".inoptionbar_hidden").css("boxShadow","none").css("height","0").css("border","0")
    })


    

    // 小米闪购
    let quickshop=document.querySelector(".quickshop")
    let paging1=quickshop.querySelector('.paging1');
    let paging=quickshop.querySelector('.paging');
    let picture_box_long=document.querySelector('.picture_box_long');
    // let picture_box=document.querySelector('.picture_box');
    let w=parseInt(getComputedStyle(picture_box_long,null).width)/3;
    let times=0;
    
    // paging1.onclick=function(){
    //     times++;
    //     if(times==3){
    //         times=2;
    //         paging1.style.color="#E6EBEE";
    //         paging.style.color="#B0B0B2";
    //         }
    //         picture_box_long.style.transform="translateX("+(-w*times)+"px)";
    //     }

    // paging.onclick=function(){
    //     times--;
    //     if(times==-1){
    //         times=0;
    //         paging1.style.color="#B0B0B2";
    //         paging.style.color="#E6EBEE";
    //         }
    //         picture_box_long.style.transform="translateX("+(-w*times)+"px)";
    //     }  

        $(".paging1").click(function(){
            times++;
            if(times==3){
                times=2;
                $(".paging1").css("color","#E6EBEE")
                $(".paging").css("color","#B0B0B2")
            }
            $(".picture_box_long").css("transform",`translateX(${(-w*times)}px)`)
        })
        $(".paging").click(function(){
            times--;
            if(times==-1){
                times=0;
                $(".paging1").css("color","#B0B0B2")
                $(".paging").css("color","#E6EBEE")
            }
            $(".picture_box_long").css("transform",`translateX(${(-w*times)}px)`)
        })

        //推荐
        let Recommend=document.querySelector('.Recommend')
        let paging2=Recommend.querySelector('.paging1')
        let paging3=Recommend.querySelector('.paging')
        let picture=Recommend.querySelectorAll('.picture')
        let pictures1_long=document.querySelector('.pictures1_long')
        let pictures1=Recommend.querySelector('.pictures1')
        let n=parseInt(getComputedStyle(pictures1_long,null).width)/3;
        let times1=0;

        paging2.onclick=function(){
            times1++;
            if(times1==3){
                times1=2;
                paging1.style.color="#E6EBEE";
                paging.style.color="#B0B0B2";
                }
                pictures1_long.style.transform="translateX("+(-n*times1)+"px)";
            }
            // $(".paging2").click(function(){
            //     times1++;
            //     if(times1==3){
            //         times1=2;
            //         $(".paging1").css("color","#E6EBEE")
            //         $(".paging").css("color","#B0B0B2")
            //     }
            //     $(".pictures1_long").css("transform",`translateX(${(-n*times1)}px)`)
            // })
        paging3.onclick=function(){
            times1--;
            if(times1==-1){
                times1=0;
                paging1.style.color="#B0B0B2";
                paging.style.color="#E6EBEE";
                }
                pictures1_long.style.transform="translateX("+(-n*times1)+"px)";
            }
            // $(".paging3").click(function(){
            //     times1--;
            //     if(times1==-1){
            //         times1=0;
            //         $(".paging1").css("color","#B0B0B2")
            //         $(".paging").css("color","#E6EBEE")
            //     }
            //     $(".pictures1_long").css("transform",`translateX(${(-n*times1)}px)`)
            // })  

    // 侧导航栏
    let ku=document.getElementsByClassName("ku")[0];
    let aside=document.getElementsByClassName("aside");
    let lis=aside[0].getElementsByTagName("li");

    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function(){
            ku.style.width="992px";
            ku.style.boxShadow="0px 3px 10px 4px rgba(0,0,0,0.2)"; 
        }
        // $("lis").slice(0,9).mouseenter(function(){
        //     $(".ku").css("width","992px").css("boxShadow","0px 3px 10px 4px rgba(0,0,0,0.2)")
        // })
        lis[i].onmouseleave=function(){
            ku.style.width="0";
            ku.style.boxShadow="none"; 
        }
        // $("lis").slice(0,9).mouseleave(function(){
        //     $(".ku").css("width","0").css("boxShadow","none")
        // })
    }

    // 轮播图
    let  img_box=document.getElementsByClassName("img_box")[0];
    let  img_b=document.getElementsByClassName("img_b")
    let  imgz=img_box.getElementsByTagName("img");
    let ui_left=document.getElementsByClassName("ui_left")[0];
    let ui_right=document.getElementsByClassName("ui_right")[0];
    let pointny=document.querySelectorAll(".pointny")
    // console.log(img_box,imgz,ui_left,ui_right,pointny);
    
    let num=0;

    let t=setInterval(move,3000);

    $(".img_box").mouseenter(function(){
        clearInterval(t);
    })
    $(".img_box").mouseleave(function(){
        t=setInterval(move,3000);
    })

    $(".ui_right").click(function(){
        move();
    })

    $(".ui_left").click(function(){
        move1();
    })
    
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

    //内容 
    function con(m){
    let re1=document.querySelectorAll(".re1")[m];
    let re_y_contian=re1.querySelectorAll(".re_y_contian");
    let smllpoint_3=re1.querySelector('.smllpoint_3');
    let li=smllpoint_3.querySelectorAll("li");
    let co_left=re1.querySelector(".co_left");
    let co_right=re1.querySelector(".co_right");
    // console.log(li);

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
            return;
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
    con(0);
    con(1);
    con(2);
    con(3);
