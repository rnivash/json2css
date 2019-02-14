(function( $ ) {
 
    $.fn.json2css = function(jsonmodel) {
	
		var css = "<style>";
		
        for (var i in jsonmodel) {
            css += " " + i + "{";
            var imodel = jsonmodel[i];
            for (var j in imodel) {
                css += j + ":" + imodel[j] + ";";
            }
            css += "}";
        }
		
        css += "</style>";
		
        this.append(css);
 
        return this; 
    }; 
}( jQuery ));