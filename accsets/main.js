
// const elmHeader=document.querySelector('header')
const elmNav=document.querySelector('nav')
//  hàm tạo hiệu ứng cho header khi cuộn trang : scroll on page
function headerEffect(){

  window.onscroll =function(){
 if(window.pageYOffset>=80){
  elmNav.classList.add('header-fixed')
  $('.nav__icon-bars').css('margin-right','22px')
 }else{
  elmNav.classList.remove('header-fixed')
  $('.nav__icon-bars').css('margin-right','0')
 }
  }
  
}
headerEffect()


function showMenuBars(){
    $('.nav__icon-bars').click(function(){
        // $('.nav__mobile-menu').css('display','block')
        $('.nav__mobile-menu-content').css('right','0px')
            
    })
}
showMenuBars();
function hideMenuBars(){
    $('.nav__mobile-Title>p').click(function(){
        $('.nav__mobile-menu-content').css('right','-300px')
        // $('.nav__mobile-menu').css('opacity','0')
    })
}
hideMenuBars()

