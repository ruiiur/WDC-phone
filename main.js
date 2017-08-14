/**
 * Created by Administrator on 2017/8/11.
 */
$(function(){
    //全部品类点击切换折叠菜单
    $('.esp').click(function(){
       $('.category-list').slideToggle(100);
        $(this).children('i').toggleClass('change-bg');
        $('.box').toggleClass('show');
    });

    //导航切换
    $('.nav ul li:not(".esp")').click(function(){
        $(this).attr("class","active").siblings("li:not('.esp')").attr("class","");
        $(".stores").children('ul').eq($(this).index()).show().siblings("ul").hide();
    });

    //搜索门店
    $('.search-btn').click(function(){
        $('.search').slideToggle(200);
        $('.box').addClass('show',300);
    });

    //取消搜索门店
    $('.cancel').click(function(){
        //animate执行完一个动画再执行另一个函数
        // $('.search').animate({left:"100%"},300,function(){
        //     $('.search').css({display:"none"});
        // });
        $('.search').slideToggle(200);
        $('.box').removeClass('show');
    });

    //显示或收缩活动
    $.each($('.stores-list li'),function(index,params) {
        var oldHeight = $('.stores-list li:eq(' + index + ')').find('.activity').children('ul').height();
        console.log($('.activity ul li').get(0).offsetHeight);
        if ($('.stores-list li:eq(' + index + ')').find('.activity').children('ul').height() >= $('.activity ul li').get(0).offsetHeight * 2) {
            var flag=true;
            $('.stores-list li:eq(' + index + ')').find('.activity').children('ul').siblings(".all-activity").show();
            $('.stores-list li:eq(' + index + ')').find('.activity').children('ul').height($('.activity ul li').get(0).offsetHeight * 2);
            $('.stores-list li:eq(' + index + ')').find('.activity').children('ul').siblings(".all-activity").click(function () {
                if(flag==true){
                    $(this).siblings('ul').animate({height: oldHeight});
                    $(this).children('i').toggleClass('change-bg');
                    flag=!flag;
                }
                else{
                    $(this).siblings('ul').animate({height: $('.activity ul li').get(0).offsetHeight * 2});
                    $(this).children('i').toggleClass('change-bg');
                    flag=!flag;
                }
            })
        }
        else{
            $('.stores-list li:eq(' + index + ')').find('.activity').children('ul').siblings(".all-activity").hide();
        }
    })
});
