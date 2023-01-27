window.onload = () => {
    let startBtn = document.createElement('button');
    startBtn.classList.add('btn', 'btn-success', 'm-auto');
    startBtn.innerText = 'Start moving yellow DIV';
    let startPoint = document.querySelector('.startPoint');
    startPoint.after(startBtn);
    startBtn.parentElement.classList.add('d-flex', 'flex-column')

    let moveFieldExist = false;
    let moveField;
    let moveDiv;

    startBtn.addEventListener('click', () => {
        if (!moveFieldExist) {
            moveFieldExist = true;
            moveField = document.createElement('div');
            moveField.style.height = '75vh';
            moveField.style.width = '90vw';
            moveField.style.backgroundColor = 'RGBA(0,0,0,0.25)';
            moveField.style.position = 'relative';
            moveField.classList.add('m-auto', 'mt-2', 'mb-2');
            moveField.style.display = 'block';
            startBtn.after(moveField);
            startBtn.scrollIntoView();

            moveDiv = document.createElement('div');
            moveDiv.style.height = '50px';
            moveDiv.style.width = '50px';
            moveDiv.style.left = '0px';
            moveDiv.style.background = 'yellow';
            moveDiv.id = 'moveDiv';
            moveDiv.style.position = 'absolute';
            moveDiv.style.display = 'flex';
            moveField.appendChild(moveDiv);

            startBtn.innerText = 'Close';
        }

        else {
            moveField.parentElement.removeChild(moveField);
            startBtn.innerText = 'Start moving yellow block';
            moveFieldExist = false;
        }
    })

    let stepSize = 10;

    document.addEventListener('keydown', (e) => {
        if (moveFieldExist) {
            e.preventDefault();
            switch (e.key) {
                case 'ArrowUp':
                    moveUp(stepSize);
                    break;
                case 'ArrowDown':
                    moveDown(stepSize);
                    break;
                case 'ArrowLeft':
                    moveLeft(stepSize);
                    break;
                case 'ArrowRight':
                    moveRight(stepSize);
                    break;
                default:
                    break;
            }
        }
    })


    function moveRight(step) {
        let moveElem = document.querySelector('#moveDiv');
        if ((moveElem.offsetLeft + moveDiv.clientWidth + step) > moveElem.parentElement.clientWidth) {
            moveElem.parentElement.animate([{ boxShadow: '7px 0 5px -3px red' },
            { boxShadow: '0px 0 0px -3px red' }], 500);
        }
        else {
            moveElem.style.left = (moveElem.offsetLeft + step) + 'px';
        }
    }

    function moveLeft(step) {
        let moveElem = document.querySelector('#moveDiv');
        if (moveElem.offsetLeft <= 0) {
            moveElem.parentElement.animate([{ boxShadow: '-7px 0 5px -3px red' },
            { boxShadow: '0px 0 0px -3px red' }], 500);
        }

        else {
            moveElem.style.left = (moveElem.offsetLeft - step) + 'px';
        }
    }

    function moveUp(step) {
        let moveElem = document.querySelector('#moveDiv');
        if (moveElem.offsetTop <= 0) {
            moveElem.parentElement.animate([{ boxShadow: '0px -7px 5px -3px red' },
            { boxShadow: '0px 0 0px -3px red' }], 500);
        }
        else {
            moveElem.style.top = (moveElem.offsetTop - step) + 'px';
        }
    }

    function moveDown(step) {
        let moveElem = document.querySelector('#moveDiv');
        if ((moveElem.offsetTop + moveDiv.clientWidth + step) > moveElem.parentElement.clientHeight) {
            moveElem.parentElement.animate([{ boxShadow: '0px 7px 5px -3px red' },
            { boxShadow: '0px 0 0px -3px red' }], 500);
        }
        else {
            moveElem.style.top = (moveElem.offsetTop + step) + 'px';
        }
    }
}