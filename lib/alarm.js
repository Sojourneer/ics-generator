/**
 * Created by IEUser on 7/11/2017.
 */
const params = IcsUtils.filterPropParams("alarm");

IcsAlarm = function(options) {
    IcsUtils.checkOptions(options, params);

    for (var paramKey in params) {
        this[paramKey] = options[paramKey] || params[paramKey].default;
        if (!this[paramKey]) { delete this[paramKey]; }
    }
};

IcsAlarm.prototype = {
    constructor: IcsAttendee,

    valueOf: function() {
        var self = this;
        var out = {};
        var keys = Object.getOwnPropertyNames(self);
        _.each(keys, function(key) {
            out[key] = self[key];
        });
        return out;
    },

    ////////////
    // getters
    ////////////
    getProperty: function(property) {
        return this[property];
    },

    ////////////
    // setters
    ////////////
    setProperty: function(property, value) {
        try {
            IcsUtils.checkOptions({property: value}, params);
            this[property] = value;
            return true;
        } catch (e) {
            return false;
        }
    },
}