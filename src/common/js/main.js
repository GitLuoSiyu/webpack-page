// 阿拉佳主JS，留给后面入职的小伙伴用，注释写多一点，如果有不明白的在微信群里@我
// 1.主要导航
$(function() {
  jQuery('#nav').slide({
    type: 'menu',
    titCell: '.nav_li',
    targetCell: '.sub_w',
    effect: 'slideDown',
    delayTime: 300,
    triggerTime: 50,
    returnDefault: false,
  });
});

// 2.移动导航导航显隐
$(function() {
  $('#nav_icon').click(function() {
    $(this).toggleClass('open', 200);
    $('.nav_m_list').slideToggle(200);
  });
  $('.nav_m_list li').click(function() {
    $(this)
      .toggleClass('active', 200)
      .siblings('.nav_m_list li')
      .removeClass('active', 200);
  });
});

// 3.栏目、列表、内页移动导航下拉
$(function() {
  $(document).ready(function() {
    $('.fix_nav_btn').click(function() {
      $('.fix_nav_w').toggleClass('tab_more');
    });
    $('.fixed_nav ul li a').click(function() {
      $('.fix_nav_w').removeClass('tab_more');
    });
  });
});

// 4.通用返回顶部
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 500) {
      //距离顶部多少高度显示按钮
      $('#totop').fadeIn(500);
    } else {
      $('#totop').fadeOut(1000);
    }
  });

  $('#totop').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });

  //按钮定位
  var win_width = $(window).width(); //窗口宽度
});

// 5.智能客服设置、读取、交互，展开或者收起设置cookie有效24小时
$(function() {
  //if($.cookie("leyuClose") == "yes"){
  //			$("#main_leyu").css("height","500");
  //			$("#leyu_w").show();
  //			$("#open_leyu").hide();
  //		}
  //		else if($.cookie("leyuClose") === "no"){
  //			$("#main_leyu").css("height","0");
  //			$("#leyu_w").hide();
  //			$("#open_leyu").show();
  //		}
  //		else{
  //			$("#main_leyu").css("height","300");
  //			$("#leyu_w").show();
  //			$("#open_leyu").hide();
  //		}
  $('#open_leyu').bind('click', function() {
    $('#main_leyu').css('height', '300');
    $('#leyu_w').show();
    $(this).hide();
    $.cookie('leyuClose', 'yes', { expires: 1 });
  });
  $('#close_im').bind('click', function() {
    $('#main_leyu').css('height', '0');
    $('#leyu_w').hide();
    $('#open_leyu')
      .show()
      .addClass('animated');
    $.cookie('leyuClose', 'no', { expires: 1 });
  });
  $('.weixing_container').bind('mouseenter', function() {
    $('.weixing_show')
      .show()
      .addClass('show');
  });
  $('.weixing_container').bind('mouseleave', function() {
    $('.weixing_show')
      .hide()
      .removeClass('show');
  });

  //定时添加动画
  //       setInterval(function(){
  //            jQuery("#leyu_w,.leyu_list .leyu_a").toggleClass('animated');
  //       },16000);
});
// 6.IE错误清除
$(function() {
  function killErrors() {
    return true;
  }
  window.onerror = killErrors;
});
//// Loading
//$(function (){
//   $(".loading_w").fadeOut("slow");
//});

/*4.IE浏览器版本检测、提示*/

(function($) {
  $('#goon').live('click', function() {
    $('#ie-alert-overlay').hide();
    $('#ie-alert-panel').hide();
  });

  function initialize($obj, support, title, text) {
    var panel =
      '<span>' +
      title +
      '</span>' +
      '<p> ' +
      text +
      '</p>' +
      "<div class='browser'>" +
      '<ul>' +
      "<li><a class='firefox' href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'></a></li>" +
      "<li><a class='chrome' href='https://www.google.com/chrome/' target='_blank'></a></li>" +
      "<li><a class='ie9' href='http://windows.microsoft.com/en-US/internet-explorer/downloads/ie/' target='_blank'></a></li>" +
      "<li><a class='safari' href='http://www.apple.com/safari/download/' target='_blank'></a></li>" +
      "<li><a class='opera' href='http://www.opera.com/download/' target='_blank'></a></li>" +
      '<ul>' +
      '</div>';

    var overlay = $("<div id='ie-alert-overlay'></div>");
    var iepanel = $("<div id='ie-alert-panel'>" + panel + '</div>');

    var docHeight = $(document).height();

    overlay.css('height', docHeight + 'px');

    if (support === 'ie8') {
      // shows the alert msg in IE8, IE7, IE6

      if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
        $obj.prepend(iepanel);
        $obj.prepend(overlay);
      }

      if ($.browser.msie && parseInt($.browser.version, 10) === 6) {
        $('#ie-alert-panel').css('background-position', '-626px -116px');
        $obj.css('margin', '0');
      }
    } else if (support === 'ie7') {
      // shows the alert msg in IE7, IE6

      if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
        $obj.prepend(iepanel);
        $obj.prepend(overlay);
      }

      if ($.browser.msie && parseInt($.browser.version, 10) === 6) {
        $('#ie-alert-panel').css('background-position', '-626px -116px');
        $obj.css('margin', '0');
      }
    } else if (support === 'ie6') {
      // shows the alert msg only in IE6

      if ($.browser.msie && parseInt($.browser.version, 10) < 7) {
        $obj.prepend(iepanel);
        $obj.prepend(overlay);

        $('#ie-alert-panel').css('background-position', '-626px -116px');
        $obj.css('margin', '0');
      }
    }
  } //end initialize function
  $.fn.iealert = function(options) {
    var defaults = {
      support: 'ie8', // ie8 (ie6,ie7,ie8), ie7 (ie6,ie7), ie6 (ie6)
      title: '温馨提示：为了更好的体验编程竞技，您可能需要换一个新的浏览器...', // title text
      text:
        "<p>浏览器版本过低，容易遭受病毒攻击，为了您的安全以及获得更为优质的体验，建议使用以下高速浏览器。</p><p class='ie_ps'>如果您使用QQ、360、搜狗、百度等国内浏览器，请切换至【高速模式】。</p><br><a  id='gogo_btn'  onclick='closeFootAd()' href='javascript:void(0)'>暂不升级，继续访问</a><a id='goon' onclick='closeFootAd()' href='javascript:void(0)'></a>",
    };

    var option = $.extend(defaults, options);

    return this.each(function() {
      if ($.browser.msie) {
        var $this = $(this);
        initialize($this, option.support, option.title, option.text);
      } //if ie
    });
  };
})(jQuery);

$(document).ready(function() {
  $('body').iealert();
});

$(function() {
  if (getCookie('footad') == 0) {
    $('#ie-alert-overlay').hide();
    $('#ie-alert-panel').hide();
  }
});

// 关闭不再提示，
function closeFootAd() {
  $('#ie-alert-overlay').hide();
  $('#ie-alert-panel').hide();
  setCookie('footad', '0');
}

// 设置cookie
function setCookie(name, value) {
  var exp = new Date();
  exp.setTime(exp.getTime() + 24 * 60 * 60 * 1000); //有效期1天
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}
// 取cookies函数
function getCookie(name) {
  var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
  if (arr != null) return unescape(arr[2]);
  return null;
}

// 响应式处理
(function(f, j) {
  var i = document,
    d = window;
  var b = i.documentElement;
  var c;
  var h = i.querySelector('meta[name="viewport"]');
  var e =
    'width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=no';
  if (h) {
    h.setAttribute('content', e);
  } else {
    h = i.createElement('meta');
    h.setAttribute('name', 'viewport');
    h.setAttribute('content', e);
    if (b.firstElementChild) {
      b.firstElementChild.appendChild(h);
    } else {
      var a = i.createElement('div');
      a.appendChild(h);
      i.write(a.innerHTML);
    }
  }
  function g() {
    var k = b.getBoundingClientRect().width;
    if (!j) {
      j = 540;
    }
    if (k > j) {
      k = j;
    }
    var l = (k * 100) / f;
    b.style.fontSize = l + 'px';
  }
  g();
  d.addEventListener(
    'resize',
    function() {
      clearTimeout(c);
      c = setTimeout(g, 300);
    },
    false,
  );
  d.addEventListener(
    'pageshow',
    function(k) {
      if (k.persisted) {
        clearTimeout(c);
        c = setTimeout(g, 300);
      }
    },
    false,
  );
  if (i.readyState === 'complete') {
    i.body.style.fontSize = '14px';
  } else {
    i.addEventListener(
      'DOMContentLoaded',
      function(k) {
        i.body.style.fontSize = '14px';
      },
      false,
    );
  }
})(750, 750);
