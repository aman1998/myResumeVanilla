window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tab = document.querySelectorAll('.projects__tab');
    let tabHeader = document.querySelector('.projects__header');
    let tabContent = document.querySelectorAll('.projects__tabcontent');

    let hideContent = (a) => {
        for(let i = a; i < tabContent.length; i ++) {
            tabContent[i].classList.add('hide');
            tabContent[i].classList.remove('show');
        }
    }

    hideContent(1)

    let showContent = (b) => {
        tabContent[b].classList.contains('hide') ? tabContent[b].classList.remove('hide') && tabContent.classList.add('show') : ""
    }

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
        for(let i = 0; i < tab.length; i++) {
            if(target == tab[i]) {
                hideContent(0);
                showContent(i);
                break;
            }
        }
    })
})
