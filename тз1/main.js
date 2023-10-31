const button1 = document.querySelector('.btn-warning');

const title = document.querySelector('.header');

// 2.1

const hiddenTitle = () => {
    if ( title.style.display === 'none') {
        title.style.display = 'flex';
    } else {
        title.style.display = 'none';
    
    }
}

button1.addEventListener('click', hiddenTitle);

// 2.2
const button2 = document.querySelector('.btn-success');
const left = document.querySelector('.left');
const center = document.querySelector('.center');

const changeBlocks = () => {
    if ( left.style.order = 1) {
        left.style.order = 2;
    } else {
        left.style.order = 1;
    }
};

button2.addEventListener('click', changeBlocks);



// 2.3 Modal window

const modal = document.querySelector('.modal');


modal.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opasity 300ms ease-in-out;
`;

const openModal = () => {
    modal.style.visibility = 'visible';
    modal.style.opacity = 1;
}
openModal ()

const closeModal = event => {
    target = event.target;
    if (target === modal || target.closest('.modal_close')) {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.visibility = 'hidden';
        }, 300 );
    } 
}

modal.addEventListener('click', closeModal);

