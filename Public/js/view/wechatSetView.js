(function(){
    //首页视图生成页
    var wechatSet=Backbone.View.extend({
        el:"#wechatSet",
        events:{
            "click .interfaceSet":"oninterfaceSet",//微信配置信息设置按钮事件
            "click .startCreateStairMenu":"onstartCreateStairMenu",
            "click .customMenuButtonSwitch":"oncustomMenuButtonSwitch"
        },
        template:ADMIN.tpl,//模板
        button:null,//子按钮
        modelData:null,//微信设置模型数据

        //初始化微信设置模块页面
        initialize:function(initData){
            //初始化微信设置的数据
            this.modelData=initData.collection;
            //传入和渲染微信设置下面的子按钮
            this.init(initData.item);
        },

        init:function(button){
            this.$el.empty();
            this.button=button;
            this.renderDispatcher(button);
        },

        //微信设置模块子按钮渲染委派
        renderDispatcher:function(button){
                this[button]();
        },

        //微信配置UI页面渲染
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

        //自定义事件UI页面渲染
        customMenu:function(){

            var customMenuUI = this.template[this.button]();
            this.$el.append(customMenuUI);



        },

        //微信基本信息设置按钮事件
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
        onstartCreateStairMenu:function(e){
            console.log(e.target);

        },
        oncustomMenuButtonSwitch:function(e){
            var ele= e.target;



            console.log(e);


        },
        destroy:function(){
            this.remove();
        }

    });
    window.ADMIN.V.wechatSetView=wechatSet;
}());