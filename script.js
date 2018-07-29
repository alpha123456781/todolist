window.onload = function () {
    let list = this.document.getElementById('list');
    let newtask = this.document.getElementById('newtask');
    let addtask = this.document.getElementById('addtask');
    let list2 = this.document.getElementById('list2');
    let list3 = this.document.getElementById('list3');
    let impo = this.document.getElementById('impo');
    let compo = this.document.getElementById('compo');
    newtask.focus();
    window.remove = function (element) {
        var deleted = document.createElement('li');
        deleted.innerHTML = element.parentElement.children[0].textContent;
        list2.appendChild(deleted)
        list.removeChild(element.parentElement);
        newtask.focus();
    }
 
    window.important = function (element) {
        var highlighted = document.createElement('li');
        highlighted.innerHTML = element.parentElement.children[0].textContent;
        list3.appendChild(highlighted)
        newtask.focus();
    }
 
    function addNewTask() {
        let newitem = document.createElement('li')
        newitem.innerHTML =
            ` 
        <div style="float:left;">${newtask.value}</div>
        <button onclick="remove(this)" style="background-color:#4db6ac; border:none; color:red;"><b>X</b></button>
        <button onclick="important(this)" style="background-color:#4db6ac; border:none; color:yellow;"><b>I</b></button>
        `
        newtask.value = ""
 
        list.appendChild(newitem);
        newtask.focus();
    }
 
    addtask.onclick = function () {
        addNewTask()
    }
    newtask.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) {
            addNewTask()
        }
    })
 
    impo.onclick = function () {
        var imp = document.getElementById('imp').style.display;
        if (imp === 'block') {
            document.getElementById('imp').style.display = 'none';
        } else {
            document.getElementById('imp').style.display = 'block';
        }
	newtask.focus();
    }
 
    compo.onclick = function () {
        var comp = document.getElementById('comp').style.display;
        if (comp === 'block') {
            document.getElementById('comp').style.display = 'none';
        } else {
            document.getElementById('comp').style.display = 'block';
        }
	newtask.focus();
    }
 
}