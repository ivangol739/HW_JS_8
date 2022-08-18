const reveals = Array.from(document.querySelectorAll('.reveal'));
const reveal = document.querySelectorAll('.reveal')
let foo = (el) => {
    const {top, bottom} = el.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        return false
    }
    return true 
}


window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        if (foo(el)) {
            el.classList.toggle('reveal_active')
        }
    })
})

