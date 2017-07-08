/**
 * Created by _W$Bh on 2017/5/11.
 */
var eventTool= {
    //1.0 首先解决事件对象的兼容写法  对象==>方法==>指向函数
    getEvent: function (e) {
        return e || window.event;
    },
    //2.0 获取可视区域的方法
    getClientX: function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY: function (e) {
        return this.getEvent(e).clientY;
    },
    //3.0 获取整个页面的方法
    getPageX: function (e) {
        return this.getEvent(e).pageX || this.getEvent(e).clientX + (document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || 0);
    },
    getPageY: function (e) {
        return this.getEvent(e).pageY || this.getEvent(e).clientY + (document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0);
    }
}

//最简单的使用方法：直接调用==>eventTool.getPageX(e);
//eventTool.getPageY(e);