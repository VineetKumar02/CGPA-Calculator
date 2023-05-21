// Variables for selecting buttons for Main1
var cgpa1 = document.getElementById("cgpa1");
var reset1 = document.getElementById("reset1");
var pop_up_result1 = document.getElementById("pop-up-result1");
var main1_result_details = document.getElementsByClassName("displayresult")[0];

// Variables for selecting buttons for Main2
var cgpa2 = document.getElementById("cgpa2");
var reset2 = document.getElementById("reset2");
var pop_up_result2 = document.getElementById("pop-up-result2");
var main2_result_details = document.getElementsByClassName("displayresult")[1];

// Variables for selecting popups
var popup1 = document.getElementById("popup1");
var popup2 = document.getElementById("popup2");

// Variables for selecting answers
var main_result1 = document.getElementById("main-result1");
var main_result2 = document.getElementById("main-result2");

// Variables for selecting semester
var s1 = document.getElementById("selector1");
var s2 = document.getElementById("selector2");
var sem = document.getElementById("semdone");

// Call given functions on click
cgpa1.addEventListener("click", CalculateCGPA1);
reset1.addEventListener("click", Reset1);
cgpa2.addEventListener("click", CalculateCGPA2);
reset2.addEventListener("click", Reset2);

s1.addEventListener("click", show_main1);
s2.addEventListener("click", show_main2);
sem.addEventListener("change", dropdown);


// Show Main1 and hide Main2
function show_main1() {
    document.getElementById("main1").style.display = "block";
    document.getElementById("main2").style.display = "none";
}

// Show Main2 and hide Main1, thn show 1st semester input field
function show_main2() {
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "block";
    document.getElementsByClassName("sem-data")[0].style.display = "flex";
}

// Remove all semesters and thn show selected no. of semesters.... show 1st sem by default
function dropdown() {
    var length = sem.value;
    for (let i = 1; i < 8; i++) {
        document.getElementsByClassName("sem-data")[i].style.display = "none";
    }
    for (let i = 1; i < length; i++) {
        document.getElementsByClassName("sem-data")[i].style.display = "flex";
    }
    popup2.classList.remove("open-popup");  //Remove Pop-up
    main2_result_details.style.display = "none";   //Hide resultdetails on Main2 page
}


// Function to calculate Semester CGPA (Main1)
function CalculateCGPA1() {
    var c, g, value = creditsum = 0;
    for (let i = 1; i < 10; i++) {
        credit = document.getElementById("credit" + i);
        grade = document.getElementById("grade" + i);
        c = parseFloat(credit.value);
        g = parseFloat(grade.value);
        if (c != 0 && g == 0) {   //If credit is chosen by grade is missing
            if (i < 7) {
                alert("Grade Missing for Subject" + i);
            }
            else {
                alert("Grade Missing for Lab" + (8 - i));
            }
            return;
        }
        if (c != 0 && g == -1) {   //For Arrears..Don't include that subject
            c = g = 0;
        }
        value += (c * g);
        creditsum += c;
    }

    //If data exists thn assign values to result, ans... thn show openup and resultdetails
    if (creditsum) {
        pop_up_result1.innerText = parseFloat(value / creditsum).toFixed(3);
        main_result1.innerText = parseFloat(value / creditsum).toFixed(3);
        popup1.classList.add("open-popup");  //Open Pop-up with animation
        main1_result_details.style.display = "flex";  //Show resultdetails on Main1 page
    }
    else {
        alert("Please Enter Data !")  //Bcoz no data is selected
    }
}

// Function to result Semester CGPA values (Main1)
function Reset1() {
    for (let i = 1; i < 10; i++) {
        credit = document.getElementById("credit" + i);
        grade = document.getElementById("grade" + i);
        credit.selectedIndex = null;
        grade.selectedIndex = null;
    }

    main1_result_details.style.display = "none";   //Hide resultdetails on Main2 page
}

// Function to calculate Cumilative CGPA (Main2)
function CalculateCGPA2() {
    var length = sem.value;
    var cg, sum = totalcredits = 0;
    for (let i = 1; i <= length; i++) {
        cg = document.getElementById("cgpasem" + i);
        cr = document.getElementById("sem" + i + "credit");
        var defaultVal = cg.defaultValue;
        var currentVal = cg.value;
        var credits = cr.value;
        if (defaultVal == currentVal) {
            alert("CGPA Missing for Semester " + i);   //If no value is entered
            return;
        }
        else if (parseFloat(currentVal) < 0 || parseFloat(currentVal) > 10) {
            alert("Invalid Input for Semester " + i);
            return;
        }
        else {
            sum += parseFloat(currentVal) * parseInt(credits);
            totalcredits += parseInt(credits);
        }
    }

    //If data exists thn assign values to result, ans... thn show openup and resultdetails
    if (sum) {
        pop_up_result2.innerText = parseFloat(sum / totalcredits).toFixed(3);
        main_result2.innerText = parseFloat(sum / totalcredits).toFixed(3);
        console.log(totalcredits);
        console.log(sum);
        popup2.classList.add("open-popup");   //Open Pop-up with animation
        main2_result_details.style.display = "flex";  //Show resultdetails on Main2 page
    }
    else {
        alert("Please Enter Data !")   //Bcoz no data is selected
    }
}

// Function to reset Cumilative CGPA Values (Main2)
function Reset2() {
    for (let i = 1; i < 9; i++) {
        document.getElementById("cgpasem" + i).value = null;
        document.getElementById("sem" + i + "credit").value = null;
    }
    main2_result_details.style.display = "none";   //Hide resultdetails on Main2 page
}

// Function to close Popups for both Main1 and Main2
function closePopup1() {
    popup1.classList.remove("open-popup");
}

function closePopup2() {
    popup2.classList.remove("open-popup");
}