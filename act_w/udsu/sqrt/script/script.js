function square() {
  button.innerHTML = ' ... ';

  var a = document.square_root.number_a.value,
      b = document.square_root.number_b.value,
      c = document.square_root.number_c.value,
      answer = document.getElementById("answer");
      
    //d - дискриминант
  var d = Math.pow(b,2) - 4 * a * c;

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'square', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) {

      if ( d > 0 ) {
        html = "<p>Положительный дискриминант<br>a = " + a + "; b = " + b + "; c = " + c + ";<br>";
        html += "D = " + (Math.pow(b,2) - 4 * a * c) + ';<br>'; 
        html += "x<sub><small>1</small></sub> = (";
        html += ((- b + Math.sqrt( d ))/ ( 2 * a )).toFixed(1);
        html += "),<br> x<sub><small>2</small></sub> = (";
        html += ((- b - Math.sqrt( d )) / ( 2 * a )).toFixed(1);
        html += ").</p>";
        setTimeout(function() {
          button.innerHTML = ' run ';
        }, 2000);
      } else {

        if (d == 0){
          html = "<p>Дискриминант равен нулю<br>a = " + a + "; b = " + b + "; c = " + c + ";<br>";
          html += "D = " + (Math.pow(b,2) - 4 * a * c) + ';<br>'; 
          html += "x<sub><small>1</small></sub> = (";
          html += ((- b + Math.sqrt( d ))/ ( 2 * a )).toFixed(1);
          html += "),<br> x<sub><small>2</small></sub> = (";
          html += ((- b - Math.sqrt( d )) / ( 2 * a )).toFixed(1);
          html += ").</p>";
          setTimeout(function() {
            button.innerHTML = ' run ';
          }, 2000);
        } else {
          html = "<p>Отрицательный дискриминант<br>a = " + a + "; b = " + b + "; c = " + c + ";<br>";
          html += "D = " + (Math.pow(b,2) - 4 * a * c) + ';<br>'; 
          html +=  "Корней нет";
          html += ".<p/>";
          setTimeout(function() {
            button.innerHTML = ' run ';
          }, 2000);
        }
      }
      answer.innerHTML = html;
      answer.style.display = 'block';

    };

    if (xhr.status != 200) {
      // обработать ошибку
      alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      return;
    }

    // обработать результат
    button.innerHTML = xhr.responseText;
  }

  xhr.send(null);

}