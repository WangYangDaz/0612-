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

    
 
    
    //进场出场动画
    var animationAn = [
        {
            outAn:function(){
                var home1 =  document.querySelector('#wrap .content .list .home1 img');
                home1.style.opacity = 0;
            },
            inAn:function(){
                var home1 =  document.querySelector('#wrap .content .list .home1 img');
                home1.style.opacity = 1;
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

            },
            inAn:function(){
                
            }
        },
        {
            outAn:function(){

            },
            inAn:function(){
                
            }
        },
    ];

    animationAn[1]['outAn']();
    setTimeout(function(){
        animationAn[1]['inAn']();
    },1000)

    //滚动
    var timer = 0;
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
    
    var now =0;
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
             
            navLi[i].onclick = function(){
                      move(this.index);
                      now= this.index;
            }
        }
    };
    move(1)
 //移动
    function move(index){
        for(var i=0; i<navLi.length; i++){
            navLi[i].className = ''; 
        };
            navLi[index].className = 'active';
            cList.style.top = -index*(document.documentElement.clientHeight-header.offsetHeight)+ 'px';
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