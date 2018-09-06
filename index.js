; (function () {
    "use strict"
    var _global;
    var compareList = function (obj) {
        obj = obj || {};
        var listBefore = obj.listBefore;
        var listNow = obj.listNow;
        var key = obj.key;
        if (typeof listBefore !== 'object') {
            console.warn("listBefore:类型有误！[" + listBefore + "]");
            return {};
        }
        if (typeof listNow !== 'object') {
            console.warn("listNow:类型有误！[" + listNow + "]");
            return {};
        }
        if (listBefore instanceof Array && listNow instanceof Array) {
            var removeList = [], addList = [], sameKey = [];
            if (listBefore.length
                && typeof listBefore[0] === 'object'
                && (key === '' || key === null || key === undefined)) {
                console.warn('listBefore数组子集为对象类型，需传人有效的key！');
                return {};
            }
            if (listNow.length
                && typeof listNow[0] === 'object'
                && (key === '' || key === null || key === undefined)) {
                console.warn('listNow数组子集为对象类型，需传人有效的key！');
                return {};
            }
            if (key !== undefined && key !== null) {
                for (var i = 0; i < listBefore.length; i++) {
                    var doPush = false;
                    for (var a = 0; a < listNow.length; a++) {
                        if (listBefore[i][key] === listNow[a][key]) {
                            doPush = true;
                        }
                    }
                    if (doPush) {
                        sameKey.push(listBefore[i][key]);
                    }
                }

                for (var i = 0; i < listBefore.length; i++) {
                    var doPush = true;
                    for (var a = 0; a < sameKey.length; a++) {
                        if (listBefore[i][key] === sameKey[a]) {
                            doPush = false;
                        }
                    }
                    if (doPush) { removeList.push(listBefore[i]); }
                }

                for (var i = 0; i < listNow.length; i++) {
                    var doPush = true;
                    for (var a = 0; a < sameKey.length; a++) {
                        if (listNow[i][key] === sameKey[a]) {
                            doPush = false;
                        }
                    }
                    if (doPush) { addList.push(listNow[i]); }
                }
            } else {
                for (var i = 0; i < listBefore.length; i++) {
                    var doPush = false;
                    for (var a = 0; a < listNow.length; a++) {
                        if (listBefore[i] === listNow[a]) {
                            doPush = true;
                        }
                    }
                    if (doPush) {
                        sameKey.push(listBefore[i]);
                    }
                }

                for (var i = 0; i < listBefore.length; i++) {
                    var doPush = true;
                    for (var a = 0; a < sameKey.length; a++) {
                        if (listBefore[i] === sameKey[a]) {
                            doPush = false;
                        }
                    }
                    if (doPush) { removeList.push(listBefore[i]); }
                }

                for (var i = 0; i < listNow.length; i++) {
                    var doPush = true;
                    for (var a = 0; a < sameKey.length; a++) {
                        if (listNow[i] === sameKey[a]) {
                            doPush = false;
                        }
                    }
                    if (doPush) { addList.push(listNow[i]); }
                }
            }
            return { removeList: removeList, addList: addList, sameKey: sameKey };
        } else {
            console.warn('传入对象listBefore／listNow类型需为Array！');
            return {};
        }
    }
    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = compareList;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return compareList; });
    } else {
        !('compareList' in _global) && (_global.compareList = compareList);
    }
}());