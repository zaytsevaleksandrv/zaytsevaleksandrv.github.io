  $(document).ready(function() {
            //для тестирования
            var flagError = true;
            $('#submitQuestionButton').click(function() {
                    if (flagError) {
                        $("#fio").parent("div.question__field").addClass("has-error");
                        $("#email").parent("div.question__field").addClass("has-error");
                        $("#invalid-name").show();
                        $("#invalid-email").show();
                        $(".error-message").show();
                        $(".button-valid-success").hide();
                        $(".questions-disappear").show();
                        flagError = false;
                    } else {
                        $("#fio").parent("div.question__field").removeClass("has-error");
                        $("#email").parent("div.question__field").removeClass("has-error");
                        $("#invalid-name").hide();
                        $("#invalid-email").hide();
                        $(".error-message").hide();
                        $("div.question__field").removeClass("has-error");
                        $(".button-valid-success").show();
                        $(".questions-disappear").hide();
                        flagError = true;
                    }
                })
                //
            var questionForm = {
                init: function() {
                    var elem = $('.question__field');
                    var textarea = $('.textarea');
                    $('.question__field-input').val('');
                    elem.on('input', '.question__field-input', questionForm._oninput);
                    textarea.on('input', questionForm._adjustHeight);
                },
                _oninput: function(e) {
                    var $this = $(this);
                    if (this.value.length > 0) {
                        $this.closest('.question__field').addClass('active');
                    } else {
                        $this.closest('.question__field').removeClass('active');
                    }
                },
                _adjustHeight: function(e) {
                    var textarea = e.target;
                    textarea.style.height = '30px';
                    textarea.style.height = textarea.scrollHeight + "px";
                }
            };
            questionForm.init();
        });