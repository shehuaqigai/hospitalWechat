(function(){

ADMIN["tpl"] = ADMIN["tpl"] || {};

ADMIN["tpl"] ["customMenu"] = _.template('<div class="ws_customMenu"><p class="warming">注意:这里的自定义菜单操作不要修改,除非你知道自己在做什么,改动菜单后对应的事件回复处理和对应的链接页面都要重新开发,如果需要改变菜单请联系软件开发商!</p><div><div class="menuSwitch"><button class="customMenuButtonSwitch clicked"><i class="icon-aid"></i>创建菜单</button><button class="customMenuButtonSwitch"><i class="icon-pencil2"></i>编辑菜单</button></div><div class="menuUIContainer"><div class="customMenuCreate"><button class="startCreateStairMenu">创建一级菜单</button><div class="MenusBucket" style="display: none;"><ul class="firstStairMenu"><li class="stairMenu"><input type="text" mark="name"/><input type="radio" />click<input type="radio" />view<input type="radio" subMenu="subMenu"/>子菜单<input type="text" mark="typeValue" style="display:none"/><button style="display:none">创建子菜单</button></li></ul></div><button class="submitMenuCreate">创建</button></div><div class="customMenuEditeMenu"></div></div></div></div>');

ADMIN["tpl"] ["fllowPush"] = _.template('');

ADMIN["tpl"] ["indexPage"] = _.template('');

ADMIN["tpl"] ["interfaceSet"] = _.template('<p>接口配置token:<input type="text" class="token" value="<%= interfaceSet.token %>"/><i style="color:red;">*</i>输入标识符可以随意但一定要和开发者配置中得token一样</p><p>微信公号appid:<input type="text" class="appid" value="<%= interfaceSet.appid %>"/><i><i style="color:red;">*</i>需要微信认证后才会分配(需要菜单功能必须认证并且是服务号)</i></p><p>公号appsecret:<input type="text" class="appsecret" value="<%= interfaceSet.appsecret %>"/><i><i style="color:red;">*</i>需要微信认证后才会分配</i></p><p>微信url接口配置信息:<i class="configUrl"></i>(复制到开发者配置中)</p><p class="interfaceSet">微信设置</p>');

ADMIN["tpl"] ["massSendMesg"] = _.template('');

ADMIN["tpl"] ["mesgSet"] = _.template('');

ADMIN["tpl"] ["sceneQRcode"] = _.template('');

})();