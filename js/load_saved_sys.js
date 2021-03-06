/*  This file is part of Swallow.

    Swallow is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Swallow is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with Swallow.  If not, see <http://www.gnu.org/licenses/>.
*/

        
function cguardado (){
	
//Catch saved values and split by \n
var texto = document.getElementById("fileOutput").value;
var all = texto.split("\n");

//Export to each field 
document.getElementById('html_container').value = all[0];
document.getElementById('project_name').value = all[1];

//Refresh
gui_htmlBlur();
}

function processFiles(files) {
var file = files[0];
var reader = new FileReader();

reader.onload = function (e) {

var output = document.getElementById("fileOutput");
output.textContent = e.target.result;
};
reader.readAsText(file);
}