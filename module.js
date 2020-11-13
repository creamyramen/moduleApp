export function squares() {
    let square = document.createElement('div');
    square.classList.add("square");
    document.querySelector(".squares").appendChild(square);
    square.addEventListener("click", function() {
        square.classList.toggle('dark');
    })
}