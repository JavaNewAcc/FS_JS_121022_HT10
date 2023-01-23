window.onload = function () {

    let drawingLink = document.querySelector('.drawingLink');

    drawingLink.style.textDecoration = "underline";

    drawingLink.addEventListener('click', function () {
        let picDiv = document.querySelector('.picDiv');
        let pic = document.querySelector('.picDiv img')
        if (picDiv != null) { picDiv.remove(pic) }
        else {
            picDiv = document.createElement('div');
            pic = document.createElement('img');
            pic.setAttribute('src', './img/specimen.jpg');
            pic.style.height = '300px';
            picDiv.appendChild(pic);
            drawingLink.after(picDiv);
            picDiv.classList.add('picDiv');
        }
    })

    let regWinBg = document.querySelector('.regWinBg');

    let regWinOpener = document.querySelector('.openFormBtn');

    let regWin = document.querySelector('.regWin');

    let regFormExist = false;

    regWinOpener.addEventListener('click', function () {
        if (!regFormExist) {
            regFormExist = true;
            regWinBg.classList.add('justify-content-center', 'align-items-center');
            regWin.style.borderRadius = '10px';
            regWin.classList.add('col-10', 'col-sm-8');
            regWin.classList.remove('rounded', 'border-secondary');
            let form = document.createElement('form');
            regWinBg.appendChild(regWin);
            form.classList.add('d-flex', 'flex-column', 'row', 'm-0', 'p-3');
            regWin.appendChild(form);
            let formHeader = document.createElement('h3');
            form.appendChild(formHeader);
            formHeader.innerText = 'Register';
            formHeader.classList.add('text-center', 'pt-4', 'pb-4', 'fw-bold');

            let formFullName = document.createElement('input');
            formFullName.type = "text";
            formFullName.classList.add('form-control', 'mt-3');
            formFullName.style.borderColor = "RGB(98,0,237)";
            formFullName.style.borderRadius = '10px';
            formFullName.style.backgroundColor = 'black';
            formFullName.style.color = '#fff';
            formFullName.placeholder = "Введіть Ваше повне ім'я";
            form.appendChild(formFullName);

            let formEmail = document.createElement('input');
            formEmail.type = "email";
            formEmail.classList.add('form-control', 'mt-3');
            formEmail.style.borderColor = "RGB(98,0,237)";
            formEmail.style.borderRadius = '10px';
            formEmail.style.backgroundColor = 'transparent';
            formEmail.style.color = '#fff';
            formEmail.placeholder = "Введіть Ваш e-mail";
            form.appendChild(formEmail);

            let formPhone = document.createElement('input');
            formPhone.classList.add('form-control', 'mt-3');
            formPhone.style.borderColor = "RGB(98,0,237)";
            formPhone.style.borderRadius = '10px';
            formPhone.style.backgroundColor = 'transparent';
            formPhone.style.color = '#fff';
            formPhone.placeholder = "Введіть Ваш телефон";
            form.appendChild(formPhone);

            let formPassword = document.createElement('input');
            formPassword.classList.add('form-control', 'mt-3');
            formPassword.type = 'password';
            formPassword.style.borderColor = "RGB(98,0,237)";
            formPassword.style.borderRadius = '10px';
            formPassword.style.backgroundColor = 'transparent';
            formPassword.style.color = '#fff';
            formPassword.placeholder = "Введіть пароль";
            form.appendChild(formPassword);

            let formPasswordConf = document.createElement('input');
            formPasswordConf.classList.add('form-control', 'mt-3', 'mb-3');
            formPasswordConf.type = 'password';
            formPasswordConf.style.borderColor = "RGB(98,0,237)";
            formPasswordConf.style.borderRadius = '10px';
            formPasswordConf.style.backgroundColor = 'transparent';
            formPasswordConf.style.color = '#fff';
            formPasswordConf.placeholder = "Підтвердіть пароль";
            form.appendChild(formPasswordConf);

            let regBtn = document.createElement('button');
            regBtn.innerText = 'Register';
            regBtn.style.backgroundColor = "RGB(98,0,237)";
            regBtn.style.borderRadius = '15px';
            regBtn.style.color = '#fff';
            regBtn.classList.add('btn', 'mt-5');
            form.appendChild(regBtn);
            regBtn.addEventListener('click', function () { });

            let signInBtn = document.createElement('button');
            signInBtn.innerText = 'Have account? SIgn In';
            signInBtn.style.backgroundColor = "RGB(55,0,179)";
            signInBtn.style.borderRadius = '15px';
            signInBtn.style.color = '#fff';
            signInBtn.classList.add('btn', 'mt-3', 'mb-3');
            form.appendChild(signInBtn);
            signInBtn.addEventListener('click', function () { })

            regWinBg.style.display = 'flex';
        }
        else {
            regWinBg.style.display = 'flex';
        }

    });

    regWinBg.addEventListener('click', function (event) {
        if (event.target == regWinBg) {
            let confBg = document.createElement('div');
            confBg.style.zIndex = '10';
            confBg.style.height = '100%';
            confBg.style.width = '100%';
            confBg.style.backgroundColor = 'rgba(0, 0, 0, 0.8);'
            confBg.style.diplay = 'flex';
            confBg.classList.add('justify-content-center', 'align-items-center');
            let confHeder = document.createElement('p');
            let confMsg = document.createElement('div');
            let confButtons = document.createElement('div');
            confMsg.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');
            confHeder.innerText = 'Ви точно хочете вийти?';
            confHeder.style.color = '#fff';
            confHeder.classList.add('mt-3', 'mb-0')
            confButtons.classList.add('mt-0', 'mb-3', 'd-flex', 'justify-content-center');
            let confY = document.createElement('button');
            confY.innerText = 'Exit';
            confY.style.color = '#fff';
            confY.style.backgroundColor = 'black';
            confY.classList.add('btn', 'm-3');
            confY.style.backgroundColor = "RGB(98,0,237)";
            confY.style.borderRadius = '15px';
            let confN = document.createElement('button');
            confN.innerText = 'Cancel';
            confN.style.color = '#fff';
            confN.style.backgroundColor = 'black'; confN.classList.add('btn', 'm-3');
            confN.style.backgroundColor = "RGB(55,0,179)";
            confN.style.borderRadius = '15px';
            confButtons.appendChild(confY);
            confButtons.appendChild(confN);
            confMsg.appendChild(confHeder);
            confMsg.appendChild(confButtons);
            confBg.appendChild(confMsg);
            regWinBg.appendChild(confBg);

            confY.addEventListener('click', function () {
                regWinBg.removeChild(confBg);
                regWinBg.style.display = 'none';
            });

            confN.addEventListener('click', function () { regWinBg.removeChild(confBg); });
        }
    })
}