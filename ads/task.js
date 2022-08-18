const rotator = document.querySelector('.rotator')

let foo = () => {
    let rotator_case = rotator.querySelector('.rotator__case_active')
    rotator_case.classList.toggle('rotator__case_active')
    if (rotator_case === rotator.lastElementChild) {
        rotator.firstElementChild.classList.toggle('rotator__case_active')
    } else {
        rotator_case.nextElementSibling.classList.toggle('rotator__case_active')
    }
}

setInterval(foo, 1000)