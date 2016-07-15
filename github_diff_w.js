(function(){
  var url = location.href;
  if(url.indexOf('github.com') != -1 && url.indexOf('w=1') == -1) {
    if(url.indexOf('?') != -1) {
      location.href = url + '&w=1';
    } else {
      location.href = url + '?w=1';
    }
  }
})()
