const cookie = document.cookie;

function setCookie(name, value, expires, path, domain, secure) {
    cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
    var prefix = `${name}=`;
    var begin = cookie.indexOf(`; ${prefix}`);
    var end = cookie.indexOf(`; ${begin}`);

    if (begin == -1) {
        begin = cookie.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2
    }

    if (end == -1) {
        end = cookie.length;
    }
    return unescape(cookie.substring(begin + prefix.length, end));
}

function delCookie(name, path, domain) {
    if (getCookie(name)) {
        cookie = name + "=" +

            ((path) ? "; path=" + path : "") +

            ((domain) ? "; domain=" + domain : "") +

            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}