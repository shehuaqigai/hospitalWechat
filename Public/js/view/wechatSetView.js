(function(){
    //首页视图生成页
    var wechatSet=Backbone.View.extend({
        el:"#wechatSet",
        events:{
            "click .interfaceSet":"oninterfaceSet"
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
            var url=document.location.href;
            url=url.split("index.php",1)+'index.php?m=wechatapi&c=Index&a=index';
            var self=this;
            $.ajax({
                url:ADMIN.global.APPPATH+"Public/resource/config.json",
                dataType:"json",
                success:function(data){
                    self.$el.prepend(self.template[self.button]({interfaceSet:data}));
                    self.$el.find('p .configUrl').html(url);
                },
                error:function(data){
                       console.log("获取配置信息出错");
                }
            });

        },
        indexPage:function(){},
        massSendMesg:function(){},
        mesgSet:function(){},
        fllowPush:function(){},
        sceneQRcode:function(){},
        oninterfaceSet:function(e){
        var dataJson='{"token":"'+this.$el.find("p>input.token").val()+'","appid":"'+
            this.$el.find("p>input.appid").val()+'","appsecret":"'+
            this.$el.find("p>input.appsecret").val()+'"}';
            $.ajax({
                url:ADMIN.global.ADMINPATH+"wechatSet/interfaceSet",
                data:{dataformat:dataJson},
                success:function(data){
                    $.Zebra_Dialog('<strong>设置成功!</strong>',{type:"confirmation",title:"确认"});
                },
                error:function(){}
            });


        },
        ajaxAction:function(data){
        },
        destroy:function(){
            this.remove();
        }

    });
    window.ADMIN.V.wechatSetView=wechatSet;
}());