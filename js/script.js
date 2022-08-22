// My questions: 
// why doesn't console.log() show the result after I enter correct email? 
// But if I don't enter email, console.log() can show other fields' result?


// Variables
let employeeForm = document.getElementById("empForm");
let btn = document.getElementById("submit");

// Functions
function helper() {
    // Preventing the Browser's Default Behavior
    document.preventDefault;  
};

function saveEmployee() {

    if (window.confirm('Are you sure to submit?')) {
        var digitId = document.getElementById("id").value;
        var empName = document.getElementById("name").value;
        var digitExt = document.getElementById("ext").value;
        var empEmail = document.getElementById("email").value.indexOf("@");
        var empDept = document.getElementById("department").value;
        
        let submitOk = "true";
        if (empEmail == "-1"){
            alert("Not a valid email!");
            submitOk == "false";
        };
        
        if (submitOk == "false"){
            return false;
        };

        console.log('Saved successfully.')
        console.log("ID: " + digitId);
        console.log("Name: " + empName);
        console.log("Extension: " + digitExt);
        console.log("Email: " + empEmail);
        console.log("Department: " + empDept);
    } else {        
        console.log('Canceled.'); 
        digitId = "";
        empName = "";
        digitExt = "";
        empEmail = "";
        empDept = "";       
    };
};

// Event Listenner
employeeForm.addEventListener('load', helper);
btn.addEventListener('click', saveEmployee, false);
