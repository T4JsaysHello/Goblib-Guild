// Create and Store Login Data
window.onload = checkLogin;//Check to see if user is logged in already
//If user is logged in then
function checkLogin() {
    if (sessionStorage.loggedInUsrName !== undefined) {


        //Changes Page to user Logged in interface with both delete account and log out buttons showing.
        document.getElementById("loggedPara").innerHTML = "<div class=\"account_wrap\">\
                    <div class=\"content_body\">\
                    <input type=\"submit\" onclick=\"logOut()\" class=\"bt_style\" value=\"Log Out\"></input>\
                    <button onclick=\"deleteAccount()\"  class=\"bt_style dlt_bt\">Delete Account</button>\
                    </div>\
                    </div>"
    }
}

// This function is used to store the user into local storage through the registration system.
function storeUser() {

    //Build object to store in local storage.
    var usrObject = {};
    usrObject.email = document.getElementById("emailInput").value; //email input
    usrObject.userName = document.getElementById("usrInput").value; //username input
    usrObject.password = document.getElementById("passInput").value; //password input
    usrObject.highScore = 0; //highscore variable
    let ConfirmPass = document.getElementById("repassInput").value; 
    //checks to see if password entered are the same
    if (usrObject.email == "" || usrObject.userName == "" || usrObject.password == "") {
        document.getElementById("Result").innerHTML = "<b>Please Enter Details</b>";
        return; //Do nothing else
    } else {

        //if the password entered are the same then the information is stored into local storage.
        if (ConfirmPass === usrObject.password) {

            //Store user
            localStorage[usrObject.userName] = JSON.stringify(usrObject);


            //Inform user of result
            document.getElementById("Result").innerHTML = "<b>Registration successful.</b>";
        } else {
            document.getElementById("Result").innerHTML = "<b>Password Do Not Match, Please Re-try.</b>";
            return;
        }
    }
}




let cookies = document.cookie;
//Logins in the user.
function login() {
    //Get Username
    let Username = document.getElementById("Usrinput").value;

    //User does not have an account
    if (localStorage[Username] === undefined) {
        //Inform user that they do not have an account
        document.getElementById("CheckLog").innerHTML = "Username not recognized. Do you have an account?";
        return; //Do nothing else
    }
    else {// if User has an account
        let usrObj = JSON.parse(localStorage[Username]);//Convert to object
        let password = document.getElementById("Passinput").value;
        if (password === usrObj.password) {//Successful login
            document.getElementById("CheckLog").innerHTML = "";//Clear any login failures
            sessionStorage.loggedInUsrName = usrObj.userName;
            window.location.reload();
        } else {
            //if password is incorrect but username is corrent then it will display a error.
            document.getElementById("CheckLog").innerHTML = "Password not correct. Please try again.";
        }
    }
}
//Log out function
function logOut() {
    window.location.reload();
    sessionStorage.removeItem("loggedInUsrName");
    console.log("hello")
}
//Delete Account function
function deleteAccount() {
    localStorage.removeItem(sessionStorage.loggedInUsrName);
    sessionStorage.removeItem("loggedInUsrName");
    window.location.reload();
}


