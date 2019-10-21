
function BaseRouter() {

    var ERROR = {
        2000: 'parameters is not a number',
        9000: 'undefined error'
    };

    this.answer = function(data) {
        return {
            result: 'ok',
            data: data,
        };
    };

    this.error = function(code) {
        var error = (code && ERROR[code]) ? { code: code, text: ERROR[code] } : { code: 9000, text: ERROR[9000] } ;
        return {
            result: 'error',
            error: error,
        };
    };
}

module.exports = BaseRouter;
