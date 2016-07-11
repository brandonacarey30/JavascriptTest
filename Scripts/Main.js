// JavaScript Document
function termList() {
	var item = document.getElementById("termInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	var s = document.getElementById("type")
	var type = s.options[s.selectedIndex].value
	newItem.appendChild(text)
	if (type == 'positive') {
		document.getElementById("posList").appendChild(newItem)
	}
	
	else if (type == 'negative') {
		document.getElementById("negList").appendChild(newItem)
	}
}

