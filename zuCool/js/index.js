//禁止系统默认行为
document.addEventListener('touchstart',function(ev){
    ev=ev||event;
    ev.preventDefault();
});
//rem适配

window.onload = function(){
    //头部导航
    var header = document.querySelector('#wrap .header');
    var navs = document.querySelector('#wrap .header .headeMain .navs');
    var navList = document.querySelector('#wrap .header .headeMain .navs .list');
    var navLi = document.querySelectorAll('#wrap .header .headeMain .navs .list > li');
    
    //内容区
    var content = document.querySelector('#wrap .content');
    var cList = document.querySelector('#wrap .content .list');
    var cLiNodes=document.querySelectorAll('#wrap .content .list > li');
    var sideList = document.querySelectorAll('#wrap .content .sideNavs > li')

    var preIndex = 0;
    var now =0;
    var timer = 0;
 
    
    //进场出场动画
    var animationAn = [
        {
            outAn:function(){
                var img =  document.querySelector('#wrap .content .list > .home1 img');
                    img.style.opacity = 0;
                    setTimeout(function() {
                        img.style.opacity = 0;
                      }, 1000)
            },
            inAn:function(){
                var img =  document.querySelector('#wrap .content .list > .home1 img');
                setTimeout(function() {
                    img.style.opacity = 1;
                  }, 1000)
            }
        },
        {
            outAn:function(){
                var li1 = document.querySelectorAll('#wrap .content .list .home2 .left .picture > li')[0];
                var li2 = document.querySelectorAll('#wrap .content .list .home2 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home2 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home2 .right");
                console.log(right)
                setTimeout(function(){
                    li1.style.transform = "translateY(600px)";
                },800);
                setTimeout(function(){
                    li2.style.transform = "translateY(700px)";
                },1000);
                setTimeout(function(){
                    li3.style.transform = "translateY(800px)";
                    right.style.transform = 'translateY(-300px)';
                },1200);
            },
            inAn:function(){
                var li1 = document.querySelectorAll('#wrap .content .list .home2 .left .picture > li')[0];
                var li2 = document.querySelectorAll('#wrap .content .list .home2 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home2 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home2 .right");
                setTimeout(function(){
                    li1.style.transform = "translateY(0)";
                },800);
                setTimeout(function(){
                    li2.style.transform = "translateY(0)";
                },1000);
                setTimeout(function(){
                    li3.style.transform = "translateY(0)";
                    right.style.transform = 'translateY(0)';
                },1200);
            }
        },
        {
            outAn:function(){
                var li2 = document.querySelectorAll('#wrap .content .list .home3 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home3 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home3 .right");
                setTimeout(function(){
                    li2.style.transform = "translateX(-279px)";
                },500);
                setTimeout(function(){
                    li3.style.transform = "translateX(-558px)";
                    right.style.transform = 'translateX(-200px)';
                },600);
            },
            inAn:function(){
                var li2 = document.querySelectorAll('#wrap .content .list .home3 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home3 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home3 .right");
                setTimeout(function(){
                    li2.style.transform = "translateX(0)";
                    li3.style.transform = "translateX(0)";
                    right.style.transform = 'translateX(0)';
                },1000);
            }
        },
        {
            outAn:function(){
                var li1 = document.querySelectorAll('#wrap .content .list .home4 .left .picture > li')[0]; 
                var li2 = document.querySelectorAll('#wrap .content .list .home4 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home4 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home4 .right");
                li1.style.display = "none";     
                li2.style.display = "none";     
                li3.style.display = "none";
                li1.style.transform = "translateX(330px) translateY(-1000px)";
                li2.style.transform = "translateX(0) translateY(-1000px)";
                li3.style.transform = "translateX(300px) translateY(-1000px)";     
                right.style.opacity = 0;
            },
            inAn:function(){
                var li1 = document.querySelectorAll('#wrap .content .list .home4 .left .picture > li')[0];
                var li2 = document.querySelectorAll('#wrap .content .list .home4 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home4 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home4 .right");
                li1.style.display = "initial";     
                li2.style.display = "initial";     
                li3.style.display = "initial";
                li1.style.animation = 'move1 2s .5s';
                li2.style.animation = 'move2 2s .5s';
                li3.style.animation = 'move3 2s .5s';
                setTimeout(function(){
                    li1.style.transform = "translateX(0) translateY(0)";
                    li2.style.transform = "translateX(0) translateY(0)";
                    li3.style.transform = "translateX(0) translateY(0)";
                    right.style.opacity = 1;
                },1000)
            }
        },
        {
            outAn:function(){
                var li1 = document.querySelectorAll('#wrap .content .list .home5 .left .picture > li')[0];
                var li2 = document.querySelectorAll('#wrap .content .list .home5 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home5 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home5 .right");
                setTimeout(function() {
                    li1.style.transform = "translate3d(-1000px,-800px,-500px) rotateX(145deg) ";
                  }, 800)
                  setTimeout(function() {
                    li2.style.transform = "translate3d(-1000px,-800px,-500px) rotateX(145deg) ";
                  }, 1000)
                  setTimeout(function() {
                    li3.style.transform = "translate3d(-1000px,-800px,-500px) rotateX(145deg) ";
                    right.style.opacity = 0;
                  }, 1200)
            },
            inAn:function(){
                var li1 = document.querySelectorAll('#wrap .content .list .home5 .left .picture > li')[0];
                var li2 = document.querySelectorAll('#wrap .content .list .home5 .left .picture > li')[1];
                var li3 = document.querySelectorAll('#wrap .content .list .home5 .left .picture > li')[2];
                var right = document.querySelector("#wrap .content .list  .home5 .right");
                setTimeout(function() {
                    li1.style.transform = "translate3d(0,0,0) rotateX(0deg)";
                  }, 800)
                  setTimeout(function() {
                    li2.style.transform = "translate3d(0,0,0) rotateX(0deg)";
                  }, 1000)
                  setTimeout(function() {
                    li3.style.transform = "translate3d(0,0,0) rotateX(0deg)";
                    right.style.opacity = 1;
                  }, 1200)
            }
        },
    ];

    for(var i=0; i<animationAn.length; i++){
        animationAn[i]['outAn']();
    }
     

    //滚动
   
    content.onmousewheel= function(ev){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn(ev);
        },200)
    }
   if(content.addEventListener){
        content.addEventListener('DOMMouseScroll',function(ev){
            clearInterval(timer);
            timer = setTimeout(function(){
                fn(ev);
            },200)
        })
   }
    
    function fn(ev){
        ev= ev|| event;
        var flag = '';
        //chrome向上滑动为正，firefox上上滑动为负
        if(ev.detail){
            flag = ev.detail > 0 ? 'down' : 'up';
        }else{
            flag  = ev.wheelDelta < 0 ? 'down': 'up'
        };

        if( (now===0 && flag==='up')||(now===(cLiNodes.length-1)&& flag==='down')){
            return;
        };
        preIndex = now; 
        switch(flag){
            case 'up':
                if(now > 0){
                    now --;
                }
                move(now)
            break;
            case 'down':
                if(now < cLiNodes.length - 1){
                    now ++ 
                }
                move(now)
            break;
        }
        if(ev.preventDefault){
            ev.preventDefault();
        }
        return false;
    };
    //导航
    headeBind();

    function headeBind(){
        for(var i=0; i<navLi.length; i++){
            navLi[i].index = i;  
            sideList[i].index = i; 
            sideList[i].onclick = navLi[i].onclick = function(){
                preIndex = now;  
                move(this.index);
                now= this.index;
                
            }

        }
    };
 
 //同步主导航和侧边导航
    function move(index){
        for(var i=0; i<navLi.length; i++){
            navLi[i].className = ''; 
            sideList[i].className = '';
        };
            navLi[index].className = 'active';
            sideList[index].className = 'active';
            cList.style.top = -index*(document.documentElement.clientHeight-header.offsetHeight)+ 'px';
            //当前屏入场
            if(animationAn[index] && animationAn[index]["inAn"]) {
                animationAn[index]["inAn"]();
              }
            if(animationAn[preIndex] && animationAn[preIndex]["outAn"]) {
                animationAn[preIndex]["outAn"]();
            }
    };
    //窗口重置
    window.onresize = function(){
        contentBind();   
    }
    //动态添加每一屏的高度
    contentBind();
    function contentBind(){
        content.style.height = document.documentElement.clientHeight - header.offsetHeight + 'px';

        for(var i =0; i<cLiNodes.length; i++){
            cLiNodes[i].style.height = document.documentElement.clientHeight - header.offsetHeight + 'px';
        }
    }
};

