// Your solution goes here 
function isStrongPassword(password){
    /* special character code */
    var special = "!@#$%^&*";
    if (password.length < 8){
        return false;
    }

    if (password.indexOf("password") !=-1) {
        return false;
    }
    var hasSpecial = false;
    for (var i = 0; i < special.length; i++){
        for (var j = 0; j < password.length; j++){
            if (special[i] == password[j]){
                hasSpecial = true;
            }
        }
    }
    if (!hasSpecial){
        return false;
    }
     for (var i = 0; i < password.length; i++){

         if (password.charCodeAt(i)>=65 && password.charCodeAt(i) <=90){
            return true;
         }
     }
     return false;
}
