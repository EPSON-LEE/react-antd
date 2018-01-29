// ECMASCTIPT3 
/**
 * 在Object.prototype.toString()方法被调用的时候 获取this对象的[[Class]]属性的值
 * 原生[[class]]的值一共有十种
 */
judgeType = (param) => {
    switch(Object.prototype.toString.call(param)) {
        // ES3
        case "[object Number]":
            return 'Number'
        case "[object String]":
            return 'String'
        case "[object Array]":
            return 'Array'
        case "[object Object]":
            return 'Object'
        case "[object Function]":
            return 'Function'
        case "[object Date]":
            return 'Date'
        case "[object Math]":
            return 'Math'
        case "[object RegExp]":
            return 'RegExp'
        case "[object Boolean]":
            return 'Boolean'
        case "[object Error]":
            return 'Error'
        // ES5
        /**
         * ES5中加入了 Undefined 和 Null
         */
        case "[object Null]":
            return 'Null'
        case "[object Undefined]":
            return 'Undefined'
    }
}
// tfdsfds
judgeType(5)