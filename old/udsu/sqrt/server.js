var http = require('http'),
    url = require('url'),
    querystring = require('querystring'),
    static = require('node-static'),
    file = new static.Server('.');

function accept(req, res) {

  if (req.url == '/square') {
    setTimeout(function() {
      res.end('Ответ ниже');
    }, 500);
  } else {
    // иначе считаем это запросом к обычному файлу и выводим его
    file.serve(req, res); // (если он есть)
  }

}


// ------ этот код запускает веб-сервер -------

if (!module.parent) {
  http.createServer(accept).listen(1303);
  console.log('Сервер запушен по адресу localhost:1303');
} else {
  exports.accept = accept;
}