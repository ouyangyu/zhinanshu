<?php
/**
 * Created by PhpStorm.
 * User: ouyangyu
 * Date: 15/1/15
 * Time: 下午8:28
 */
class CommonModel extends Model {
    /**
     * 提示操作信息的，并且跳转
     * @param string $mes
     * @param string $url
     */
    protected  function alertMes($mes,$url){
        echo "<script type='text/javascript'>alert('{$mes}');location.href='{$url}';</script>";
    }

    /**
     * 截取文件扩展名
     * @param string $filename
     * @return string
     */
    protected  function getExt($filename){
        return strtolower(pathinfo($filename,PATHINFO_EXTENSION));
    }

    /**
     * 产生唯一名称
     * @param int $length
     * @return string
     */
    protected  function getUniqidName($length=10){
        return substr(md5(uniqid(microtime(true),true)),0,$length);
    }
}