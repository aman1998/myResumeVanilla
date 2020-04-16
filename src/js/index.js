let btn = document.querySelectorAll('.skills__btn')
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close__iconic');

let getModal = () => {
    modal.style.display = "block";
}
let closeModal = () => {
    modal.style.display = "none";
}

closeBtn.addEventListener('click', closeModal )

btn.forEach((item) => {
    item.addEventListener('click', getModal)
})

