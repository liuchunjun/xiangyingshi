
function getScrollTop()
{
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop)
    {
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body)
    {
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
$(function () {
    let top1=0;
    top1 = getScrollTop();
    console.log(top1);

    $(window).scroll(function () {
        top1=getScrollTop();
        console.log(top1);
        //吸顶灯
        if(top1>100){
            $('.nav').css({'position':'fixed',
                'top':0,
                'height':'58px',
                'line-height':'58px',
                'border-bottom':'1px solid gray',
                'z-index':999,
                'background':'#fff'
            });
            $('.n_bar').css({'height':'58px',
                'line-height':'58px',
                'top':'0px'});
            $(".n_logo a img").css("display",'none');
        }else{
            $('.nav').css({'position':'relative',
                'top':0,
                'height':'110px',
                'border-bottom':'none'
            });
            $('.n_bar').css({'height':'58px',
                'line-height':'58px',
                'top':'22px'});
            $(".n_logo a img").css("display",'block')
        }
    })
    //顶部隐藏的nav
    $('.m_title').click(function () {
        if($(".m_ulist")[0].style.opacity>0){
            $(".menu").css('overflow','hidden');
            $(".m_ulist").animate({
                top:50,
                opacity:0,
                zIndex:0
            },500)
        }else{
            $(".menu").css('overflow','visible');
            $(".m_ulist").animate({
                top:40,
                opacity:1,
                zIndex:999
            },500)
        }
    });
    //固定nav栏
    if(top1>400){
        $(".p_title").css('margin-top','0px')
    }

    //吸顶灯
    if(top1>100){
        $('.nav').css({'position':'fixed',
            'top':0,
            'height':'58px',
            'line-height':'58px',
            'border-bottom':'1px solid gray',
            'background':'#fff'
        });
        $('.n_bar').css({'height':'58px',
            'line-height':'58px',
            'top':'0px'});
        $(".n_logo a img").css("display",'none');
    }else{
        $('.nav').css({'position':'relative',
            'top':0,
            'height':'110px',
            'border-bottom':'none'
        });
        $('.n_bar').css({'height':'58px',
            'line-height':'58px',
            'top':'22px'});
        $(".n_logo a img").css("display",'block')
    }

    //公共title
    $('.menu_hide_title').click(function () {
        if($(".ulist")[0].style.opacity>0){
            $(".ulist").animate({
                top:55,
                opacity:0,
                zIndex:0
            },500,function () {
                $(".cnt_menu").css('overflow','hidden');
            })
        }else{
            $(".cnt_menu").css('overflow','visible');
            $(".ulist").animate({
                top:45,
                opacity:1,
                zIndex:999
            },500)
        }
    });


});