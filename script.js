const display = document.getElementById("display");
const title = document.getElementById("title")
const colors = ["yellow", "orange", "red"];
let variable = 0;

function appendTodisplay(input){
    if (display.value == "error" || display.value == "Infinity") {
        display.value = "";
    }
    display.value += input;

}

function cleardisplay(){
    display.value = "";

}

function calculate() {
    try {
        if (display.value.trim() === "") {
            display.value = "";
            return;
        }
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error";
    }
}

function changecolors(){
    variable = (variable + 1) % colors.length;
    title.style.color = colors[variable];
}
setInterval(changecolors, 1000);