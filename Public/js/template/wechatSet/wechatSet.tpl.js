(function(){

ADMIN["tpl"] = ADMIN["tpl"] || {};

ADMIN["tpl"] ["customMenu"] = _.template('<div class="ws_customMenu"><p class="warming">注意:这里的自定义菜单操作不要修改,除非你知道自己在做什么,改动菜单后对应的事件回复处理和对应的链接页面都要重新开发,如果需要改变菜单请联系软件开发商!</p><div><div class="menuSwitch"><button><i></i></button><button><i></i></button><button><i></i></button></div><div class="menuUIContainer"></div></div></div>');

ADMIN["tpl"] ["fllowPush"] = _.template('');

ADMIN["tpl"] ["indexPage"] = _.template('');

ADMIN["tpl"] ["interfaceSet"] = _.template('<p>接口配置token:<input type="text" class="token" value="<%= interfaceSet.token %>"/><i style="color:red;">*</i>输入标识符可以随意但一定要和开发者配置中得token一样</p><p>微信公号appid:<input type="text" class="appid" value="<%= interfaceSet.appid %>"/><i><i style="color:red;">*</i>需要微信认证后才会分配(需要菜单功能必须认证并且是服务号)</i></p><p>公号appsecret:<input type="text" class="appsecret" value="<%= interfaceSet.appsecret %>"/><i><i style="color:red;">*</i>需要微信认证后才会分配</i></p><p>微信url接口配置信息:<i class="configUrl"></i>(复制到开发者配置中)</p><p class="interfaceSet">微信设置</p>');

ADMIN["tpl"] ["massSendMesg"] = _.template('');

ADMIN["tpl"] ["mesgSet"] = _.template('');

ADMIN["tpl"] ["sceneQRcode"] = _.template('');

})();