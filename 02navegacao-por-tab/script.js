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

function initScrollSuave() { 
  const linksInternos = document.querySelectorAll('.js-menu a[herf^="#"]');

  function scrollToSection(event) {
    event.preventDefault(); 
    const href = event.currentTarget.getAttribute('href'); 
    const section = document.querySelector(href); 
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
    // Forma alternativa  
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //  behavior: 'smooth',
    // });
    

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}; 
initScrollSuave();

const section = document.querySelectorAll('.js-scroll'); 

function animaisScroll() {
  section.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop <0) {
      section.classList.add('ativo');
    };
  });
};

window.addEventListener('scroll', animaisScroll);