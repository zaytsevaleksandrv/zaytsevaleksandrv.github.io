<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Raleway:300,300italic,500,400,700' rel='stylesheet' type='text/css'>
    <title>Zoooo - Качественные товары для ваших питомцев по выгодным ценам</title>
</head>

<body>
    <!--navbar-->
    <nav role="navigation" class="navbar_fixed navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <!-- Collection of nav links and other content for toggling -->
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown"><a href="#" data-toggle="dropdown" class="navbar_fixed_text dropdown-toggle">Продукция
                        <span class="caret"></span>
                      </a>
                        <ul class="dropdown-menu drop_prod ">
                            <li><a class="navbar_fixed_text_drop" href="#">Для кошек</a></li>
                            <li><a class="navbar_fixed_text_drop" href="#">Для собак</a></li>
                            <li><a class="navbar_fixed_text_drop" href="#">Для рыб</a></li>
                            <li><a class="navbar_fixed_text_drop" href="#">Для птиц</a></li>
                            <li><a class="navbar_fixed_text_drop" href="#">Для грызунов</a></li>
                            <li><a class="navbar_fixed_text_drop" href="#">Для хорьков</a></li>
                            <li><a class="navbar_fixed_text_drop" href="#">Для рептилий</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="navbar_fixed_text">о нас</a></li>
                    <li><a href="#about" class="navbar_fixed_text">акции</a></li>
                    <li><a href="#contact" class="navbar_fixed_text">контакты</a></li>
                    <li><a href="#contact" class="navbar_fixed_text">доставка</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">

                    <li><a href="#" type="button" data-toggle="modal" data-target="#myModal" class="navbar_fixed_text_in ">Войти</a></li>
                    <div id="myModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button class="close" type="button" data-dismiss="modal">×</button>
                                    <h4 class="modal-title navbar_fixed_text">Вход</h4>
                                </div>
                                <div class="modal-body">
                                    <form class="form-horizontal" role="form">
                                        <div class="form-group">
                                            <label for="inputEmail3" class="col-sm-2 control-label" style="padding-right:10px">Email</label>
                                            <div class="col-sm-10">
                                                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPassword3" class="col-sm-2 control-label" style="padding-right:10px">Пароль</label>
                                            <div class="col-sm-10">
                                                <input type="password" class="form-control" id="inputPassword3" placeholder="Пароль">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <div class="checkbox">
                                                    <label>
                                                        <input type="checkbox"> Запомнить меня
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <button type="submit" class="btn btn-primary">Войти</button>


                                                <button type="button" data-toggle="modal" data-target="#myModalreg" class="btn btn-default">Зарегистрироваться</button>

                                    </form>
                                    </div>
                                    </div>
                                </div>
                            </div>


                </ul>
                <div id="myModalreg" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button class="close" type="button" data-dismiss="modal">×</button>
                                <h2>Регистрация</h2>
                                <hr>
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="lastName">Фамилия:</label>
                                        <div class="col-xs-9">
                                            <input type="text" class="form-control" id="lastName" placeholder="Введите фамилию">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="firstName">Имя:</label>
                                        <div class="col-xs-9">
                                            <input type="text" class="form-control" id="firstName" placeholder="Введите имя">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="fatherName">Отчество:</label>
                                        <div class="col-xs-9">
                                            <input type="text" class="form-control" id="fatherName" placeholder="Введите отчество">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Дата рождения:</label>
                                        <div class="col-xs-3">
                                            <select class="form-control">
                                                <option>Дата</option>
                                            </select>
                                        </div>
                                        <div class="col-xs-3">
                                            <select class="form-control">
                                                <option>Месяц</option>
                                            </select>
                                        </div>
                                        <div class="col-xs-3">
                                            <select class="form-control">
                                                <option>Год</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="inputEmail">Email:</label>
                                        <div class="col-xs-9">
                                            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="inputPassword">Пароль:</label>
                                        <div class="col-xs-9">
                                            <input type="password" class="form-control" id="inputPassword" placeholder="Введите пароль">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="confirmPassword">Подтвердите пароль:</label>
                                        <div class="col-xs-9">
                                            <input type="password" class="form-control" id="confirmPassword" placeholder="Введите пароль ещё раз">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="phoneNumber">Телефон:</label>
                                        <div class="col-xs-9">
                                            <input type="tel" class="form-control" id="phoneNumber" placeholder="Введите номер телефона">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3" for="postalAddress">Адрес:</label>
                                        <div class="col-xs-9">
                                            <textarea rows="3" class="form-control" id="postalAddress" placeholder="Введите адрес"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-xs-3">Пол:</label>
                                        <div class="col-xs-2">
                                            <label class="radio-inline">
                                                <input type="radio" name="genderRadios" value="male"> Мужской
                                            </label>
                                        </div>
                                        <div class="col-xs-2">
                                            <label class="radio-inline">
                                                <input type="radio" name="genderRadios" value="female"> Женский
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-xs-offset-3 col-xs-9">
                                            <label class="checkbox-inline">
                                                <input type="checkbox" value="agree"> Я согласен с <a href="#">условиями</a>.
                                            </label>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <div class="col-xs-offset-3 col-xs-9">
                                            <input type="submit" class="btn btn-primary" value="Регистрация">
                                            <input type="reset" class="btn btn-default" value="Очистить форму">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="navbar-form navbar-right" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Введите запрос...">
                    </div>
                    <button type="submit" class="btn btn-default">Найти</button>
                </form>
                </div>
                </div>
    </nav>

    <!--container 1 header>-->
    <div class="container-fluid head_bac">
        <br>
        <br>
        <br>
        <div class="row" style="padding-right: 15px; padding-left: 15px;">
            <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="logo">
                    <img class="img_logo" src="img/logo.png">
                    <span class="text_logo_z">Z</span>
                    <span class="text_logo_o1">o</span>
                    <span class="text_logo_o2">o</span>
                    <span class="text_logo_o3">o</span>
                    <span class="text_logo_o4">o</span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="opis">
                    <span class="text_head">КАЧЕСТВЕННЫЕ ТОВАРЫ</span>
                    <br>
                    <span class="text_head_20">ДЛЯ ВАШИХ ПИТОМЦЕВ</span>
                    <br>
                    <span class="text_head_40">ПО ВЫГОДНЫМ ЦЕНАМ</span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3">
                <div class="opis_ad">
                    <a href="tel:+79124642483" class="text_head_tel">+7 (912) 464 24 83</a>
                    <br>
                    <span class="text_head_ad">г. Ижевск</span>
                    <br>
                    <span class="text_head_ad">ул. Ленина, 23</span>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-2">
                <div class="div_basket">
                    <a href="basket.html" style="text-decoration: none;"><img class="img_basket" src="img/basket.png">
                        <span class="text_head_bas">корзина</span></a>
                </div>
            </div>
        </div>
    </div>
<!--container feed-->
<div class="container-fluid">
  <ol class="breadcrumb">
  <li><a href="/index.html">Главная</a></li>
  <li><a href="#">Корм для кошек</a></li>
  <li class="active">Сухой</li>
</ol>
  <div class="row">
  </div>
</div>

    <!--footer-->
    <div id="footer" class="container-fluid bac_footer">
        <div class="fotter_div">
            <div class="container_flex_anim_1">
                <div style="text-align: start;">
                    <ul class="list-unstyled">
                        <li>
                            <front class="footer_text">продукция</front>
                        </li>
                        <li><a href="#" class="footer_text_2">Для кошек</a>
                            <li><a href="#" class="footer_text_2">Для собак</a></li>
                            <li><a href="#" class="footer_text_2">Для рыб</a></li>
                            <li><a href="#" class="footer_text_2">Для птиц</a></li>
                            <li><a href="#" class="footer_text_2">Для грызунов</a></li>
                            <li><a href="#" class="footer_text_2">Для хорьков</a></li>
                            <li><a href="#" class="footer_text_2">Для рептилий</a></li>
                    </ul>
                </div>
            </div>
            <div class="container_flex_anim_1 footer_text">
                о нас
            </div>
            <div class="container_flex_anim_1 footer_text">
                акции
            </div>
            <div class="container_flex_anim_1 footer_text">
                контакты
            </div>
            <div class="container_flex_anim_1 footer_text">
                доставка
            </div>
            <div class="container_flex_anim_1 footer_text_a">
                г. Ижевск, ул. Ленина, д.23
                <br>+7 (912) 464 24 83
            </div>
            <div class="container_flex_anim_1 footer_text_a">
                Присоединяйся к нам
                <br>
                <img class="img_soc" src="img/soc_vk.png" alt="Responsive image">
                <img class="img_soc" src="img/soc_inst.png" alt="Responsive image">
                <img class="img_soc" src="img/soc_g.png" alt="Responsive image">
            </div>
            <br>
            <div class="container_flex_anim_2 footer_text_a">
                Обратная связь
                <br>
                <form>
                    <input type="text" style=" margin: 6px 0;" class="form-control" placeholder="Имя">
                    <input type="text" style=" margin: 6px 0;" class="form-control" placeholder="Номер телефона или @email">
                    <button type="submit" class="btn btn-default">Отправить</button>
                </form>
            </div>
        </div>
    </div>

</body>

</html>
