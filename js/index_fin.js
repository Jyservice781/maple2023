$(function(){

    //함수 만들어 주기 
    //변수방 만들어서 클릭한 애의 순서 index값 구하기 
    //구해서 on클래스 붙였다가 떼주기 

    $('.btn_list li').on('click', function(){

        // on 클래스 다 없애주기 
        //클릭한 애만 on클래스 주기


        //var i = $(this).index();
        var i = $(this).index();


        $('.ch li').removeClass('on');
        $('.ch li').eq(i).addClass('on');


        //캐릭터 애니메이션
        $('.title li').removeClass('on');
        $('.title li').eq(i).addClass('on');


        //버튼 애니메이션
        $('.btn_list li').removeClass('on');
        $('.btn_list li').eq(i).addClass('on');

        
        //$('.ch li').removeClass('on');



        //버튼 누르면 비디오 재생 되었으면 좋겠습니다
        $('section video').removeClass('on');
        $('section video').eq(i).addClass('on');



        $('.value li').removeClass('on');
        $('.value li').eq(i).addClass('on');

        $('.value').removeClass('on');
        $('.value').eq(i).addClass('on');


    });//click





    $('.start_btn p').on('click', function(){

        $('section video').removeClass('on');


    });//click






});//doc