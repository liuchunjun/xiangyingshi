$(function () {
    var top=0;
    top = getScrollTop();

    //固定nav栏
    if(top>400){
        $(".p_title").css('margin-top','0px')
    }

    //project
    if(top>521){
        $(".e_project ul li").css("margin-top",0)
    }

    //e_service
    if(top>1227){
        $(".e_service ul li").css("margin-top",0)
    }

    window.onscroll=function(){
        top=getScrollTop();
        // p_title
        if(top>400){
            $(".title").css('top','0px')
        }

        //project
        if(top>521){
            $(".e_project ul li").css("margin-top",0)
        }

        //e_service
        if(top>1227){
            $(".e_service ul li").css("margin-top",0)
        }

    }

});