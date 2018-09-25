function inputItem(item) {
    /* looks for what I typed in and adds to what is already in display*/
    document.getElementById("display").value += item;
}

function clearButton() {
    /* clear out display */
    document.getElementById("display").value = "";

}

function equalsButton() {
    /* take whats in my display and do the math */
    let box = document.getElementById("display");
    let total = eval(box.value);
    box.value = total;


}