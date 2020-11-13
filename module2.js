export function circles() {
    let circle = document.createElement('div');
    circle.classList.add("circle");
    document.querySelector(".circles").appendChild(circle);
    circle.addEventListener("click", function() {
        circle.classList.toggle('dark');
    })
}