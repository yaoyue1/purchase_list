$(function(){
    var items = [
            {'lsrc':'http://img.la/nocache/jpg/lightblue/130x130',
             'ltit':'和式照烧烤大虾和式照烧烤大和式照烧烤大虾和式照烧烤大',
             'lprice':'&yen;181.00',
             'ltype':'a'
            },

            {'lsrc':'http://img.la/nocache/jpg/lightblue/130x130',
             'ltit':'和式照烧烤大虾和式照烧烤大和式照烧烤大虾和式照烧烤大',
             'lprice':'&yen;182.00',
             'ltype':'b'
            },

            {'lsrc':'http://img.la/nocache/jpg/lightblue/130x130',
             'ltit':'和式照烧烤大虾和式照烧烤大和式照烧烤大虾和式照烧烤大',
             'lprice':'&yen;183.00',
             'ltype':'c'
            }
    ];


    var lilist = '';
    for(var i= 0,len=items.length;i<len;i++){
        lilist = ''+'<li class="clearfix">'+
            '<a href="javascript:;" class="fl picture">'+
            '<img src="'+items[i].lsrc+'" width="130" height="130"></a>'+
            ' <div class="describe fr">'+
            ' <a href="#" class="gl-item-tit">'+items[i].ltit+'</a>'+
            ' <div class="gl-price">'+items[i].lprice+'</div>'+
            ' <a class="gl-btn not-sold fl" href="javascript:;">商品缺货</a>'+
            ' <a href="javascript:;" class="delete fr none"></a>'+
            ' </div> </div>'+
            '<div class="mask none"> <div class="mask-bg"></div> <div class="mask-cont"> <p>确定从订单列表移除该商品？</p>' +
            ' <div class="inquiry"> <a href="javascript:;" class="inquiry-btn yes-delete">确定</a><a href="javascript:;" class="inquiry-btn not-delete">取消</a>'+
            ' </div> </div> </div>';

//        $(".goods-list ul").append(lilist);
//        switch(items[i].ltype){
//            case a:
//        }









    }



});



//
//    var lilist = '';
//    for(var i= 0,len=items.length;i<len;i++){
//        for(var j= 0,l=items[i].length;j<l;j++){
//            alert(items[0].length);

//            lilist = ''+'<li class="clearfix">'+
//                '<a href="javascript:;" class="fl picture">'+
//                '<img src="'+items[i][j].lsrc+'" width="130" height="130"></a>'+
//                ' <div class="describe fr">'+
//                    ' <a href="#" class="gl-item-tit">'+items[i][j].ltit+'</a>'+
//                    ' <div class="gl-price">'+items[i][j].lprice+'</div>'+
//                    ' <div class="control-btn clearfix">'+
//                         '<a class="gl-btn '+items[i][j].libtnclass+' fl" href="javascript:;">'+items[i][j].lbtnname+'</a>'