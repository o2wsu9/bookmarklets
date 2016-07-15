(function(){
  var i=location.href;
  i=i.replace(/.*\/spreadsheets\/d\//,"");
  i=i.replace(/\/.*/,"");
  prompt("Spreadsheet key",i);
})()
