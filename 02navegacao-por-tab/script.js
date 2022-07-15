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

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt'); 
  const activeClass = 'ativo'; 
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass); 
    };

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  };
};

initAccordion();