/**
 * Created by Administrator on 2017/5/15.
 */
$(function() {
    /*下拉效果*/
    $('.topBar .hanbeg').click(function () {
        $(this).hide();
        $('.topBar .close').show();
        $('.topBar .content').animate({height: 838}, 1000, function () {
            $('.topBar .off').show();
        })
    })
    $('.topBar .close').click(function () {

        $('.topBar .content').animate({height: 0}, 1000, function () {
            $('.topBar .close').hide();
            $('.topBar .hanbeg').show();
        })
    })
    $('.topBar .off').click(function () {
        $('.topBar .content').animate({height: 0}, 1000, function () {
            $('.topBar .close').hide();
            $('.topBar .hanbeg').show();
        })
    })

    /*轮播图部分*/
    $('.banner li').eq(0).show();
    //定义一个全局变量 保存当前的显示索引

    /*鼠标移入时显示 移除隐藏*/
    $('.banner').hover(function () {
        $('.banner .arrow').stop().show();
    }, function () {
        $('.banner .arrow').stop().hide();
    })


    var current = 0;
    var timers = setInterval(rightPlay, 4000)
    /*点击左按钮的时候触发*/
    $('.banner .prev').click(function () {
        $('.banner li').eq(current).stop().fadeOut();
        current--;
        if (current < 0) {
            current = 4;
        }
        $('.banner li').eq(current).stop().fadeIn();
        $('.banner .square i').eq(current).addClass("active").siblings().removeClass("active");
    })
    $('.banner .arrow').hover(function () {
        clearInterval(timers);
    }, function () {
        timers = setInterval(rightPlay, 4000);
    })
    /* 开启定时器*/
    function rightPlay() {
        /*clearInterval(timer);*/
        $('.banner li').eq(current).stop().fadeOut();
        current++;
        if (current > 4) {
            current = 0;
        }
        $('.banner li').eq(current).stop().fadeIn();
        $('.banner .square i').eq(current).addClass("active").siblings().removeClass("active");
    }

    /*点击右按钮的时候触发*/
    $('.banner .arrow .next').click(function () {
        rightPlay();
    })

    /*点击下面的小方快的时候触发*/
    $('.banner .square i').click(function () {
        //先让当前的淡出
        $('.banner ul li').stop().fadeOut();
        //得到当前的索引值
        current = $(this).index();
        $('.banner ul li').eq(current).stop().fadeIn()
        $(this).addClass("active").siblings().removeClass("active");
    })


    /*tab切换*/
    $('.banner .tab .cenImg div').eq(0).show();
    $('.banner .tab .leftList>div').click(function () {
       /* console.log($(this).children(0).children(0));*/
        var $index = $(this).index();
        $('.banner .cenImg div').eq($index).fadeIn().siblings().fadeOut();
    })

    /*实现jq转换dom*/
    var tab = document.getElementById("tab");
    var divs = tab.children[0].children;
    var arr = [];
    var arr2 = [];
    for (var i = 0; i < divs.length; i++) {
        divs[i].index = i;
        var is = divs[i].children[0].children[0];
        var ss = divs[i].children[0].children[3];
        arr.push(is);
        arr2.push(ss);
        divs[i].onclick = function () {
            var $index = this.index;
            for (var j = 0; j < arr.length; j++) {
                arr[j].style.display = "none";
                divs[j].style.background = "#272A2C";
                arr2[j].style.display = "none";
            }
            arr[$index].style.display = "block";
            arr2[$index].style.display = "block";
            this.style.background = "#000";
        }
    }

    //获取jq对象
    var ul_01 = $('.main .hotGamp-bot').children('.ul01');
    var ul_02 = $('.main .hotGamp-bot').children('.ul02');
    var ul_03 = $('.main .hotGamp-bot').children('.ul03');
    //伪数组JQ对象
    var ulLi_01 = ul_01.children("li");
    var ulLi_02 = ul_02.children("li");
    var ulLi_03 = ul_03.children("li");
   /* console.log(ulLi_02);*/

    /*  在css中先让所有li都要进行隐藏，之后当页面加载完毕之后，让其马上缩放到0，之后让期显示，最后用定时器显示出来系哦啊过 */

    var flag=true;
    $(window).on("scroll",function(){

        var y=$(this).scrollTop();
       /* console.log(y);*/
        if(y>300&&flag){
            var a = 0;
            for (var i = 0; i < 6; i++) {
                $(ulLi_01[i]).css("transform", "scale(0,0)").css("display", "block");
                $(ulLi_02[i]).css("transform", "scale(0,0)").css("display", "block");
                $(ulLi_03[i]).css("transform", "scale(0,0)").css("display", "block");
            }
            var timer = setInterval(function () {
                $(ulLi_01[a]).css("transform", "scale(1,1)")
                a++;
                if (a == 6) {
                    clearInterval(timer);
                }
            }, 200)
            flag=false;
        }
    })

    /*当我页面滚动到下面的时候触发*/
    /* 先判断后点击*/
    $(".main .hotGame i").click(function () {
        if(ul_01.show()){   //最开始假定第一个是显示的
        //假设第一个ul是显示的那么触发显示第二个
        var num = 0;
        var timer = setInterval(function () {
            $(ulLi_01[num]).css("transform", "scale(0,0)");
            num++;
            if (num == 6) {
                ul_01.hide();
                ul_03.show();
                var b=0;
                var timer1=setInterval(function(){
                    $(ulLi_02[b]).css("transform", "scale(1,1)");
                    b++;
                    if(b==6){
                        clearInterval(timer1);
                    }
                },200)
                clearInterval(timer);
            }
        }, 200)
        }
    })
        if(ul_03.show()){
            $(".main .hotGame i").click(function (){
                var num1 = 0;
                var timer3 = setInterval(function () {
                    $(ulLi_03[num1]).css("transform", "scale(0,0)");
                    num1++;
                    if (num1 == 6) {
                        ul_02.show();
                        ul_03.hide();
                        var c=0;
                        var timer2=setInterval(function(){
                            $(ulLi_02[c]).css("transform", "scale(1,1)");
                            c++;
                            if(c==6){
                                clearInterval(timer2);
                            }
                        },200)
                        clearInterval(timer3);
                    }
                }, 200)
            })
            //假设第一个ul是显示的那么触发显示第二个
        }
        /*3D旋转轮播  开始*/
    $('.banne-3D ol li').click(function(){
        var $index=$(this).index();
        var b=$index*90+'deg';
        $(this).css({'background':'gold','color':'#f40'}).siblings().css('background','rgba(255,255,255,0.5)')
        $('.banne-3D ul li').css('transform',' translateZ(-180px) rotateX('+b+')');
    })

        /*3D旋转轮播  结束*/

    /*登录注册功能 开始*/
    //1.0 模拟用户信息api
    var data=[
        {"userName":"1234@163.com","userPwd":"1234","gender":"男","mobile":"15902017338"},
        {"userName":"1520352@163.com","userPwd":"ad00000","gender":"男","mobile":"15902017332"},
        {"userName":"1530353@163.com","userPwd":"ad11111","gender":"女","mobile":"15902017333"},
        {"userName":"1540354@163.com","userPwd":"ad22222","gender":"男","mobile":"15902017334"},
        {"userName":"1550355@163.com","userPwd":"admin00","gender":"女","mobile":"15902017335"}
    ]
    /*点击关闭按钮或者按esc*/
    $(".register .close").on("click",function(){

        $(this).parent().fadeOut(1000);
        $(".mtk").hide().fadeOut(1000);
    })

    $(".login .close").on("click",function(){
        $(this).parent().fadeOut(1000);
        $(".mtk").hide().fadeOut(1000);
    })


    /*点击a标签显示出来*/
    $(".topBar .content h2 a").eq(0).on("click",function(){
        $(".login").fadeIn();
        $(".mtk").fadeIn();
    })
    $(".topBar .content h2 a").eq(1).on("click",function(){
        $(".register").fadeIn();
        $(".mtk").fadeIn();
    })

    /*正则部分*/
    var regPwd = /^[0-9 a-z A-Z]{6}$/;
    var regPhone = /^[1](([3][0-9])|([4][57])|([5][0-9])|([8][0-9]))[0-9]{8}$/;
    var regMail = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z]+[.][0-9a-zA-Z]+$/;
    var regyzm=/^[0-9]{4}$/
    //console.log(regyzm.test("8888"));
    //1.0 获取表单数据
function $id(id) {return document.getElementById(id)}
    function formReg(jq1,reg){
        var flag=true;
        jq1.onkeyup=function(){
            var value=this.value;
            if(reg.test(value)){
                this.nextElementSibling.innerHTML="";
                flag=true;
            }else{
                this.nextElementSibling.innerHTML="格式错误"
                flag=false;
            }

            if(jq1.value==""){
                flag=false;
            }
        }
    }

    $("#sub").click(function(){
        if($("#txt")[0].value==""||$("#pwd")[0].value==""||$("#comPwd")[0].value==""||$("#comM")[0].value==""||$("#Mobile")[0].value==""){
            alert("表单数据不能为空");
            return;
        }
       var erros= $(".register span").html();
        if(erros!=""){
            alert("数据有错误不能完成注册");
            return;
        }
        if($("#comPwd")[0].value!=$("#pwd")[0].value){
            alert("两次密码不一样不能完成注册");
            return;
        }
        var json={
            userName:$("#txt").val(),
            userPwd:$("#pwd").val(),
            gender:$("#gender").val(),
            mobile:$("#Mobile").val()
        };
        data.push(json);
        alert("注册成功！");
        $(".register").fadeOut();
        $(".mtk").hide();
        console.log(data);
    })


    formReg($id("txt"),regMail)
    formReg($id("pwd"),regPwd)
    formReg($id("Mobile"),regPhone)
    formReg($id("comM"),regyzm)



    /*再次输入密码的时候需要检查是否跟上面的密码一样*/
    $("#comPwd")[0].onkeyup=function(){
        var valuecomPwd=this.value;
        var valuepwd=$("#pwd")[0].value;
        if(valuecomPwd!=valuepwd){
            this.nextElementSibling.innerHTML="两次密码不一样";
        }else{
            this.nextElementSibling.innerHTML="";
        }
    }
    /*登录部分开始*/
    var flags=true;
    $(".login #loginIn")[0].onclick=function(){
        var userName=$("#userName")[0].value;
        var userPwd=$("#userPwd")[0].value;
        /*console.log(data[0]["userName"]);
        console.log(data[0]["userPwd"]);*/
        //解决验证码的问题
        if($("#yzmIn")[0].value!="0520"){
            alert("验证码错误");
            return;
        }
        //1.0 先遍历数组每一个数组，数组里面有很多个对象，遍历对象实现
        for(var i=0;i<data.length;i++){
            if(userName==data[i]["userName"]&&userPwd==data[i]["userPwd"]){
                flags=false;
                break;
            }
        }
        if(flags){
            alert("用户名或者密码错误！")
        }else{
            $("#topBar .content .login-reg").hide();
            $(".login").hide();
            $(".mtk").hide();
            $("#topBar .content .info em").html(userName);
            $("#topBar .content .info").show();
            alert("登录成功！");

        }
    }

    console.log(data);


    /*登录注册功能 结束*/
})




