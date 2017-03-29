$( document ).ready(function($) {
  $.reject({
    reject: {
      msie: 6,
      msie: 7,
      msie: 8,
      msie: 9,
      safari: 5
    },
    imagePath: 'img/browsers/',
    display: [ 'chrome','firefox','safari','opera' ],
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
    closeCookie: true,
  });
  return false;  
});  