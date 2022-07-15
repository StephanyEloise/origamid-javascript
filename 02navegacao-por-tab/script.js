function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li'); 

  const tabContnt = document.querySelectorAll('.js-tabcontent section'); 

  if(tabMenu.length && tabContnt.length) {
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
  };
};
initTabNav();

const accordionList = document.querySelectorAll('.js-accordion dt'); 

function activeAccordion() {
  this.classList.add.('ativo');
  this.nextElementSibling.classList.add('ativo'); 
};

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});