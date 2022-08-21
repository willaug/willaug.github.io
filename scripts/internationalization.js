const language = _getBrowserLanguage();

function _getBrowserLanguage() {
  const acceptedPrefixes = ['pt', 'en'];

  const { language } = navigator;
  const [langPrefix] = language.split('-');
  if (acceptedPrefixes.includes(langPrefix)) {
    return langPrefix;
  }

  return 'en';
}

function _translateDocument() {
  document.documentElement.setAttribute('lang', language === 'pt' ? 'pt-BR' : 'en-US');
  document.title = eval(`${language.toUpperCase()}_INTERNATIONALIZATION.TITLE`);
}

function _setTranslation() {
  const elementsWithTranslateAttr = document.querySelectorAll('[data-translate]');
  for (const element of elementsWithTranslateAttr) {
    const translateAttrValue = element.getAttribute('data-translate');

    element.innerHTML = eval(
      `${language.toUpperCase()}_INTERNATIONALIZATION.${translateAttrValue}`
    );

  }
}

(() => {
  _setTranslation();
  _translateDocument();
})();