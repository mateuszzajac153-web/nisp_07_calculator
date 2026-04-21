const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";
let previous = "";
let operator = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        // Czyszczenie
        if (action === "clear") {
            current = "";
            previous = "";
            operator = null;
            display.textContent = "0";
            return;
        }

        // Liczby
        if (value && !isNaN(value)) {
            current += value;
            display.textContent = current;
            return;
        }

        // Operator +
        if (value === "+") {
            if (current === "") return;
            previous = current;
            current = "";
            operator = "+";
            return;
        }

        // Równa się
        if (action === "equal") {
            if (operator === "+" && previous && current) {
                const result = Number(previous) + Number(current);
                display.textContent = result;

                // reset po obliczeniu
                current = result.toString();
                previous = "";
                operator = null;
            }
        }
    });
});