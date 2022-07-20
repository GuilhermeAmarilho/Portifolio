const sobre = document.querySelector('.sobre__head');

sobre.addEventListener('click', function (e) {
    if(e.target.classList[0] != 'sobre__head'){

        const elemento = document.querySelector( 'div.' + e.target.classList[0] ); // pega o elemento atual 
        document.querySelector('.sobre__atual').classList.remove('sobre__atual'); // remove o sobre__atual
        elemento.classList.add('sobre__atual'); // adiciona o sobre__atual no elemento pego
        
        const content = document.querySelectorAll('.'+e.target.classList[0])[3];
        document.querySelector('.sobre__content__atual').classList.remove('sobre__content__atual'); // remove o sobre__atual
        content.classList.add('sobre__content__atual');
    }
})