$(function(){
    $(".tabs span").click(function(){
      var index = $(this).index();
      $(".tabs span").removeClass("triangle").eq(index).addClass("triangle");
      $(".types-item>div.tabDetail").removeClass("show").addClass("none");
      $(".types-item>div.tabDetail").eq(index).removeClass("none");
    })
    $('.carousel').carousel({
      interval: 2000
    })
  })