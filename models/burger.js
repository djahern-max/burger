var orm = require("../config/orm");

var burger = {

    selectAll: function (cb) {
        orm.SelectAll("burgers", function (res) {
            cb(res);
        })
    },

    insertOne: function (cb) {
        orm.SelectAll("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.SelectAll("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    deleteOne: function (condition, cb) {
        orm.SelectAll("burgers", condition, function (res) {
            cb(res);
        });
    }

}

module.exports = burger;