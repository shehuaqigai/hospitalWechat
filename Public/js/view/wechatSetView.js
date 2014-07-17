(function(){
    //首页视图生成页
    var wechatSet=Backbone.View.extend({
        el:"#wechatSet",
        events:{

        },
        template:ADMIN.tpl,//模板
        button:null,
        modelData:null,
        //初始化应用
        initialize:function(initData){
            //初始化微信设置的数据
            this.modelData=initData.collection;
            //传入和渲染微信设置下面的子按钮
            this.init(initData.item);
        },
        init:function(button){
            this.$el.empty();
            this.button=button;
            this.renderSwitch(button);

        },
        renderSwitch:function(button){
                this[button]();
        },
        //页面渲染
        interfaceSet:function(){
            this.$el.prepend(this.template[this.button]());
            var url=document.location.href;
                url=url.split("index.php",1)+'index.php?m=wechatapi&c=Index&a=index';
            this.$el.find('p .configUrl').html(url);
        },
        indexPage:function(){},
        massSendMesg:function(){},
        mesgSet:function(){},
        fllowPush:function(){},
        sceneQRcode:function(){},
        ajaxAction:function(data){
        },
        destroy:function(){
            this.remove();
        }

    });
    window.ADMIN.V.wechatSetView=wechatSet;
}());