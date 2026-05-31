let isAccountLocked, userRole, hasPaymentMethod, canAccessContent;

if (isAccountLocked) {
    console.log("Your account is locked. Please contact support.");
}else if (userRole === "admin") {
    console.log("Welcome, admin! You have full access.");
}else{
    console.log("Your account is not locked.");
}




/********************************************************/
// Challenge area
let temp = 45;

if (temp <= 32) {
    console.log("It is freezing outside!");
}else if (temp >= 110) {
    console.log("It is hot outside!");
}else{
    console.log("The temperature is moderate.");
}