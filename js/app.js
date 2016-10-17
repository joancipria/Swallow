var menubar = new nw.Menu({
  type: 'menubar'
});

var fileMenu = new nw.Menu();
var viewMenu = new nw.Menu();
var helpMenu = new nw.Menu();



fileMenu.append(new nw.MenuItem({
  label: 'Open image',
  click: function() {
open_sourceImageL();
  }
}));

var saveMenu = new nw.Menu();

fileMenu.append(new nw.MenuItem({
  label: 'Load map',
  click: function() {
open_loadMapL();  }
}));

var importMenu = new nw.Menu();

fileMenu.append(new nw.MenuItem({
  label: 'Save map',
  click: function() {
saveTextAsFile()  }
}));

var exportMenu = new nw.Menu();

fileMenu.append(new nw.MenuItem({
  label: 'Properties',
  click: function() {
open_properties();  }
}));


viewMenu.append(new nw.MenuItem({
  label: 'Image',
  click: function() {
open_imageView();  }
}));
viewMenu.append(new nw.MenuItem({
  label: 'Code',
  click: function() {
open_codeView();  }
}));
viewMenu.append(new nw.MenuItem({
  label: 'Options',
  click: function() {
open_options();  }
}));

helpMenu.append(new nw.MenuItem({
  label: 'Activate Help',
  click: function() {
open_help();  }
}));

helpMenu.append(new nw.MenuItem({
  label: 'Swallow Website',
  click: function() {
window.open("http://joancipria.com/proyectos/swallow/");  }
}));

helpMenu.append(new nw.MenuItem({
  label: 'About Swallow',
  click: function() {
open_about();  }
}));

var prefMenu = new nw.Menu();


var openRecentMenu = new nw.Menu();

openRecentMenu.append(new nw.MenuItem({
  label: 'Recente File X',
  click: function() {
    alert('Clicked to open a recent file');
  }
}));

menubar.append(new nw.MenuItem({ label: 'File', submenu: fileMenu}));
menubar.append(new nw.MenuItem({ label: 'View', submenu: viewMenu}));
menubar.append(new nw.MenuItem({ label: 'Help', submenu: helpMenu}));



var win = nw.Window.get();
win.menu = menubar;


function initEditor () {
  document.getElementById('models').style.visibility = "hidden";
}
