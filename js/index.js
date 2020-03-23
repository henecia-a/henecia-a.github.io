$(function () {
  $('.clearfix li').click(function($event){
    var index=$(".clearfix li").index($(this));
    sessionStorage.liIndex = index;
  })
  // 图标菜单滚动效果
  var swiper = new Swiper(".swiper-menuimg", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".imgmenu-next",
      prevEl: ".imgmenu-prev"
    }
  });

  $("#showSidebarConten").click(function () {
    $("#sidebarContent").show().animate({
      left: '0px'
    }, 'slow').animate({
      left: '0%'
    }, "slow");
  });
  $("#hideSidebarConten").click(function () {
    $("#sidebarContent").animate({
      left: '0%'
    }, 'fast').animate({
      left: '100%'
    }, "slow", function () {
      $("#sidebarContent").hide();
    });
  });

  // tab向下箭头菜单切换效果
  $(".commonMenuListTitle div").click(function () {
    var ind = $(this).index();
    $(".commonMenuListTitle div").removeClass("commonMenuListTitleActive");
    $(this).addClass("commonMenuListTitleActive");
    $(".commonMenuList .commonMenuListHref")
      .eq(ind)
      .css({
        display: "inline-block",
        width: "100%"
      })
      .siblings(".commonMenuListHref")
      .css({
        display: "none"
      });
  });
  $(".wrapper").navbarscroll();

  // banner
  var swiper1 = new Swiper(".banner", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".banner-next",
      prevEl: ".banner-prev"
    }
  });
  $(".tabs span").click(function () {
    var index = $(this).index();
    $(".tabs span").removeClass("triangle").eq(index).addClass("triangle");
    $(".types-item>div.tabDetail").removeClass("show").addClass("none");
    $(".types-item>div.tabDetail").eq(index).removeClass("none");
  });
  $(".carousel").carousel({
    interval: 2000
  });
  // 在施项目查看更多的按钮事件
  $("#loadingProjectBtn1").click(function () { //家装别墅
    console.log('在施项目页家装别墅查看更多按钮事件');
  });
  $("#loadingProjectBtn2").click(function () { //工装
    console.log('在施项目页工装查看更多按钮事件');
  });
  // 施工材料页查看更多的按钮事件
  $("#constructionMaterialBtn").click(function () {
    console.log('施工材料页查看更多按钮事件')
  });
  // 品质管理页查看更多的按钮事件
  $("#qualityManagementBtn").click(function () {
    console.log('品质管理页查看更多按钮事件')
  });
  // 服务体系页预约设计师按钮点击事件
  $("#serviceSystemBtn").click(function () {
    console.log('服务体系页预约设计师按钮');
  });
  // 家庭软装页按钮点击事件
  $("#familySoftWearBtn1").click(function () {
    console.log('未出效果图按钮')
  });
  $("#familySoftWearBtn2").click(function () {
    console.log('软装案例查看更多按钮')
  });
  $("#familySoftWearBtn3").click(function () {
    console.log('软装设计师查看更多按钮')
  });
  // 加入我们页加入我们按钮
  $("#joinUsBtn").click(function () {
    console.log('加入我们')
  });
  
});