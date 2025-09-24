// Task 01
submit = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;


    document.getElementById("showdata").innerHTML = "<h2>Your Data </h2>" + "<br> " + " First Name : " + fname + "<br>" +
        "Last Name : " + lname + "<br>" + "Email : " + email + "<br>" + "Password : " + pass;

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
}

// Task 02
let paraText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima iusto error nisi quas nostrum, sint aliquid enim numquam aspernatur, non, repudiandae quae debitis temporibus animi eos corrupti? Quam, est magnam.'
document.getElementById('para').innerHTML = paraText.slice(0, 40) + "...."

seeMore = () => {
    document.getElementById('para').innerHTML = paraText;
    document.getElementById('seeMore').style.display = 'none';
}


//    Task 03
function submiStuData(){
    var name = document.getElementById("_name").value ;
    var sch = document.getElementById("_sch").value ;
    var city = document.getElementById("_city").value ;
    var rel = document.getElementById("_rel").value ;

    let gettab = document.getElementById("dataTab");
    let tr = document.createElement("TR");

    let td1 = document.createElement("Td");
    let td1Text = document.createTextNode(name);
    td1.appendChild(td1Text);
    tr.appendChild(td1);

    let td2 = document.createElement("Td");
    let td2Text = document.createTextNode(sch);
    td2.appendChild(td2Text);
    tr.appendChild(td2);
    
    let td3 = document.createElement("Td");
    let td3Text = document.createTextNode(city);
    td3.appendChild(td3Text);
    tr.appendChild(td3);
    
    let td4 = document.createElement("Td");
    let td4Text = document.createTextNode(rel);
    td4.appendChild(td4Text);
    tr.appendChild(td4);
    
    let td5 = document.createElement("Td");
    let editbtn = document.createElement("BUTTON")
    let editbtnText = document.createTextNode("Edit");
    editbtn.setAttribute("onclick","edit(this.parentNode.parentNode)");
    editbtn.appendChild(editbtnText);
    td5.appendChild(editbtn);
    tr.appendChild(td5);
    
    let td6 = document.createElement("Td");
    let delbtn = document.createElement("BUTTON")
    let delbtnText = document.createTextNode("Delete");
    delbtn.setAttribute("onclick","del(this.parentNode.parentNode)");
    delbtn.appendChild(delbtnText);
    td6.appendChild(delbtn);
    tr.appendChild(td6);

    gettab.appendChild(tr);

    document.getElementById("_name").value = "" ;
    document.getElementById("_sch").value = "" ;
    document.getElementById("_city").value = "" ;
    document.getElementById("_rel").value = "" ;
}

function edit(gettr){
    document.getElementById("_name").value = gettr.childNodes[0].innerText ;
    document.getElementById("_sch").value =  gettr.childNodes[1].innerText ;
    document.getElementById("_city").value =  gettr.childNodes[2].innerText ;
    document.getElementById("_rel").value =  gettr.childNodes[3].innerText ;

    gettr.remove();
}
function del(gettr){
    gettr.remove();
}