$(document).ready(function(){
    // 검색창클릭
    $(".search").click(function(event) {
        event.stopPropagation();
        $(".hidden_search").show();
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.hidden_search').length && !$(event.target).closest('.search').length) {
            $(".hidden_search").hide();
        }
    });
    // 플로팅클릭
    $(".floating").click(function(){
        $(".open_floating").show(); 
    });
    $(".cls_menu").click(function(){
        $(".open_floating").hide(); 
    });

    var topBtn = $("#topBtn");
    topBtn.click(function(){
        $('html, body').animate({scrollTop: 0}, 600)
    });

    // 메뉴클릭
    let isVisible = false; // 요소의 가시성 상태를 추적

    $('.header_menu').click(function() {
        if (!isVisible) {
            $('.menu_click').css({ right: '-425px' }).show().animate({ right: '0' }, 800);
            isVisible = true; // 상태 변경
        }
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.menu_click').length && !$(event.target).closest('.header_menu').length) {
            $(".menu_click").hide();
        }
    });

    $('.cls_menu').click(function(event) {
        event.stopPropagation();
        if (!isVisible) {
            $('.menu_click').animate({ right: '-425px' }, 800, function() {
                $(this).hide(); // 애니메이션이 끝난 후 숨김
            });
            isVisible = false; // 상태 변경
        } 
    });
    // 모든제품 클릭
    $(".allproduct").click(function(){
        $(".all_menu").show(); 
    });
    $(".cls_allmenu").click(function(){
        $(".all_menu").hide(); 
    });
    $(".cls_allmenu").click(function(){
        $(".menu_click").show(); 
    });
    $(".cls_menu_all").click(function(){
        $(".all_menu").hide(); 
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.all_menu').length && !$(event.target).closest('.allproduct').length) {
            $(".all_menu").hide();
        }
    });
    // 공간별 쇼핑 클릭
    $(".placeopen").click(function(){
        $(".place_shop").show(); 
    });
    $(".cls_placemenu").click(function(){
        $(".place_shop").hide(); 
    });
    $(".cls_placemenu").click(function(){
        $(".menu_click").show(); 
    });
    $("#cls_placeall").click(function(){
        $(".place_shop").hide(); 
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.place_shop').length && !$(event.target).closest('.placeopen').length) {
            $(".place_shop").hide();
        }
    });
    // $(document).click(function(event) {
    //     if (!$(event.target).closest('.place_shop').length && !$(event.target).closest('.cls_placemenu').length) {
    //         $(".place_shop").hide();
    //     }
    // });
    // 특별한가격 클릭
    $(".specialopen").click(function(){
        $(".special").show(); 
    });
    $(".cls_placemenu").click(function(){
        $(".special").hide(); 
    });
    $(".cls_placemenu").click(function(){
        $(".menu_click").show(); 
    });
    $(".cls_menu_all").click(function(){
        $(".special").hide(); 
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.special').length && !$(event.target).closest('.specialopen').length) {
            $(".special").hide();
        }
    });
    // 새로운소식 클릭
    $(".newsopen").click(function(){
        $(".news").show(); 
    });
    $(".cls_placemenu").click(function(){
        $(".news").hide(); 
    });
    $(".cls_placemenu").click(function(){
        $(".menu_click").show(); 
    });
    $(".cls_menu_all").click(function(){
        $(".news").hide(); 
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.news').length && !$(event.target).closest('.newsopen').length) {
            $(".news").hide();
        }
    });
    // 아이디어 클릭
    $(".ideaopen").click(function(){
        $(".idea").show(); 
    });
    $(".cls_placemenu").click(function(){
        $(".idea").hide(); 
    });
    $(".cls_placemenu").click(function(){
        $(".menu_click").show(); 
    });
    $(".cls_menu_all").click(function(){
        $(".menu_click").hide(); 
        $(".idea").hide(); 
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.idea').length && !$(event.target).closest('.ideaopen').length) {
            $(".idea").hide();
        }
    });
    // 셀프 플래닝 클릭
    $(".slefplanopen").click(function(){
        $(".selfplan").show(); 
    });
    $(".cls_placemenu").click(function(){
        $(".selfplan").hide(); 
    });
    $(".cls_placemenu").click(function(){
        $(".menu_click").show(); 
    });
    $('.cls_menu_all').click(function(){
        $('.selfplan').hide(); 
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.selfplan').length && !$(event.target).closest('.slefplanopen').length) {
            $(".selfplan").hide();
        }
    });
    // 우편번호입력 클릭
    $('.post_code').click(function() {
        if (!isVisible) {
            $('.post_click').css({ right: '-425px' }).show().animate({ right: '0' }, 800);
            isVisible = true; // 상태 변경
        }
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.post_click').length && !$(event.target).closest('.post_code').length) {
            $(".post_click").hide();
            isVisible = false;
        }
    });

    $('.cls_postmenu').click(function() {
        if (!isVisible) {
            $('.post_click').animate({ right: '-425px' }, 800, function() {
                $(this).hide(); // 애니메이션이 끝난 후 숨김
            });
            isVisible = false; // 상태 변경
        }
    });
    // 매장선택 클릭
    $('.store_choice').click(function() {
        if (!isVisible) {
            $('.store_click').css({ right: '-425px' }).show().animate({ right: '0' }, 800);
            isVisible = true; // 상태 변경
        }
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.store_click').length && !$(event.target).closest('.store_choice').length) {
            $(".store_click").hide();
            isVisible = false;
        }
    });

    $('.cls_storemenu').click(function() {
        if (!isVisible) {
            $('.store_click').animate({ right: '-425px' }, 800, function() {
                $(this).hide(); // 애니메이션이 끝난 후 숨김
            });
            isVisible = false; // 상태 변경
        }
    });
    // 로그인하기 클릭
    $('.login').click(function() {
        if (!isVisible) {
            $('.login_click').css({ right: '-425px' }).show().animate({ right: '0' }, 800);
            isVisible = true; // 상태 변경
        }
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.login_click').length && !$(event.target).closest('.login').length) {
            $(".login_click").hide();
        } else {}
    });

    $('.cls_loginmenu').click(function() {
        if (!isVisible) {
            $('.login_click').animate({ right: '-425px' }, 800, function() {
                $(this).hide(); // 애니메이션이 끝난 후 숨김
            });
            isVisible = false; // 상태 변경
        }
    });
    // 장바구니 클릭
    
    $('.local_mall').click(function() {
        if (!isVisible) {
            $('.local_mall_click').css({ right: '-425px' }).show().animate({ right: '0' }, 800);
            isVisible = true; // 상태 변경
        }
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.local_mall_click').length && !$(event.target).closest('.local_mall').length) {
            $(".local_mall_click").hide();
        } else {}
    });

    $('.cls_localmenu').click(function() {
        if (!isVisible) {
            $('.local_mall_click').animate({ right: '-425px' }, 800, function() {
                $(this).hide(); // 애니메이션이 끝난 후 숨김
            });
            isVisible = false; // 상태 변경
        }
    });

    // 똥그라미 색상변경 
    $('#next').click(function() {
        $('#oneHr').css({
            'background-color': '#c9c9c9',
            'border': '2px solid #c9c9c9'
        });
        $('#twoHr').css({
            'background-color': '#0058ab',
            'border': '2px solid #0058ab'
        }); // 원하는 색상으로 변경
    });
    $('#prev').click(function() {
        $('#oneHr').css({
            'background-color': '#0058ab',
            'border': '2px solid #0058ab'
        });
        $('#twoHr').css({
            'background-color': '#c9c9c9',
            'border': '2px solid #c9c9c9'
        }); // 원하는 색상으로 변경
    });
    
    // 채팅 체크 클릭
    $('.check_btn').click(function() {
        const isChecked = $(this).data('checked'); // 현재 상태 확인

        if (!isChecked) {
            // 클릭한 버튼 색상 변경
            $(this).css('background-color', '#0058ab'); // 클릭한 버튼 색상 변경

            // 다른 버튼 색상 변경
            $('.other_btn').css({
                'background-color': 'black',
                'color': 'white'
            }); // 다른 버튼 색상 변경

            $(this).data('checked', true); // 상태 변경
        } else {
            // 원래 색상으로 되돌리기
            $(this).css('background-color', 'initial'); // 클릭한 버튼 원래 색상
            $('.other_btn').css({
                'background-color': '#e1e1e1', // 다른 버튼 원래 색상
                'color': 'black' // 다른 버튼 원래 글자 색상
            });

            $(this).data('checked', false); // 상태 변경
        }
    });
    // top버튼 스크롤
    window.addEventListener('scroll', function() {
        const button = document.getElementById('topBtn');
        if (window.scrollY > 100) { // 스크롤이 100px 이상일 때
            button.classList.add('floating_top'); // 버튼 보이기
        } else {
            button.classList.remove('floating_top'); // 버튼 숨기기
        }
    });
    // 메인 슬라이드 
    const slideList = document.getElementById('slide-list');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    let currentPosition = 0; // 현재 위치

    slideList.addEventListener('mouseenter', () => {
        if (currentPosition === 0) {
            nextButton.classList.remove('hidden'); // next 버튼 표시
        }
        console.log();
    });

    slideList.addEventListener('mouseleave', () => {
        nextButton.classList.add('hidden'); // 마우스가 나가면 next 버튼 숨김
    });

    nextButton.addEventListener('click', () => {
        currentPosition -= 1920; // 1920px 우로 이동
        slideList.style.transform = `translateX(${currentPosition}px)`; // 이동 적용
        nextButton.classList.add('hidden'); // next 버튼 숨김
        prevButton.classList.remove('hidden'); // prev 버튼 표시
    });

    prevButton.addEventListener('click', () => {
        currentPosition += 1920; // 1920px 좌로 이동 (원래 위치로)
        slideList.style.transform = `translateX(${currentPosition}px)`; // 이동 적용
        prevButton.classList.add('hidden'); // prev 버튼 숨김
        nextButton.classList.remove('hidden'); // next 버튼 표시
    });
});