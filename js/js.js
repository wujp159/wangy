/**
 * Created by Administrator on 2017/5/15.
 */

/*封装事件对象*/



// js代码
window.onload=function(){  //入口函数

    function $(id) {return document.getElementById(id)}

    /*实现手风琴的效果  开始*/
    var fq=document.getElementById("fq");
    var fqchis=fq.children;
    var fqis=fq.getElementsByTagName("i");
    /*console.log(imgwidth);*/
    for(var i=0;i<fqis.length;i++){
        fqis[i].onmouseover=function(){
            this.style.background="transparent";
        }
        fqis[i].onmouseout=function(){
            this.style.background="rgba(0,0,0,0.5)";
        }
    }
    /*
     *缝隙就是15px
     * width: 390px;   -->500px   多了110px  那么两个的那一行就要挤出位置：55px-->335px
     height: 230px;  -->470px   多了240px
     *
     *占了500的位置  224px
     * */

    fq.onmouseover=function(){
        for(var i=0;i<fqis.length;i++){
            animateV2(fqis[i],{opacity:1},4,10);
        }
    }

    fq.onmouseout=function(){
        for(var i=0;i<fqis.length;i++){
            animateV2(fqis[i],{opacity:0},4,10);
        }
    }

    fqchis[0].onmouseover=function(){
        $("audio01").play();
        animateV2(this,{width:500, height:471, left:0, top:0},1,10)
        animateV2(fqchis[1],{width:335, height:228, left:515, top:0},1,10)
        animateV2(fqchis[2],{width:335, height:228, left:865, top:0},1,10)
        animateV2(fqchis[3],{width:222, height:222, left:515, top:243},1,10)
        animateV2(fqchis[4],{width:222, height:222, left:748, top:243},1,10)
        animateV2(fqchis[5],{width:222, height:222, left:981, top:243},1,10)
    }
    fqchis[0].onmouseout=function(){
        animateV2(this,{width:390, height:228, left:0, top:0},1,10)
        animateV2(fqchis[1],{width:390, height:228, left:405, top:0},1,10)
        animateV2(fqchis[2],{width:390, height:228, left:810, top:0},1,10)
        animateV2(fqchis[3],{width:390, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:390, height:228, left:405, top:243},1,10)
        animateV2(fqchis[5],{width:390, height:228, left:810, top:243},1,10)
    }
    fqchis[1].onmouseover=function(){
        $("audio02").play();
        animateV2(this,{width:500, height:471, left:405, top:0},1,10)
        animateV2(fqchis[0],{width:390, height:228, left:0, top:0},1,10)
        animateV2(fqchis[2],{width:280, height:228, left:920, top:0},1,10)
        animateV2(fqchis[3],{width:187, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:188, height:228, left:203, top:243},1,10)
        animateV2(fqchis[5],{width:280, height:228, left:920, top:243},1,10)
    }
    fqchis[1].onmouseout=function(){
        animateV2(this,{width:390, height:228, left:0, top:0},1,10)
        animateV2(fqchis[1],{width:390, height:228, left:405, top:0},1,10)
        animateV2(fqchis[2],{width:390, height:228, left:810, top:0},1,10)
        animateV2(fqchis[3],{width:390, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:390, height:228, left:405, top:243},1,10)
        animateV2(fqchis[5],{width:390, height:228, left:810, top:243},1,10)
    }
    fqchis[2].onmouseover=function(){
        $("audio03").play();
        animateV2(this,{width:500, height:471, left:700, top:0},1,10)
        animateV2(fqchis[0],{width:335, height:228, left:0, top:0},1,10)
        animateV2(fqchis[1],{width:335, height:228, left:350, top:0},1,10)
        animateV2(fqchis[3],{width:218, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:218, height:228, left:233, top:243},1,10)
        animateV2(fqchis[5],{width:218, height:228, left:466, top:243},1,10)
    }
    fqchis[2].onmouseout=function(){
        animateV2(this,{width:390, height:228, left:810, top:0},1,10)
        animateV2(fqchis[0],{width:390, height:228, left:0, top:0},1,10)
        animateV2(fqchis[1],{width:390, height:228, left:405, top:0},1,10)
        animateV2(fqchis[3],{width:390, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:390, height:228, left:405, top:243},1,10)
        animateV2(fqchis[5],{width:390, height:228, left:810, top:243},1,10)
    }
    fqchis[3].onmouseover=function(){
        $("audio04").play();
        animateV2(this,{width:500, height:471, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:335, height:228, left:515, top:243},1,10)
        animateV2(fqchis[5],{width:335, height:228, left:865, top:243},1,10)
        animateV2(fqchis[6],{width:218, height:228, left:515, top:486},1,10)
        animateV2(fqchis[7],{width:218, height:228, left:748, top:486},1,10)
        animateV2(fqchis[8],{width:218, height:228, left:981, top:486},1,10)
    }
    fqchis[3].onmouseout=function(){
        animateV2(this,{width:390, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:390, height:228, left:405, top:243},1,10)
        animateV2(fqchis[5],{width:390, height:228, left:810, top:243},1,10)
        animateV2(fqchis[6],{width:390, height:228, left:0, top:486},1,10)
        animateV2(fqchis[7],{width:390, height:228, left:405, top:486},1,10)
        animateV2(fqchis[8],{width:390, height:228, left:810, top:486},1,10)
    }

    fqchis[4].onmouseover=function(){
        $("audio05").play();
        animateV2(this,{width:500, height:471, left:405, top:243},1,10)
        animateV2(fqchis[3],{width:390, height:228, left:0, top:243},1,10)
        animateV2(fqchis[5],{width:280, height:228, left:920, top:243},1,10)
        animateV2(fqchis[6],{width:187, height:228, left:0, top:486},1,10)
        animateV2(fqchis[7],{width:188, height:228, left:203, top:486},1,10)
        animateV2(fqchis[8],{width:280, height:228, left:920, top:486},1,10)
    }
    fqchis[4].onmouseout=function(){
        animateV2(this,{width:390, height:228, left:405, top:243},1,10)
        animateV2(fqchis[3],{width:390, height:228, left:0, top:243},1,10)
        animateV2(fqchis[5],{width:390, height:228, left:810, top:243},1,10)
        animateV2(fqchis[6],{width:390, height:228, left:0, top:486},1,10)
        animateV2(fqchis[7],{width:390, height:228, left:405, top:486},1,10)
        animateV2(fqchis[8],{width:390, height:228, left:810, top:486},1,10)
    }
    fqchis[5].onmouseover=function(){
        $("audio06").play();
        animateV2(this,{width:500, height:471, left:700, top:243},1,10)
        animateV2(fqchis[3],{width:335, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:335, height:228, left:350, top:243},1,10)
        animateV2(fqchis[6],{width:218, height:228, left:0, top:486},1,10)
        animateV2(fqchis[7],{width:218, height:228, left:233, top:486},1,10)
        animateV2(fqchis[8],{width:218, height:228, left:466, top:486},1,10)
    }
    fqchis[5].onmouseout=function(){
        animateV2(this,{width:390, height:228, left:810, top:243},1,10)
        animateV2(fqchis[3],{width:390, height:228, left:0, top:243},1,10)
        animateV2(fqchis[4],{width:390, height:228, left:405, top:243},1,10)
        animateV2(fqchis[6],{width:390, height:228, left:0, top:486},1,10)
        animateV2(fqchis[7],{width:390, height:228, left:405, top:486},1,10)
        animateV2(fqchis[8],{width:390, height:228, left:810, top:486},1,10)
    }



}

