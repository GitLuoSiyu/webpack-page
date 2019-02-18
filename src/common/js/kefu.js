if (typeof doyoo == 'undefined' || !doyoo) {
  var d_genId = function() {
    var id = '',
      ids = '0123456789abcdef';
    for (var i = 0; i < 34; i++) {
      id += ids.charAt(Math.floor(Math.random() * 16));
    }
    return id;
  };
  var doyoo = {
    env: {
      secure: false,
      mon: 'http://m2135.looyu.com/monitor',
      chat: 'http://ali193.looyu.com/chat',
      file: 'http://static.doyoo.net/110402',
      compId: 31662,
      confId: 132653,
      vId: d_genId(),
      lang: '',
      fixFlash: 1,
      subComp: 19405,
    },

    monParam: {
      index: 1,

      title:
        '\u60a8\u597d\uff0c\u6b22\u8fce\u54a8\u8be2\u597d\u89c6\u901a\uff01',
      text:
        '<br /><span style="font-family:Microsoft YaHei;"><span style="font-size:small;">&nbsp;&nbsp;</span><span style="color: rgb(51, 51, 255);"><strong><span style="font-size:medium;">\u597d\u89c6\u901a\u4e91\u76f4\u64ad</span></strong><span style="font-size:small;">\u63d0\u4f9b\u4f01\u4e1a\u7ea7\u4e92\u52a8\u76f4\u64ad\u89e3\u51b3\u65b9\u6848\uff01</span></span></span>',
      auto: 15,
      group: '27640',
      start: '00:00',
      end: '24:00',
      mask: false,
      status: true,
      fx: 0,
      mini: 2,
      pos: 0,
      offShow: 1,
      loop: 0,
      autoHide: 0,
      hidePanel: 0,
      miniStyle: 1,
      monHideStatus: [0, 0, 0],
      monShowOnly: '',
    },

    panelParam: {
      category: 'win',
      position: 1,
      vertical: 300,
      horizon: 20,

      mode: 2,
      index: 1,

      width: 135,

      height: 317,

      panelBG: 'http://www.fsmeeting.com/images/looyu/leyufukuang.png',
      panelMain: '15 30 130 93',
      cellOnline: 'http://www.fsmeeting.com/images/looyu/zaixian.gif',
      cellOffline: 'http://www.fsmeeting.com/images/looyu/liuyan.gif',
      cellHeight: 22,
      cellMargin: 'margin-top:6px;margin-bottom:6px',
      onlineText: 'color:#444444;font:14px ',
      offlineText: 'color:;font:14px ',
      textMargin: 'margin-left:0px',

      customers: {
        showRobot: 0,
        groups: [
          {
            id: 27640,
            phone: 0,
            count: 0,
            name: '\u8d2d\u4e70\u54a8\u8be2',
            active: 4,
            sms: 0,
            mode: 2,
            online: 4,
          },
          {
            id: 52019,
            phone: 0,
            count: 0,
            name: '\u4ee3\u7406\u5408\u4f5c',
            active: 4,
            sms: 0,
            mode: 2,
            online: 4,
          },
          {
            id: 52018,
            phone: 0,
            count: 0,
            name: '\u6280\u672f\u652f\u6301',
            active: 4,
            sms: 0,
            mode: 2,
            online: 4,
          },
        ],
        mode: '1',
      },
    },

    sniffer: {
      ids: '\u76f4\u63a5\u5728\u7ebf\u6c9f\u901a',
      gids: '27640',
    },
  };

  document.write('<div id="doyoo_panel"></div>');

  document.write('<div id="doyoo_monitor"></div>');

  document.write('<div id="doyoo_share" style="display:none;"></div>');
  document.write(
    '<lin' +
      'k rel="stylesheet" type="text/css" href="http://static.doyoo.net/110402/looyu.css?140702"></li' +
      'nk>',
  );
  document.write(
    '<scr' +
      'ipt type="text/javascript" src="http://static.doyoo.net/110402/looyu.js?16110901"></scr' +
      'ipt>',
  );
}
