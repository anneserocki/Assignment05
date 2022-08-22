// Preventing the Browser's Default Behavior
document.preventDefault;

// Variables
let employeeForm = document.getElementById("empForm");
let digitId = document.getElementById("id");
let empName = document.getElementById("name");
let digitExt = document.getElementById("ext");
let empEmail = document.getElementById("email");
let empDept = document.getElementById("department"); 
let btn = document.getElementById("submit");

// Functions
function helper() {
    digitId ="";
    empName ='';
    digitExt ="";
    empEmail ="";
    empDept ="";
};

function saveEmployee() {
    if (window.confirm('Are you sure to submit?')) {
        console.log('Saved successfully.')
        console.log(digitId);
        console.log(empName);
        console.log(digitExt);
        console.log(empEmail);
        console.log(empDept);
    } else {
        console.log('Canceled.');
    };
};

// Listenners
employeeForm.addEventListener('load', helper);
btn.addEventListener('click', saveEmployee, false);
