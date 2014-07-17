<?php
/**
  *   +----------------------------------------------------------------------
  *   | 微商城项目启动文件
  *   +----------------------------------------------------------------------
  *   | Copyright (c) 2014-2016 http://qiugeWeChatShop.cn All rights reserved.
  *   +----------------------------------------------------------------------
  *   | Author: yangchangqiu <shehuaqigai@gmail.com>
  *   +----------------------------------------------------------------------
*/
// 应用入口文件
/**
get_defined_functions();//获取全局的函数包括内置和自定义的是个二维数组[internal=>Array[1422],user=>Array[0]];
get_defined_constants(true);//获取全局的常量
get_defined_vars();跟$GLOBALS是一样的前者是是个数组
*/
require './vendor/autoload.php';//第三方类库自动加载器
// 检测PHP环境detect php enviroment
if(version_compare(PHP_VERSION,'5.3.0','<')) die('require PHP > 5.3.0 !');
//应用目录
define('APP_PATH','./Wechat/');

// 定义框架
define('THINK_PATH','./TP/');
//定义运行时的目录
define('RUNTIME_PATH',APP_PATH.'Runtime/');
// 开启调试模式 建议开发阶段开启 部署阶段注释或者设为false
define('APP_DEBUG',true);

//默认安全文件
//define('DIR_SECURE_FILENAME', 'index.html');
//访问默认安全文件的返回内容
//define('DIR_SECURE_CONTENT', 'deney Access!');

//生成后台模块
//define('BIND_MODULE','Admin');

/**如果你的环境足够安全，不希望生成目录安全文件，可以在入口文件里面关闭目录安全文件的生成，例如：*/
define('BUILD_DIR_SECURE', false);//不生成默认文件


//默认存储类型
define('STORAGE_TYPE','File');


/**
 * 每个应用模式有自己的定义文件，用于配置当前模式需要加载的核心文件和配置文件，以及别名定义、行为扩展定义等等。
 * 除了模式定义外，应用自身也可以独立定义模式文件。
 * 默认情况下的应用模式是普通模式（common），
 * 如果要采用其他的应用模式（当然，前提是已经有定义），必须在入口文件中定义，设置APP_MODE常量即可
 */
define('APP_MODE','common');//当前应用模式名称

//每个应用都可以在不同的情况下设置自己的状态（或者称之为应用场景），并且加载不同的配置文件。
define('APP_STATUS','office');


//define("BUILD_LITE_FILE",true);
//Logic       逻辑目录（可选）
//Service     Service目录（可选）
// 引入ThinkPHP入口文件
require THINK_PATH.'TP.php';
