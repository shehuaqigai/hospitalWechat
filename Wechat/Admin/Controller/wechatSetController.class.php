<?php
namespace Admin\Controller;
use Think\Controller;
class WechatSetController extends Controller {


   public function interfaceSet(){

     $data=I("get.dataformat");
       echo json_encode($data);
     //  $fh = fopen("./Public/resource/config.json", "w");
      // fwrite($fh, $data);
     //  fclose($fh);

    }


}