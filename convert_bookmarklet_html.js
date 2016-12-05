var fs = require('fs');
var ejs = require('ejs');
var bml = require("bookmarkletter").bookmarkletter;

var bookmarklets_path = "bookmarklets";

var list = fs.readdirSync(bookmarklets_path);
var items = [];
list.forEach(function(filename){
	var data = fs.readFileSync(bookmarklets_path + "/" + filename, 'utf8');
	var result = bml(data);
	items.push({blet: result, filename: filename.replace(".js", "")})
});

// テンプレート出力
var template = fs.readFileSync('template.ejs', 'utf8');
var contents = ejs.render(template, {items: items});
fs.writeFile('bookmarklets.html', contents);

