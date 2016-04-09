function submitValues(){
    var firstname = document.forms["frm1"]["firstname"].value;
    var lastname = document.forms["frm1"]["lastname"].value;
    var phone = document.forms["frm1"]["phone"].value;
    var address = document.forms["frm1"]["address"].value;
    var car = document.forms["frm1"]["car"].value;
    document.cookie = "firstname=" + firstname;
    document.cookie = "lastname=" + lastname;
    document.cookie = "phone=" + phone;
    document.cookie = "address=" + address;
    document.cookie = "address=" + car;
    return alert(document.cookie);
}
