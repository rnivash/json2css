(function($) { 
    $.fn.json2css = function(data) {
        var css = "<style>";
        for (var istyle in data) {
            css += " " + istyle + "{";
            var idata = data[istyle];
            for (var iprop in idata) {
                css += iprop + ":" + idata[iprop] + ";";
            }
            css += "}";
        }
        css += "</style>";
        this.append(css);
        return this;
    };
}(jQuery));