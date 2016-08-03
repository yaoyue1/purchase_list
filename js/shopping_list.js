/*
 *Description :  常购清单;
 *Author : Yao Yue;
 *Date : 2016/05/05;
 **/
var shopping_list = {
	initFun:function(){
        this.scrollFun();//山姆头条；
		this.deleteFun();//hover显示垃圾桶图标，点击遮罩层确认是否删除，确认删除，取消不删除，遮罩层关闭。
        this.lookmoreFun();//点击查看更多订单功能
        this.menuFun();//左侧菜单

	},


    //山姆头条；
    scrollFun:function(){
        var $this = $(".slide-box");
        var scrollTimer;
        $this.hover(function(){
            clearInterval(scrollTimer);
        },function(){
            scrollTimer = setInterval(function(){
                scrollNews( $this );
            }, 3000 );
        }).trigger("mouseleave");
        function scrollNews(e){
            var $self = e.find("ul");
            var lineHeight = $self.find("li:first").height(); //获取行高
            $self.animate({ "margin-top" : -lineHeight +"px" }, 600 , function(){
                $self.css({"margin-top":0}).find("li:first").appendTo($self);
            })
        }
    },

    //点击查看更多订单功能
    lookmoreFun:function() {
//        var items = [
//            {"lsrc": "http://img.la/nocache/jpg/lightblue/130x130",
//             "ltit": "和式照烧烤大虾和式照烧烤大和式照烧烤大虾和式照烧烤大",
//             "lprice": "&yen;181.00",
//             "ltype": "a"
//            },
//
//            {"lsrc": "http://img.la/nocache/jpg/lightblue/130x130",
//                "ltit": "和式照烧烤大虾和式照烧烤大和式照烧烤大虾和式照烧烤大",
//                "lprice": "&yen;181.00",
//                "ltype": "a"
//            },
//
//            {"lsrc": "http://img.la/nocache/jpg/lightblue/130x130",
//                "ltit": "和式照烧烤大虾和式照烧烤大和式照烧烤大虾和式照烧烤大",
//                "lprice": "&yen;181.00",
//                "ltype": "a"
//            }
//        ];
//        var lilist = '';
//        function addFun(){
//            for (var i = 0, len = items.length; i < len; i++) {
//                lilist = '' + '<li class="clearfix">' +
//                    '<a href="javascript:;" class="fl picture">' +
//                    '<img src="' + items[i].lsrc + '" width="130" height="130"></a>' +
//                    ' <div class="describe fr">' +
//                    ' <a href="#" class="gl-item-tit">' + items[i].ltit + '</a>' +
//                    ' <div class="gl-price">' + items[i].lprice + '</div>' +
//                    ' <a class="gl-btn not-sold fl" href="javascript:;">商品缺货</a>' +
//                    ' <a href="javascript:;" class="delete fr none"></a>' +
//                    ' </div> </div>' +
//                    '<div class="mask none"> <div class="mask-bg"></div> <div class="mask-cont"> <p>确定从订单列表移除该商品？</p>' +
//                    ' <div class="inquiry"> <a href="javascript:;" class="inquiry-btn yes-delete">确定</a><a href="javascript:;" class="inquiry-btn not-delete">取消</a>' +
//                    ' </div> </div> </div>';
//                $(".goods-list ul").append(lilist);
//            }
//
//        }
//        $(".more-btn").click(function(){
//            addFun();
//        });


        $.ajax({
            url:"js/data.json",
            dataType:"json",
            type:"get",
            success:function(items){
                var item_len = items.length;
                for (var i = 0, len = items.length; i < len; i++) {
                    var lilist = '';
                    lilist = '' + '<li class="clearfix">' +
                        '<a href="javascript:;" class="fl picture">' +
                        '<img src="' + items[i].lsrc + '" width="130" height="130"></a>' +
                        ' <div class="describe fr">' +
                        ' <a href="#" class="gl-item-tit">' + items[i].ltit + '</a>' +
                        ' <div class="gl-price">' + items[i].lprice + '</div>' +
                        ' <a class="gl-btn not-sold fl" href="javascript:;">商品缺货</a>' +
                        ' <a href="javascript:;" class="delete fr none"></a>' +
                        ' </div> </div>' +
                        '<div class="mask none"> <div class="mask-bg"></div> <div class="mask-cont"> <p>确定从订单列表移除该商品？</p>' +
                        ' <div class="inquiry"> <a href="javascript:;" class="inquiry-btn yes-delete">确定</a><a href="javascript:;" class="inquiry-btn not-delete">取消</a>' +
                        ' </div> </div> </div>';
                   $(".goods-list ul").append(lilist);
                }
            }
        })



    },




    //删除li
    deleteFun:function(){
        var _list_ul =  $(".goods-list ul");
        //hover li时出现删除图标

        _list_ul.delegate('li','mouseover',function(){
            $(this).find(".delete").show()
        });
        _list_ul.delegate('li','mouseout',function(){
            $(this).find(".delete").hide()
        });
        //点击删除图标出现遮罩层
        _list_ul.delegate(".delete","click",function(){
             $(this).parents().children(".mask").show();
        });
        //点击确定按钮删除当前li
        _list_ul.delegate(".yes-delete","click",function(){
            $(this).parents(".goods-list ul li").remove();
        });
        //点击取消按钮遮罩层消失
        _list_ul.delegate(".not-delete","click",function(){
            $(this).parents(".mask").hide();
        })
    },



    menuFun:function(){
        var items = [
            {'dt':'订单管理',
                'dd':[
                    {'dtit':'我的购买记录','dlink':'index.html'},
                    {'dtit':'返修/退换货申请','dlink':'index.html'},
                    {'dtit':'返修/退换货查询','dlink':'index.html'}
                ]
            },
            {'dt':'个人信息管理',
                'dd':[
                    {'dtit':'编辑个人信息','dlink':'index.html'},
                    {'dtit':'会籍管理','dlink':'index.html'},
                    {'dtit':'修改密码','dlink':'index.html'},
                    {'dtit':'返修/地址管理','dlink':'index.html'}
                ]
            },
            {'dt':'我的专区',
                'dd':[
                    {'dtit':'我的优惠券','dlink':'index.html'},
                    {'dtit':'常购清单','dlink':'index.html'},
                    {'dtit':'商品点评','dlink':'index.html'},
                    {'dtit':'购物咨询','dlink':'index.html'}
                ]
            },
            {'dt':'服务中心',
                'dd':[
                    {'dtit':'到货通知','dlink':'index.html'},
                    {'dtit':'降价通知','dlink':'index.html'},
                    {'dtit':'推广订阅','dlink':'index.html'},
                    {'dtit':'我的购物卡','dlink':'index.html'},
                    {'dtit':'好友推荐','dlink':'index.html'},
                    {'dtit':'山姆实体店','dlink':'index.html'}
                ]
            }
        ];


        var path = '../';
        for(var i= 0,len=items.length;i<len;i++){
            var list = items[i];
            var listHtml = ''+
                '<dl>'+
                ' <dt><i></i>'+list.dt+'</dt>';
            for(var j= 0,l=list.dd.length;j<l;j++){
                listHtml+='<dd><a href="'+path+''+''+list.dd[j].dlink+'">'+list.dd[j].dtit+'</a></dd>'
            }
            listHtml+='</dl>';
            $(".sidenav").append(listHtml);
        }


        $('.sidenav dl:eq(2) dd:eq(1)').addClass("curr");
    }


};
shopping_list.initFun();