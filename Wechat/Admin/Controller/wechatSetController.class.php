<?php
namespace Admin\Controller;
use Think\Controller;
class WechatSetController extends Controller {


   public function interfaceSet(){


       $data=I("get.dataformat");
       $str_json=str_replace("&quot;",'"',$data);
       $fh = fopen("./Public/resource/config.json", "w");
       fwrite($fh, $str_json);
       fclose($fh);

    }


}