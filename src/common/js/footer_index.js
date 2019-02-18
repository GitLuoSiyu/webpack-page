// 

$(document).ready(function(){ $('#link').click(function(){
   $('#flink').toggle(); // 可以限定一个速度
  });
 });

    get=function (id){return document.getElementById(id)}  
    if(document.all){  
        window.XMLHttpRequest=function(){  
            var get=['Microsoft.XMLHTTP','Msxml2.XMLHTTP'];  
            for(var i=0;i<get.length;i++){try{return new ActiveXObject(get[i])}catch(e){}};  
        };  
    }  
    webDate=function(fn){  
        var Htime=new XMLHttpRequest();  
        Htime.onreadystatechange=function(){Htime.readyState==4&&(fn(new Date(Htime.getResponseHeader('Date'))))};  
        Htime.open('HEAD', '/?_='+(-new Date));  
        Htime.send(null);  
    }  
    window.time=new Date();  
    time2String=function (t){  
            with(t)return [ 
                ('0'+(getMonth()+1)).slice(-2),'月'  
                ,('0'+getDate()).slice(-2),'号'  
                 ].join('')  
    }  
    hour2String=function (t){  
            with(t)return [ 
                ('0'+getHours()).slice(-2) 
                 ].join('')  
    }
    var currtime;
    var currhour; 
    webDate(function (webTime){  
        currtime = time2String(time=webTime);
        currhour = hour2String(time=webTime);
        
    }) 

<!--
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->		
    (function() {
    /**
     * 虚拟URL的路径名
     * 必须以"/"开头，后面字符允许字母、数字、"-"和"/"
     */
    var REQUEST_PATH = '/virtual/leyu';

    /** 
     * 虚拟URL的页面名
     * 每个属性名都是统计请求的一个虚拟页面名，允许用字母、数字、"-"和"/"
     * 属性值可以是页面名对应的元素id，也可以是用来获取元素的函数
     * 如果是函数，则该函数需要返回元素对象，或是由元素对象组成的NodeList或Array
     */
    var REQUEST_NAME = {
        'looyu-float-left' : 'looyu_dom_1',     // 页面左侧浮动的沟通按钮
        'looyu-popup' : 'doyoo_mon_accept',     // 页面中间弹出的邀请按钮
        'looyu-float-right' : 'contactR'        // 页面右侧浮动的沟通按钮
    };
    // 以下内容请勿修改 2019.02.13

    REQUEST_PATH += /\/$/.test(REQUEST_PATH) ? '' : '/';

    window._hmt = window._hmt || [];

    var getElementsByClassName = function(elem, className) {
        if (elem.getElementsByClassName) {
            return elem.getElementsByClassName(className);
        }
        var elems = [];
        var children = elem.getElementsByTagName('*');
        className = new RegExp("(^|\\s)" + className.replace(/\-/g, "\\-") + "(\\s|$)");
        for (var i = 0, l = children.length; i < l; i++) {
            if (className.test(children[i].className)) {
                elems.push(children[i]);
            }
        }
        return elems;
    };

    var on = function(elem, event, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(event, handler, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + event, handler);
        }
    };

    var isType = function(object, type) {
        return Object.prototype.toString.call(object) === '[object ' + type + ']';
    };

    var iterate = function(obj, func) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                func.call(obj, i, obj[i]);
            }
        }
    };

    on(document, 'mouseup', function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var request = {};
        iterate(REQUEST_NAME, function(name, identifier) {
            request[name] = isType(identifier, 'Function') 
                ? identifier() : document.getElementById(identifier);
        });
        while (target && target != document) {
            iterate(request, function(name, object) {
                if (isType(object, 'Array') || isType(object, 'NodeList')) {
                    for (var i = 0, l = object.length; i < l; i++) {
                        (target === object[i]) 
                            && window._hmt.push(['_trackPageview', REQUEST_PATH + name + '/' + (i + 1)]);
                    }
                } else {
                    (target === object) && window._hmt.push(['_trackPageview', REQUEST_PATH + name]);
                }
            });
            target = target.parentNode;
        }      
    });
})();