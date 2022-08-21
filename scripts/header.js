function toggleHeaderList() {
  const headerListElement = document.querySelector('.header__list');
  const headerListIsOpened = !!document.querySelector('.header__list--opened');

  if (headerListIsOpened) {
    removeOpenedClassFromHeaderList();
    return;
  };
  
  headerListElement.classList.add('header__list--opened');
}

function removeOpenedClassFromHeaderList() {
  const headerListElement = document.querySelector('.header__list');
  headerListElement.classList.remove('header__list--opened');  
}
