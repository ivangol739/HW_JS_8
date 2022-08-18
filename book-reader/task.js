const buttons = document.querySelector('.book__controls');
const book = document.querySelector('.book')


let foo = () => {
    buttons.addEventListener('click', (event) => {
        event.preventDefault();
        if (!event.target.classList.contains('font-size_active')) {
            buttons.querySelector('.font-size_active').classList.toggle('font-size_active');
            event.target.classList.toggle('font-size_active');
            if (event.target.getAttribute('data-size') === 'small') {
                book.classList.add('book_fs-small');
                book.classList.remove('book_fs-big');
            } else if (event.target.getAttribute('data-size') === 'big') {
                book.classList.add('book_fs-big');
                book.classList.remove('book_fs-small');
            } else {
                book.classList.remove('book_fs-big');
                book.classList.remove('book_fs-small');
            }
        }
    })
}

foo()