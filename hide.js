function personal () {
    let fields = document.getElementById("fields");
    let field1 = document.getElementById("field1");
    let check = document.getElementById("check");
    let btn1 = document.getElementById("btn1");

    fields.style.display = "inline";
    field1.style.display = "inline";
    check.style.display = "none";
    btn1.style.display = "none";
}

function company () {
    let fields = document.getElementById("fields");
    let field1 = document.getElementById("field1");
    let field2 = document.getElementById("field2");
    let field3 = document.getElementById("field3");
    let check = document.getElementById("check");
    let btn1 = document.getElementById("btn1");


    field2.style.display = "inline";
    field3.style.display = "inline";
    fields.style.display = "none";
    field1.style.display = "none";
    check.style.display = "none";
    btn1.style.display = "none";
}