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

    let error = true;

    regWinOpener.addEventListener('click', formOpen)

    function formOpen() {
        if (!regFormExist) {
            regFormExist = true;
            regWinBg.classList.add('justify-content-center', 'align-items-center');
            regWin.style.borderRadius = '10px';
            regWin.style.backgroundColor = 'black';
            regWin.classList.add('col-10', 'col-sm-8');
            regWin.classList.remove('rounded', 'border-secondary');
            regWinBg.appendChild(regWin);
            let form = document.createElement('form');
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
            formEmail.type = "text";
            formEmail.classList.add('form-control', 'mt-3');
            formEmail.style.borderColor = "RGB(98,0,237)";
            formEmail.style.borderRadius = '10px';
            formEmail.style.backgroundColor = 'black';
            formEmail.style.color = '#fff';
            formEmail.placeholder = "Введіть Ваш e-mail";
            form.appendChild(formEmail);

            let formPhone = document.createElement('input');
            formPhone.classList.add('form-control', 'mt-3');
            formPhone.style.borderColor = "RGB(98,0,237)";
            formPhone.style.borderRadius = '10px';
            formPhone.style.backgroundColor = 'black';
            formPhone.style.color = '#fff';
            formPhone.placeholder = "Введіть Ваш телефон";
            form.appendChild(formPhone);

            let formPassword = document.createElement('input');
            formPassword.classList.add('form-control', 'mt-3');
            formPassword.type = 'password';
            formPassword.style.borderColor = "RGB(98,0,237)";
            formPassword.style.borderRadius = '10px';
            formPassword.style.backgroundColor = 'black';
            formPassword.style.color = '#fff';
            formPassword.placeholder = "Введіть пароль";
            form.appendChild(formPassword);

            let formPasswordConf = document.createElement('input');
            formPasswordConf.classList.add('form-control', 'mt-3', 'mb-3');
            formPasswordConf.type = 'password';
            formPasswordConf.style.borderColor = "RGB(98,0,237)";
            formPasswordConf.style.borderRadius = '10px';
            formPasswordConf.style.backgroundColor = 'black';
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
            regBtn.addEventListener('click', function () {
                if (error) { console.log("Please fill all fields properly") }
                else {
                    console.log("Form sumitted");
                    setTimeout(formOpen, 3000);
                }
            });

            let signInBtn = document.createElement('button');
            signInBtn.innerText = 'Have account? SIgn In';
            signInBtn.style.backgroundColor = "RGB(55,0,179)";
            signInBtn.style.borderRadius = '15px';
            signInBtn.style.color = '#fff';
            signInBtn.classList.add('btn', 'mt-3', 'mb-3');
            form.appendChild(signInBtn);
            signInBtn.addEventListener('click', function () { })

            onFocusOut(formFullName);
            emailOnly(formEmail);
            numbersOnly(formPhone);
            onFocusOut(formPassword);
            onFocusOut(formPasswordConf);


            regWinBg.style.display = 'flex';
        }
        else {
            regWinBg.style.display = 'flex';
        }
    }


    regWinBg.addEventListener('click', function (event) {
        if (event.target == regWinBg) {
            let confBg = document.createElement('div');
            confBg.style.height = '100%';
            confBg.style.width = '100%';
            confBg.style.backgroundColor = 'rgba(0, 0, 0, 1);'
            confBg.style.diplay = 'block';
            confBg.classList.add('d-flex', 'justify-content-center', 'align-items-center');
            confBg.style.zIndex = '1';
            let confHeder = document.createElement('p');
            let confMsg = document.createElement('div');
            let confButtons = document.createElement('div');
            confMsg.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'w-75');
            confMsg.style.borderRadius = '15px';
            confMsg.style.backgroundColor = 'black';
            confMsg.style.border = 'solid 1px RGB(98,0,237)';
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
            regWinBg.append(confBg);


            confY.addEventListener('click', function () {
                regWinBg.removeChild(confBg);
                regWinBg.style.display = 'none';
            });

            confN.addEventListener('click', function () { regWinBg.removeChild(confBg); });
        }
    })

    function onFocusOut(element) {
        element.addEventListener('focusout', function () {
            if (element.value == '') {
                element.style.borderColor = 'red';
                error = true;
            }
            else {
                element.style.borderColor = 'green';
                error = false
            }
        })
    }

    function numbersOnly(element) {
        let errorPhoneMsg = document.createElement('p');
        errorPhoneMsg.classList.add('p-0', 'm-0');
        errorPhoneMsg.id = 'errorPhoneMsg';
        element.addEventListener('focusout', function () {
            let numCounter = 0;
            if (element.value == '') {
                element.style.borderColor = 'red';
                error = true;
            }
            else {
                let [...elemArr] = element.value;
                elemArr.forEach(arrElement => {

                    if (arrElement.match(/^[0-9]+$/) != null) {
                        numCounter++;
                    }
                    if (numCounter != elemArr.length) {
                        errorPhoneMsg.innerText = 'Введіть тільки цифри';
                        element.after(errorPhoneMsg);
                        element.style.borderColor = 'red';
                        error = true;
                    }
                    else {
                        element.parentElement.removeChild(document.querySelector('#errorPhoneMsg'));
                        element.style.borderColor = 'green';
                        error = false;
                    }
                })
            }
        })
    }

    function emailOnly(element) {
        let errorEmailMsg = document.createElement('p');
        errorEmailMsg.classList.add('p-0', 'm-0');
        errorEmailMsg.id = 'errorEmailMsg';
        element.addEventListener('focusout', function () {
            // let errorCounter = 0;
            let dogCounter = 0;
            if (element.value == '') {
                element.style.borderColor = 'red';
                error = true;
            } else if ([...element.value].indexOf('@') == -1) {
                errorEmailMsg.innerText = 'Введіть вірний емейл';
                element.after(errorEmailMsg);
                element.style.borderColor = 'red';
                error = true;
            }
            else {
                [...element].value.forEach(arrElement => {
                    if (arrElement == "@") {
                        dogCounter++;
                    }
                    if (dogCounter > 0) {
                        errorEmailMsg.innerText = 'Введіть вірний емейл';
                        element.after(errorEmailMsg);
                        element.style.borderColor = 'red';
                        error = true;
                    }
                    else {
                        if (error) { element.parentElement.removeChild(errorEmailMsg); }
                        element.style.borderColor = 'green';
                        dogCounter = 0;
                        error = false;
                    }
                });
            }

        })
    }
}


//             else if ([...element.value].indexOf('@') == -1) {
//         if (errorCounter == 0) {
//             errorEmailMsg.innerText = 'Введіть вірний емейл';
//             element.after(errorEmailMsg);
//             element.style.borderColor = 'red';
//             errorCounter++;
//             error = true;
//         }
//     }
//     else {
//         [...element.value].forEach(arrElement => {
//             if (arrElement == "@") { dogCounter++ }
//         });

//         if (dogCounter > 1) {
//             if (errorCounter == 0) {
//                 errorEmailMsg.innerText = 'Введіть вірний емейл';
//                 element.after(errorEmailMsg);
//                 element.style.borderColor = 'red';
//                 errorCounter++;
//                 error = true;
//             }
//         }
//         else {
//             element.parentElement.removeChild(errorEmailMsg);
//             element.style.borderColor = 'green';
//             dogCounter = 0;
//             error = false;
//         }
//     }
// })
// }
// }