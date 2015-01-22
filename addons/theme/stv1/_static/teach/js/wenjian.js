$(document).ready(function(){
    var $parent = $('#divall'),$bgcolor = $('#divall li'),$carry = $('#carrynews'),$carryaddc = $('#carryaddc'),$downloadthisodc = $('.downloadthisodc'),
        $removenews = $('.remove'),$removeall = $('.removeall'),$removeright = $('#removethispc'),
        $namehide = $('#divall li input.changename'),$changename = $('#changename');
        $removenews.hide();
        $downloadthisodc.hide();
    //新建
    $carry.click(function(){
        alert('确定新建文件夹？');
        setTimeout(
            function(){
                $parent.append("<li class='document'><div class='doctu'>0</div><p>新建文件夹</p><input type='text' class='changename' value='新建文件夹'/></li>");
            },500);
    });
    /*$carry.live('click' , function(){
        alert('确定新建文件夹？');
        setTimeout(
            function(){
                $parent.append("<li><input type='text' \class='changename'\ value='新建文件夹'/></li>");
            },500);
    });*/
    //清空
    /*$removeall.live('click' , function(){
        alert('确定清空所有文件夹？');
        setTimeout(
            function(){
                $parent.empty();

            },500);
    }); *///新文件夹不起作用！！
    //新建文件
    $carryaddc.click(function(){
        alert('确定新建文件？');
        setTimeout(
            function(){
                $parent.append('<li class="documentdoc" style="padding-top:18px;height: 222px;"><div class="doctuadd"></div><p style="margin-top:0;">2015年北京市普通<br />高中会考化学</p><p class="docb" style="margin-top:0;">2015/10/7</p></li>');
            },500);
    });
    //变色
    $bgcolor.click(function(){
        var btns = document.getElementById('removebutton');
        btns02 = document.getElementById('removethispc');
        btns03 = document.getElementById('downloadthisdoc');
        $removenews.fadeIn(250);
        if($(this).hasClass('documentdoc'))
        {
            $downloadthisodc.fadeIn(250);
        }else{
            $downloadthisodc.fadeOut(250);
        }

        $(this).addClass('bgclocrc').siblings().removeClass('bgclocrc');
        $(this).attr("id",'remove').siblings().attr('id','');
        $( " input[type=text] ").attr("id",'namecc').siblings().attr('id',' ');
        btns.onclick = function(){//js 调用
            //alert('确定删除文件夹？');
            $('.loginmask').hide();
            $('#loginalerte').hide();
            setTimeout(
                function(){
                    if($bgcolor.hasClass('bgclocrc'))
                    {
                        //alert(123)
                        // document.getElementById('remove').remove();//js
                        $('#remove').remove();//jq
                        $removenews.fadeOut(250);
                        if($bgcolor.hasClass('documentdoc'))
                        {
                            $downloadthisodc.fadeOut(250);
                        }
                    }else
                    {
                        alert('请选择文件')
                    }
                },250)
        }//

        btns02.onclick = function(){//js 调用
            alert('确定删除文件夹？');
            setTimeout(
                function(){
                    if($bgcolor.hasClass('bgclocrc'))
                    {
                        $('#remove').remove();//jq
                        $removenews.fadeOut(250);
                        if($bgcolor.hasClass('documentdoc'))
                        {
                            $downloadthisodc.fadeOut(250);
                        }
                    }else
                    {
                        alert('请选择文件')
                    }
                },250)
        }//	右键功能---删除

        //右键菜单
        var container = document.getElementById('remove');
        var menu = document.getElementById('menu');

        /*显示菜单*/
        function showMenu() {

            var evt = window.event || arguments[0];

            /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
            var rightedge = container.clientWidth-evt.clientX;
            var bottomedge = container.clientHeight-evt.clientY;

            /*如果从鼠标位置到容器右边的空间小于菜单的宽度，就定位菜单的左坐标（Left）为当前鼠标位置向左一个菜单宽度*/
            if (rightedge < menu.offsetWidth)
                menu.style.left = container.scrollLeft + evt.clientX - menu.offsetWidth + "px";
            else
            /*否则，就定位菜单的左坐标为当前鼠标位置*/
                menu.style.left = container.scrollLeft + evt.clientX + "px";

            /*如果从鼠标位置到容器下边的空间小于菜单的高度，就定位菜单的上坐标（Top）为当前鼠标位置向上一个菜单高度*/
            if (bottomedge < menu.offsetHeight)
                menu.style.top = container.scrollTop + evt.clientY - menu.offsetHeight + "px";
            else
            /*否则，就定位菜单的上坐标为当前鼠标位置*/
                menu.style.top = container.scrollTop + evt.clientY + "px";

            /*设置菜单可见*/
            menu.style.display = "block";
            LTEvent.addListener(menu,"contextmenu",LTEvent.cancelBubble);
        }
        /*隐藏菜单*/
        function hideMenu() {
            menu.style.display = 'block';
        }
        LTEvent.addListener(container,"contextmenu",LTEvent.cancelBubble);
        LTEvent.addListener(container,"contextmenu",showMenu);
        LTEvent.addListener(document,"click",hideMenu);

        //
        $changename.click(function(){

            if($bgcolor.hasClass('bgclocrc'))
            {
                $('#remove').find('.changename').val('');
                $('#remove').find('.changename').css('border','1px solid #30b33f')
            }else
            {
                alert('请选择文件')
            }

        });

    });

    //修改文件名
    $namehide.focus(function(){
        $(this).css('border','1px solid #30b33f');
        $(this).val('');
        //键盘控制
        /* document.onkeydown = function (event) {
         var e=event.srcElement;
         if(event.keyCode==13)
         {
         alert('确定修改文件名?');
         return true;
         }
         }*/
    });
    $namehide.blur(function(){
        alert('确定修改文件名？')
        $(this).css('border','none');
        if( $(this).val() == ""){
            $(this).val('新建文件夹');
        }else{
            // $(this).parent().find('span').text() = $(this).value;
        }
    });

    //纯属娱乐耍耍，如需更多功能亲们自行开发...............


});