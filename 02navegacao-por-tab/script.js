const tabMenu = document.querySelectorAll('.js-tabmenu li'); 

const tabContnt = document.querySelectorAll('.js-tabcontent section'); 

function activeTab(index) {
  tabContnt.forEach((section) => {
    section.classList.remove('ativo');
  })
  tabContnt[index].classList.add('ativo'); 
};