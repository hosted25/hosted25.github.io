    AllArrCanada = [
    ["AB","604432","D",5,"Aberta"],
    ["BC","636028","D",5,"British Columbia"],
    ["MB","636048","D",5,"Manitoba"],
    ["NB","636017","D",5,"New Brunswick"],
    ["NL","636016","C",5,"New Foundland and Labrador"],
    ["NS","636013","R",5,"Nova Scotia"],
    ["NU","604433","R",5,"Nunavut"],
    ["ON","636012","R",5,"Ontario"],
    ["PE","604426","R",5,"Prince Edvard Island"],
    ["QE","604428","R",5,"Quebec"],
    ["SK","636044","R",5,"Saskatchewan"],
    ["YT","604429","R",5,"Yukon"]


    ];
    AllArr = [
    ["AL","636033","D",4,"Alabama"],
    ["AK","636059","D",5,"Alaska"],
    ["AZ","636026","D",12,"Arizona"],
    ["AR","636021","D",8,"Arkansas"],
    ["CA","636014","C",5,"California"],
    ["CO","636020","R",5,"Colorado"],
    ["CT","636006","D",6,"Connecticut"],
    ["DE","636011","D",8,"Delaware"],
    ["FL","636010","E",8,"Florida"],
    ["GA","636055","C",8,"Georgia"],
    ["HI","636047","3",8,"Hawaii"],
    ["ID","636050","D",8,"Idaho"],
    ["IL","636035","D",4,"Illinois"],
    ["IN","636037","D",6,"Indiana"],
    ["IA","636018","C",8,"Iowa"],
    ["KS","636022","C",6,"Kansas"],
    ["KY","636046","D",8,"Kentucky"],
    ["LA","636007","E",6,"Louisiana"],
    ["ME","636041","C",6,"Maine"],
    ["MD","636003","C",8,"Maryland"],
    ["MA","636002","D",5,"Massachusetts"],
    ["MI","636032","D",4,"Michigan"],
    ["MN","636038","D",4,"Minnesota"],
    ["MS","636051","R",8,"Mississippi"],
    ["MO","636030","F",6,"Missouri"],
    ["MT","636008","D",8,"Montana"],
    ["NE","636054","O",5,"Nebraska"],
    ["NV","636049","C",8,"Nevada"],
    ["NH","636039","D",5,"New Hampshire"],
    ["NJ","636036","D",4,"New Jersey"],
    ["NM","636009","D",8,"New Mexico"],
    ["NY","636001","D",8,"New York"],
    ["NC","636004","A",8,"North Carolina"],
    ["ND","636034","D",6,"North Dakota"],
    ["OH","636023","D",4,"Ohio"],
    ["OK","636058","D",4,"Oklahoma"],
    ["OR","636029","C",8,"Oregon"],
    ["PA","636025","C",4,"Pennsylvania"],
    ["RI","636052","O",5,"Rhode Island"],
    ["SC","636005","D",8,"South Carolina"],
    ["SD","636042","1",5,"South Dakota"],
    ["TN","636053","D",8,"Tennessee"],
    ["TX","636015","C",8,"Texas"],
    ["UT","636040","D",6,"Utah"],
    ["VT","636024","1",8,"Vermont"],
    ["VA","636000","D",8,"Virginia"],
    ["WA","636045","D",6,"Washington"],
    ["WV","636061","E",8,"West Virginia"],
    ["WI","636031","D",8,"Wisconsin"],
    ["WY","636060","C",5,"Wyoming"]

    ];
var OutLicenseNumber = null;
var OutExpiryDate  = "";
var OutExpiryDateFlag  = false;
var OutClass = null ;
function genInventory(){
    var inventoryNum;

    var state = document.getElementById("statesId").value;
    if (state == "AZ"){
        inventoryNum  = "1" + getRndInteger(1000, 9999) + getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndInteger(1000000, 9999999);
    }else if (state == "CA"){
        inventoryNum  = getRndInteger(10000, 99999) + document.getElementsByName('licNumber')[0].value  + getRndInteger(1000, 9999);
    }else if (state == "VA"){
        inventoryNum  = "" + getRndInteger(10000, 99999) + getRndInteger(10000, 99999)  + getRndInteger(100000, 999999);
    }else{
        inventoryNum = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter() + getRndInteger(1000, 9999) + getRndLetter();
    }

    document.getElementsByName("inpInventory")[0].value = inventoryNum;
}


function genDiscriminator(){
    var issueDate     = document.getElementsByName("issuedate")[0].value;
    var IssueYear     = issueDate.substring(0,4);
    var IssueMonth    = issueDate.substring(5,7);
    var IssueDay      = issueDate.substring(8,10);

    var expiryDate     = document.getElementsByName("expiryDate")[0].value;
    var expiryY       = expiryDate.substring(2,4);
//    var expiryM       = expiryDate.substring(5,7);
//    var expiryD       = expiryDate.substring(8,10);


    var state = document.getElementById("statesId").value;
    var docid;
    var aChar = getRndLetter();
    if (state == "CA"){
        docid = IssueDay + "/"+ IssueMonth+ "/" +IssueYear + getRndInteger(10000, 99999) +"/"+ aChar + aChar +
                getRndLetter() +  getRndLetter() + "/" + expiryY;
    }else
    if (state == "AZ"){
        var lastName      = document.getElementsByName("lastName")[0].value;
        lastName = lastName.substring(0,1);
        var firstName     = document.getElementsByName("firstName")[0].value;
        firstName = firstName.substring(0,1);

        docid = getRndInteger(1000, 9999) + getRndLetter() +  getRndLetter() + getRndInteger(100, 999) + firstName + getRndInteger(1000, 9999) + lastName + getRndInteger(1, 9);
    }else if(state == "DE"){
        docid = IssueYear + IssueMonth + IssueDay + getRndInteger(1000000, 9999999) + document.getElementsByName('licNumber')[0].value;

    }else if(state == "VA"){
        docid = getRndInteger(100000000, 999999999);

    }else if(state == "WI"){
        docid = getRndLetter() + getRndLetter() + getRndLetter() + getRndLetter() + getRndLetter() +
                    IssueYear + IssueMonth + IssueDay + getRndInteger(10000000, 99999999);

    }else{
        docid = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter() + getRndInteger(1000, 9999) + getRndLetter();
    }

    document.getElementsByName("inpDiscriminator")[0].value = docid;
}

function genAudit(){
    var audit = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter() + getRndInteger(1000, 9999) + getRndLetter();
    document.getElementsByName("inpAudit")[0].value = audit;
}


function ClearSelectStates(){
    var statesId = document.getElementById("statesId");
    var disp = statesId.style.display;  // don't worry about previous display style
    var o;
    statesId.style.display = 'none';
    for(var i = statesId.options.length-1; i > 0; i--){
//        for(var p = 0; p>100000; p--){
//            o = p;
//         }
//        statesId.options.remove(i) = null;
        statesId.options[i] = null;
//        setInterval( function(){
//                statesId.options[i] = null;
//            },100 );
    }
//    statesId.options.length = 1;
//    statesId.disabled = true;
//    setTimeout(function(){
//        statesId.style.display = disp;
//    },20);
 //   document.getElementsByName('TestStr')[0].value = disp;
//    statesId.innerHTML = "";
}
var forceRedraw = function(element){
    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;  // don't worry about previous display style

    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        element.style.display = disp;
        n.parentNode.removeChild(n);
    },20); // you can play with this timeout to make it as short as possible
}
function FillSelectStatesCanada(){

        var statesId = document.getElementById("statesId");

        for (var i=0; i < AllArrCanada.length; i++){
//                for(var p = 0; p>100000; p--){
//                    o = p;
//                }
                if (i > 0){
                        var newOption = new Option(AllArrCanada[i][4],AllArrCanada[i][0]);
                        statesId.options[statesId.options.length] = newOption;
                }else{
                        statesId.options[0].value = AllArrCanada[i][0];
                        statesId.options[0].innerHTML = AllArrCanada[i][4];
                }
        }

        $(statesId).trigger('chosen:updated');
}

function FillSelectStatesUSA(){
    var statesId = document.getElementById("statesId");

    for (var i=0; i < AllArr.length; i++){
        if (i > 0){
            var newOption = new Option(AllArr[i][4],AllArr[i][0]);
            statesId.options[statesId.options.length] = newOption;
        }else{
            statesId.options[0].value = AllArr[i][0];
            statesId.options[0].innerHTML = AllArr[i][4];
        }
    }
    $(statesId).trigger('chosen:updated');

}





function load_page() {
    gen_lic(true);
    var revDate = "11272016";
    var oMonth = revDate.substring(0,2);
    var oDay = revDate.substring(2,4);
    var oYear = revDate.substring(4,8);
    document.getElementsByName('revisionDate')[0].value = oYear + "-" + oMonth + "-"+ oDay;

//    var statesId = document.getElementById("statesId");

//    ClearSelectStates();
//    FillSelectStatesUSA();
//    for(var i=statesId.options.length-1; i>=0; i--){
//        statesId.options[i] = null;
//    }
//    var newOption = new Option("aaaaaaaa", "SS");
//    statesId.options[statesId.options.length] = newOption;
    document.getElementsByName('firstName')[0].value = 'FirstTest';
    document.getElementsByName('lastName')[0].value = 'LastTest';
    document.getElementsByName('middleName')[0].value = 'MiddleTest';
    document.getElementsByName('street')[0].value = 'StreetTest';
    document.getElementsByName('city')[0].value = 'TestCity';
    document.getElementsByName('zip')[0].value = '12345';
/*

*/
}


function getExpiryDateFromBirthday(birthDay, years) {
    date = "";
    var birthY = birthDay.substring(0,4);
    var birthM = birthDay.substring(5,7);
    var birthD = birthDay.substring(8,10);

    year = new Date().getFullYear()
    year = year - 1;
    year = year + years;
    date = birthM + birthD + year.toString(10);
    return date;
}
function genOutClass(state)
{
        var Res = "";
        for(var i = 0; i < AllArr.length; i++ ){
                if (AllArr[i][0] == state){
                        Res = AllArr[i][2];
                        break;
                }
        };
        return Res;
}


function get_Iin(state)
{
    var Res = "";
    if (document.querySelector('input[name="countryName"]:checked').value==1){
        for(var i = 0; i < AllArr.length; i++ ){
            if (AllArr[i][0] == state){
                Res = AllArr[i][1];
                break;
            }
        };
    }else{
        for(var i = 0; i < AllArrCanada.length; i++ ){
            if (AllArrCanada[i][0] == state){
                Res = AllArrCanada[i][1];
                break;
            }
        };
    }
    return Res;
}

function genExpDate(state,birthday){
        var Res = "";
        var Y = 4;
        for(var i = 0; i < AllArr.length; i++ ){
                if (AllArr[i][0] == state){
                        Y = AllArr[i][3];
                        break;
                }
        };
    return getExpiryDateFromBirthday(birthday, Y);
}


function genLicNumber(state, birthday,firstName,middleName,lastName) {
    var birthY = birthday.substring(0,4);
    var birthM = birthday.substring(5,7);
    var birthD = birthday.substring(8,10);

    var Result="";
    if (state == 'AL') {
        Result = getRndInteger(1000000, 9999999);
    }else if (state == 'AK') {
        Result = getRndInteger(1000000, 9999999);
    }else if (state == 'AZ') {
        const list = "ABDY";
        var res = "";
        var rnd = Math.floor(Math.random() * list.length);
        res = list.charAt(rnd);
        Result = res + getRndInteger(10000000, 99999999);
    }else if (state == 'AR') {
        Result = "9" + getRndInteger(10000000, 99999999);
    }else if (state == 'CA') {
        Result = getRndLetter() + getRndInteger(1000000, 9999999);
    }else if (state == 'CO') {
        Result = getRndInteger(10, 99) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(1000, 9999);
    }else if (state == 'CT') {
        if ((birthY % 2) == 0) {
            Result = birthM + getRndInteger(1000000, 9999999);
        } else {
            var newBirthMonth = Number(birthM) + Number("12");
            Result = newBirthMonth.toString(10) + getRndInteger(1000000, 9999999);
        }
    }else if (state == 'DE') {
        Result = getRndInteger(1000000, 9999999);
    }else if (state == 'FL') {
        Result = lastName.substring(0,1) + getRndInteger(100, 999) + "-" + getRndInteger(100, 999) +
                birthY.substring(2,5) + "-" + getRndInteger(100, 999) + "-" + Math.floor(Math.random() * 2).toString(10);
    }else if (state == 'GA') {
        Result = getRndInteger(100000000, 999999999);
    }else if (state == 'HI') {
        Result = "H" + getRndInteger(10000000, 99999999);
    }else if (stateID.value == 'ID') {
        Result = getRndLetter() + getRndLetter() + getRndInteger(100000, 999999) + getRndLetter();
    }else if (state == 'IL') {
        Result = lastName.substring(0,1) + getRndInteger(10000000000, 99999999999);
    }else if (state == 'IN') {
        Result = getRndInteger(1000, 9999) + "-" + getRndInteger(10, 99) + "-" + getRndInteger(1000, 9999);
    }else if (state == 'IA') {
        Result = getRndInteger(100000000, 999999999);
    }else if (state == 'KS') {
        Result = "K" + getRndInteger(10, 99) + "-" + getRndInteger(10, 99) + "-" + getRndInteger(1000, 9999);
    }else if (state == 'KY') {
        Result = lastName.substring(0,1) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(100, 999);
    }else if (state == 'LA') {
        var iin = "636007";
        Result = "00" + getRndInteger(1000000, 9999999);
    }else if (state == 'ME') {
        Result = getRndInteger(1000000, 9999999);
    }else if (state == 'MD') {
        Result = lastName.substring(0,1) + "-" + getRndInteger(100, 999) + "-" + getRndInteger(100, 999) + "-" +
                getRndInteger(100, 999) + "-" + getRndInteger(100, 999);
    }else if (state == 'MA') {
        Result = "S" + getRndInteger(10000000, 99999999);
    }else if (state == 'MI') {
        Result = lastName.substring(0,1) + " " + getRndInteger(100, 999) + " " +
                getRndInteger(100, 999) + " " + getRndInteger(100, 999) + " " + getRndInteger(100, 999);
    }else if (state == 'MN') {
        Result = getRndLetter() + getRndInteger(100000000000, 999999999999);
    }else if (state == 'MS') {
        Result = getRndInteger(100000000, 999999999);
    }else if (state == 'MO') {
        Result = getRndLetter() + getRndInteger(100000000, 999999999);
    }else if (state == 'MT') {
        Result = birthMonth + getRndInteger(100, 999) + birthY + "41" + birthD;
    }else if (state == 'NE') {
        const list = "ABCEGHV";
        var res = "";
        var rnd = Math.floor(Math.random() * list.length);
        res = list.charAt(rnd);
        Result = res + getRndInteger(10000000, 99999999);
    }else if (state == 'NV') {
        Result = getRndInteger(1000000000, 9999999999);
    }else if (state == 'NH') {
        var lnamelength = lastName.length;
        Result = lastName.substring(0,1) + lastName.substring((Number(lnamelength) - 1),Number(lnamelength))  + firstName.substring(0,1) +
                birthY.substring(2,5) + birthD + getRndInteger(1000,9999);
    }else if (state == 'NJ') {
        Result = getRndLetter() + getRndInteger(1000, 9999) + " " + getRndInteger(10000, 99999) + " " + getRndInteger(10000, 99999);
    }else if (state == 'NM') {
        Result = getRndInteger(100000000, 999999999);
    }else if (state == 'NY') {
        Result = getRndInteger(100, 999) + " " + getRndInteger(100, 999) + " " + getRndInteger(100, 999);
    }else if (state == 'NC') {
        Result = getRndInteger(100000000000, 999999999999);
    }else if (state == 'ND') {
            Result = getRndLetter() + getRndLetter() + getRndLetter() + "-" + getRndInteger(10,99) + "-" + getRndInteger(1000,9999);
    }else if (state == 'OH') {
        Result = getRndLetter() + getRndLetter() + getRndInteger(100000000,999999999);
    }else if (state == 'OK') {
        Result = getRndLetter() + getRndInteger(100000000,999999999);
    }else if (state == 'OR') {
        Result = getRndInteger(1000000,9999999);
    }else if (state == 'PA') {
        Result = getRndInteger(10,99) + " " + getRndInteger(100,999) + " " + getRndInteger(100,999);
    }else if (state == 'RI') {
        Result = getRndInteger(1000000,9999999);
    }else if (state == 'SC') {
        Result = getRndInteger(10000000000,99999999999);
    }else if (state == 'SD') {
        Result = getRndInteger(10000000,99999999);
    }else if (state == 'TN') {
        Result = getRndInteger(100000000,999999999);
    }else if (state == 'TX') {
        Result = getRndInteger(10000000,99999999);
    }else if (state == 'UT') {
        Result = getRndInteger(1000000000,9999999999);
    }else if (state == 'VT') {
        var VernmontIn = Math.floor(Math.random() * 2);
        if(VermontIn == 0){
            Result = getRndInteger(10000000,99999999);
        } else {
            Result = getRndInteger(1000000,9999999) + getRndLetter();
        }
    }else if (state == 'VA') { /////////
        Result = getRndLetter() + getRndInteger(10,99) + "-" + getRndInteger(10,99) + "-" +getRndInteger(1000,9999);
    }else if (state == 'WA') {
        Result = fit(lastName,5) + firstName.substring(0,1) + middleName.substring(0,1) + getRndInteger(10000,99999);
    }else if (state == 'WV') {
        var WestVirginiaIn = Math.floor(Math.random() * 2);
        if(WestVirginiaIn == 0){
            Result = getRndLetter() + getRndInteger(100000,999999);
        } else {
            Result = getRndLetter() + getRndLetter() + getRndInteger(10000,99999);
        }
    }else if (state == 'WI') {///////////
        Result = getRndLetter() + getRndInteger(100,999) + getRndInteger(1000,9999) + getRndInteger(1000,9999) + getRndInteger(10,99);
    }else if (state == 'WY') {
        Result = getRndInteger(100000,999999) + "-" + getRndInteger(100,999);
    }
    return Result;
}



