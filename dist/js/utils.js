var log = console.log.bind(console)
var table = console.table.bind(console)

var e = function (selector, element) {
    return (element || document).querySelector(selector)
}

var es = function (selector, element) {
    return (element || document).querySelectorAll(selector)
}