let clickedCard = null;
let combosFounds = 0;


function onCardClicked(e) {
    const target = e.currentTarget;

    if (target === clickedCard || target.className.includes('done')) {
        return;
    }

    target.className = target.className.replace('color-hidden', '').trim();
    target.className += ' done';

    if (!clickedCard) {
        clickedCard = target;
    } else if (clickedCard){
        if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
            console.log('carte pas pareil')
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace(' done', '').trim() + ' color-hidden';
                target.className = target.className.replace(' done', '').trim() + ' color-hidden';
                clickedCard = null;
            }, 500);
        } else {
            combosFounds++;
            clickedCard = null;
            if (combosFounds === 8) {
                alert('Tu as gagné !')
            }
        }
    }
}
