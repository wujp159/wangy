/**
 * Created by _W$Bh on 2017/5/11.
 */
var eventTool= {
    //1.0 ���Ƚ���¼�����ļ���д��  ����==>����==>ָ����
    getEvent: function (e) {
        return e || window.event;
    },
    //2.0 ��ȡ��������ķ���
    getClientX: function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY: function (e) {
        return this.getEvent(e).clientY;
    },
    //3.0 ��ȡ����ҳ��ķ���
    getPageX: function (e) {
        return this.getEvent(e).pageX || this.getEvent(e).clientX + (document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || 0);
    },
    getPageY: function (e) {
        return this.getEvent(e).pageY || this.getEvent(e).clientY + (document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0);
    }
}

//��򵥵�ʹ�÷�����ֱ�ӵ���==>eventTool.getPageX(e);
//eventTool.getPageY(e);