function btnSearch(window, document){
  let form = document.querySelector('.form__btnSearch');
  form.addEventListener('mouseover', function(e){
    if(!e.target.matches('.form > fieldset > button')) {
      return;
    }
    console.log(e.target);
    const btn = e.target.previousSibling.previousSibling; 
    console.log(e.target.previousSibling.previousSibling);
    e.target.previousSibling.previousSibling.classList.toggle('isSearch')
  })
}
btnSearch(window,document);


function tabMove( document){
  'use strict'
  const $nav = document.getElementById('nav__menu');
  console.log($nav);
  //isAct 추가
  $nav.onmouseover =(e) => {
    if(!e.target.matches('.nav__menu > li > a')) {
      return;
    }
    console.log(e.target);
    const subM =e.target.nextElementSibling; /*<- ul : nav__subMenu  */
    e.target.nextElementSibling.classList.toggle('isAct');
    // test.classList.add('isAct');
    // isAct 제거a
    $nav.onmouseout =(e) => {
      if(!e.target.matches('.nav__menu > li > a ')) {
        return;
      }
      e.target.nextElementSibling.classList.toggle('isAct');
    }
    subM.onmouseover = e =>{
      subM.classList.toggle('isAct')
      subM.onmouseout = e => {
        subM.classList.toggle('isAct')
      }
    }
  } 
}
tabMove(document); 
 