// header script
$('.main-menu>li, .sub-menu').mouseenter(function(){
    $('.sub-menu').stop().slideDown(200);
});
$('.main-menu, .sub-menu').mouseleave(function(){
    $('.sub-menu').stop().slideUp(200);
});

// slider script
setInterval(moveSlider, 3000);

let cnt = 1;
function moveSlider(){
    if(cnt >= $('.slide').length){
        cnt = 1;
        $('.slide').animate({
            top: '-=600px',
        },500);
    }else{
        cnt++;
        $('.slide').animate({
            top: '+=300px',
        },500);
    }
}

// notice-gallery script
$('.notice .sub-tit').click(function(){
    $('.gallery .sub-tit').removeClass('tit-on');
    $('.notice .sub-tit').addClass('tit-on');
    $('.gallery .sub-txt').css('display','none');
    $('.notice .sub-txt').css('display','block');
});

$('.gallery .sub-tit').click(function(){
    $('.notice .sub-tit').removeClass('tit-on');
    $('.gallery .sub-tit').addClass('tit-on');
    $('.notice .sub-txt').css('display','none');
    $('.gallery .sub-txt').css('display','grid');
});

// modal-popup script
let ntcTit = $('.notice-txt a');
for(let idx=0; idx<ntcTit.length; idx++){
    ntcTit.eq(idx).load('http://pam7461.dothome.co.kr/report06-main/notice.txt #txt0'+(idx+1));
}

let clickTit = $('.notice-txt li:nth-child(2)');
clickTit.click(function(event){
    let txtCon = $(this).parent('.notice-txt').children('li').children('a').text();
    $('.popup01 h2').text(txtCon);
    $('.popup01').show(0);
    event.preventDefault();
});

let clickImg = $('.gallery-list img').click(function(event){
    let imgSrc = $(this).attr('src');
    let imgTit = $(this).attr('alt');


    $('.popup02 .modal-tit').text(imgTit);
    $('.popup02 img').attr('src',imgSrc);
    $('.popup02').show(0);
    event.preventDefault();
});

$('.modal-btn button').click(function(){
    $('.modal-popup').hide(0);
});