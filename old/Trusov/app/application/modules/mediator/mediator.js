function Mediator() {

	// about events
	var EVENT_TYPES = {
		ANOTHER_EVENT: 'another',
		SOME_EVENT: 'some_event'
	};

    var events = {};
    
    this.getTypes = function () {
    	return EVENT_TYPES;
    };
    this.call = function (name, data) {
    	if (events[name]) {
    		for (var i = 0; i < events[name].length; i++) {
    			if (events[name][i] instanceof Function) {
    				events[name][i](data);
    			}
    		}
    	}
    };
    this.subscribe = function (name, _func) {
    	if (events[name] && _func instanceof Function) {
    		events[name].push(_func);
    	}
    };
    
    // about data
    var DATA_TYPES = {};
    this.sendData = function() {
    	//...
    };
    this.getData = function() {
    	//...
    };
    
    function init() {
    	for (var key in EVENT_TYPES) {
    		events[EVENT_TYPES[key]] = [];
    	}
    }
    init();
}

module.exports = Mediator;
