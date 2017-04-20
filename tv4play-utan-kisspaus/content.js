(function(open) {

    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {

        this.addEventListener('readystatechange', function() {
            
            if (this.responseURL.endsWith('master.m3u8')) {
            	var index = 1;
            	if (index == 1) {
            		++index;
            		//console.log(this.responseURL); 
            		var newWindow = window.open(this.responseURL);

            		XMLHttpRequest.prototype.open = null;
            	}
            }
        }, false);

        open.call(this, method, url, async, user, pass);
    };

})(XMLHttpRequest.prototype.open);