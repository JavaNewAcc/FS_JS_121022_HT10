window.onload = () => {
    let startBtn = document.createElement('button');
    startBtn.classList.add('btn', 'btn-success', 'm-auto');
    startBtn.innerText = 'Start moving yellow DIV';
    let startPoint = document.querySelector('.startPoint');
    startPoint.after(startBtn);
    startBtn.parentElement.classList.add('d-flex', 'flex-column')

    let moveFieldExist = false;
    let moveField;
    startBtn.addEventListener('click', () => {
        if (!moveFieldExist) {
            moveFieldExist = true;
            moveField = document.createElement('div');
            moveField.style.height = '75vw';
            moveField.style.width = '90vh';
            moveField.style.backgroundColor = 'RGBA(0,0,0,0.25)';
            moveField.style.position = 'relative';
            moveField.classList.add('m-auto', 'mt-2', 'mb-2');
            moveField.style.display = 'block';
            startBtn.after(moveField);
            startBtn.scrollIntoView();

            moveDiv = document.createElement('div');
            moveDiv.style.height = '25px';
            moveDiv.style.width = '25px';
            moveDiv.style.background = 'yellow';
            moveDiv.id = 'moveDiv';
            moveDiv.style.display = 'flex';
            moveField.appendChild(moveDiv);

            startBtn.innerText = 'Close';
        }

        else {
            moveField.parentElement.removeChild(moveField);
            startBtn.innerText = 'Start moving yellow DIV';
            moveFieldExist = false;
        }
        console.log(moveField)
    })

    let stepSize = 10;
    let startPosition = 0;


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
        console.log(event.key);
    }

    function moveLeft(step) {
        console.log(event.key);

    }

    function moveUp(step) {
        console.log(event.key);

    }

    function moveDown(step) {
        console.log(event.key);

    }
}