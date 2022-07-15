const tabMenu = document.querySelectorAll('.js-tabmenu li'); 

const tabContnt = document.querySelectorAll('.js-tabcontent section'); 

tabContnt[0].classList.add('ativo');

function activeTab(index) {
  tabContnt.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContnt[index].classList.add('ativo'); 
};

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});