window.onload = () => {
    let productPage = '';
    let pizzaPageBtn = document.querySelector('#pizzaPageBtn');
    let productPageExist = false;
    let modWinTimer = 5;

    pizzaPageBtn.addEventListener('click', function () {
        if (!productPageExist) {
            addProdPg();
            pizzaPageBtn.innerText = "Скасувати замовлення і закрити каталог"
        }
        else {
            pizzaPageBtn.parentElement.removeChild(pizzaPageBtn.parentElement.lastElementChild);
            productPageExist = false;
            pizzaPageBtn.innerText = "Відкрити каталог для замовлення";
        }
    })

    function addProdPg() {
        if (!productPageExist) {
            productPageExist = true;
            productPage = document.createElement('div');
            pizzaPageBtn.after(productPage);
            productPage.classList.add('w-100', 'mt-3', 'd-flex', 'justify-content-evenly', 'flex-wrap');

            addProdElem(productPage, './img/pizzaBiancaMeat.jpg', `Б'янка Міт`, 250);
            addProdElem(productPage, './img/pizzaCesar.jpg', 'Цезар', 310);
            addProdElem(productPage, './img/pizzaDiMare.jpg', 'ДіМаре', 350);
            addProdElem(productPage, './img/pizzaFourCheese.jpg', 'Чотири Сири', 299);
            addProdElem(productPage, './img/pizzaHawaii.jpg', 'Гавайї', 355);
            addProdElem(productPage, './img/pizzaMargarita.jpg', 'Маргарита', 305);
            addProdElem(productPage, './img/pizzaMeatKonFungi.jpg', 'Чікен Альфредо', 355);
            addProdElem(productPage, './img/pizzaMeatSupreme.jpg', 'Міт Супрім', 375);
            addProdElem(productPage, './img/pizzaOlio.jpg', 'Оліо', 350);
            addProdElem(productPage, './img/pizzaPearCheese.jpg', 'Сирна з грушею', 340);
            addProdElem(productPage, './img/pizzaPepperoni.jpg', 'Пеппероні', 350);
            addProdElem(productPage, './img/pizzaPollo.jpg', 'Полло', 370);
            addProdElem(productPage, './img/pizzaSicilia.jpg', 'Сіцилія', 320);
            addProdElem(productPage, './img/pizzaVitello.jpg', 'Вітелло', 290);

            pizzaPageBtn.scrollIntoView();
        }
    }

    function addProdElem(parElem, imgURL, pizzaName, basePrice) {
        let itemID = parseInt(Math.random() * 100000);
        let fillerAdd = 0;
        let sizeAdd = 0;
        let toppingAdd = 0;
        let delAdd = 0;
        let basketExist = false;
        let delChosen = false;
        let prodElement = document.createElement('div');
        parElem.appendChild(prodElement);
        prodElement.classList.add('p-1', 'm-1', 'd-flex', 'flex-column', 'col-6', 'col-sm-4', 'col-md-3', 'prodElement', 'rounded');
        prodElement.style.backgroundColor = 'RGBA(0,128,0,0.1)'
        let prodIMG = document.createElement('img');
        prodIMG.setAttribute('src', `${imgURL}`);
        prodIMG.classList.add('rounded-3')
        prodElement.appendChild(prodIMG);

        let prodName = document.createElement('h6');
        prodName.innerText = `${pizzaName}`;
        prodName.classList.add('text-center', 'pt-3', 'fw-bold');
        prodElement.appendChild(prodName);

        let sizeInput = document.createElement('div');
        sizeInput.classList.add('dropdown', 'p-1');
        prodElement.appendChild(sizeInput);
        let sizeBtn = document.createElement('button');
        sizeBtn.classList.add('btn', 'btn-secondary', 'btn-sm', 'dropdown-toggle', 'p-1', 'w-100');
        sizeBtn.type = 'button';
        sizeBtn.setAttribute('data-bs-toggle', 'dropdown');
        sizeBtn.setAttribute('aria-expanded', 'false');
        sizeBtn.innerText = 'Розмір піци';
        sizeInput.appendChild(sizeBtn);
        let sizeUl = document.createElement('ul');
        sizeUl.classList.add('dropdown-menu', 'p-0', 'm-0');
        sizeBtn.addEventListener('click', function () { sizeUl.style.minWidth = `${sizeBtn.getBoundingClientRect().width}px`; })
        sizeInput.appendChild(sizeUl);

        let liS = document.createElement('li');
        liS.classList.add('dropdown-item', 'p-1', 'm-0');
        liS.href = '#';
        liS.innerText = 'Маленька';
        sizeUl.appendChild(liS);
        let liM = document.createElement('li');
        liM.classList.add('dropdown-item', 'p-1', 'm-0');
        liM.href = '#';
        liM.innerText = 'Середня';
        sizeUl.appendChild(liM);
        let liL = document.createElement('li');
        liL.classList.add('dropdown-item', 'p-1', 'm-0');
        liL.href = '#';
        liL.innerText = 'Велика';
        sizeUl.appendChild(liL);

        let fillerInput = document.createElement('div');
        fillerInput.classList.add('dropdown', 'p-1');
        prodElement.appendChild(fillerInput);
        let fillerBtn = document.createElement('button');
        fillerBtn.classList.add('btn', 'btn-secondary', 'btn-sm', 'dropdown-toggle', 'p-1', 'w-100');
        fillerBtn.type = 'button';
        fillerBtn.setAttribute('data-bs-toggle', 'dropdown');
        fillerBtn.setAttribute('aria-expanded', 'false');
        fillerBtn.innerText = 'Начинка';
        fillerInput.appendChild(fillerBtn);
        let fillerUl = document.createElement('ul');
        fillerUl.classList.add('dropdown-menu', 'p-0', 'm-0');
        fillerBtn.addEventListener('click', function () { fillerUl.style.minWidth = `${fillerBtn.getBoundingClientRect().width}px`; })
        fillerInput.appendChild(fillerUl);

        let liCh = document.createElement('li');
        liCh.classList.add('dropdown-item', 'p-1', 'm-0');
        liCh.href = '#';
        liCh.innerText = 'Курятина';
        fillerUl.appendChild(liCh);
        let liB = document.createElement('li');
        liB.classList.add('dropdown-item', 'p-1', 'm-0');
        liB.href = '#';
        liB.innerText = 'Телятина';
        fillerUl.appendChild(liB);
        let liV = document.createElement('li');
        liV.classList.add('dropdown-item', 'p-1', 'm-0');
        liV.href = '#';
        liV.innerText = 'Овочі';
        fillerUl.appendChild(liV);

        let addToppingP = document.createElement('p');
        addToppingP.innerText = 'Додаткові топпінги:';
        prodElement.appendChild(addToppingP);
        addToppingP.classList.add('m-0', 'p-0', 'w-100', 'text-center')

        let addToppingDiv = document.createElement('div');
        addToppingDiv.classList.add('form-check', 'm-1', 'p-0', 'd-flex', 'flex-wrap', 'justify-content-between');
        prodElement.appendChild(addToppingDiv);

        let checkBoxCheeseDiv = document.createElement('div');
        checkBoxCheeseDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxCheeseDiv);
        let checkBoxCheese = document.createElement('input');
        checkBoxCheese.type = 'checkbox';
        checkBoxCheese.id = 'checkBoxCheese' + itemID;
        checkBoxCheese.classList.add('form-check-input', 'm-0', 'p-0', 'checkBox');
        checkBoxCheese.style.width = '12px'
        checkBoxCheese.style.height = '12px'
        checkBoxCheeseDiv.appendChild(checkBoxCheese);
        let cheeseLabel = document.createElement('label');
        cheeseLabel.classList.add('form-check-label', 'p-0', 'm-0', 'text-start');
        cheeseLabel.setAttribute('for', 'checkBoxCheese' + itemID);
        cheeseLabel.innerText = 'Сир'
        checkBoxCheeseDiv.appendChild(cheeseLabel);

        let checkBoxSausageDiv = document.createElement('div');
        checkBoxSausageDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxSausageDiv);
        let checkBoxSausage = document.createElement('input');
        checkBoxSausage.type = 'checkbox';
        checkBoxSausage.id = 'checkBoxSausage' + itemID;
        checkBoxSausage.classList.add('form-check-input', 'm-0', 'p-0', 'checkBox');
        checkBoxSausage.style.width = '12px'
        checkBoxSausage.style.height = '12px'
        checkBoxSausageDiv.appendChild(checkBoxSausage);
        let sausageLabel = document.createElement('label');
        sausageLabel.classList.add('form-check-label');
        sausageLabel.setAttribute('for', 'checkBoxSausage' + itemID);
        sausageLabel.innerText = 'Ковбаски'
        checkBoxSausageDiv.appendChild(sausageLabel);

        let checkBoxTomatoDiv = document.createElement('div');
        checkBoxTomatoDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxTomatoDiv);
        let checkBoxTomato = document.createElement('input');
        checkBoxTomato.type = 'checkbox';
        checkBoxTomato.id = 'checkBoxTomato' + itemID;
        checkBoxTomato.classList.add('form-check-input', 'm-0', 'p-0', 'checkBox');
        checkBoxTomato.style.width = '12px'
        checkBoxTomato.style.height = '12px'
        checkBoxTomatoDiv.appendChild(checkBoxTomato);
        let tomatoLabel = document.createElement('label');
        tomatoLabel.classList.add('form-check-label');
        tomatoLabel.setAttribute('for', 'checkBoxTomato' + itemID);
        tomatoLabel.innerText = 'Томати'
        checkBoxTomatoDiv.appendChild(tomatoLabel);

        let checkBoxMashroomsDiv = document.createElement('div');
        checkBoxMashroomsDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxMashroomsDiv);
        let checkBoxMashrooms = document.createElement('input');
        checkBoxMashrooms.type = 'checkbox';
        checkBoxMashrooms.id = 'checkBoxMashrooms' + itemID;
        checkBoxMashrooms.classList.add('form-check-input', 'm-0', 'p-0', 'checkBox');
        checkBoxMashrooms.style.width = '12px'
        checkBoxMashrooms.style.height = '12px'
        checkBoxMashroomsDiv.appendChild(checkBoxMashrooms);
        let mashroomsLabel = document.createElement('label');
        mashroomsLabel.classList.add('form-check-label');
        mashroomsLabel.setAttribute('for', 'checkBoxMashrooms' + itemID);
        mashroomsLabel.innerText = 'Гриби'
        checkBoxMashroomsDiv.appendChild(mashroomsLabel);

        let deliveryP = document.createElement('p');
        deliveryP.innerText = 'Оберіть спосіб доставки:';
        prodElement.appendChild(deliveryP);
        deliveryP.classList.add('text-center', 'p-0', 'm-0');

        let deliveryRadioDiv = document.createElement('div');
        deliveryRadioDiv.classList.add('d-flex', 'w-100', 'form-check', 'm-1', 'p-0', 'justify-content-start', 'align-items-center');
        prodElement.appendChild(deliveryRadioDiv);

        let delSelfCB = document.createElement('input');
        delSelfCB.classList.add('form-check-input', 'm-0', 'p-1');
        delSelfCB.type = 'radio';
        delSelfCB.name = 'delType';
        delSelfCB.id = 'delSelfCB' + itemID;
        deliveryRadioDiv.appendChild(delSelfCB);
        let delSelfLabel = document.createElement('label');
        delSelfLabel.classList.add('form-check-label', 'm-1', 'p-0');
        delSelfLabel.setAttribute('for', 'delSelfCB' + itemID);
        delSelfLabel.innerText = 'Самовивоз';
        deliveryRadioDiv.appendChild(delSelfLabel);

        let delCourierCB = document.createElement('input');
        delCourierCB.classList.add('form-check-input', 'm-0', 'p-1', 'ms-3');
        delCourierCB.type = 'radio';
        delCourierCB.name = 'delType';
        delCourierCB.id = 'delCourierCB' + itemID;
        deliveryRadioDiv.appendChild(delCourierCB);
        let delCourierLabel = document.createElement('label');
        delCourierLabel.classList.add('form-check-label', 'm-1', 'p-0');
        delCourierLabel.setAttribute('for', 'delCourierCB' + itemID);
        delCourierLabel.innerText = "Кур'єр";
        deliveryRadioDiv.appendChild(delCourierLabel);

        let priceDiv = document.createElement('div');
        priceDiv.classList.add('d-flex', 'justify-content-between', 'align-items-baseline');
        prodElement.appendChild(priceDiv);

        let priceTag = document.createElement('p');
        priceTag.classList.add('m-0', 'p-1');
        priceTag.innerText = 'Ціна, грн:';
        priceTag.style.color = 'green';
        priceTag.style.fontWeight = '700';
        priceDiv.appendChild(priceTag);

        let price = document.createElement('p');
        price.classList.add('m-0', 'p-1');
        price.style.color = 'green';
        price.style.fontWeight = '700';
        price.style.fontSize = '2rem';
        price.innerText = `${basePrice}`;
        priceDiv.appendChild(price);

        let orderBtn = document.createElement('button');
        orderBtn.classList.add('btn', 'btn-success', 'm-1');
        orderBtn.innerText = 'Замовити';
        orderBtn.disabled = 'true';
        prodElement.appendChild(orderBtn);

        function priceCalcAnimation() {
            let priceCalcAnimation = [{ color: 'orange' },
            { color: "green" }];
            price.animate(priceCalcAnimation, 1000);
        }

        sizeUl.addEventListener('click', sizePrice);
        fillerUl.addEventListener('click', fillerPrice);
        checkBoxCheese.addEventListener('change', function () {
            if (this.checked) {
                toppingAdd += 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
            else {
                toppingAdd -= 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
        })

        checkBoxSausage.addEventListener('change', function () {
            if (this.checked) {
                toppingAdd += 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
            else {
                toppingAdd -= 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
        })
        checkBoxTomato.addEventListener('change', function () {
            if (this.checked) {
                toppingAdd += 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
            else {
                toppingAdd -= 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
        })
        checkBoxMashrooms.addEventListener('change', function () {
            if (this.checked) {
                toppingAdd += 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
            else {
                toppingAdd -= 10;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd;
                priceCalcAnimation(price.textContent);
            }
        })

        delCourierCB.addEventListener('click', function () {
            if (this.checked) {
                delAdd = 30;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd + delAdd;
                priceCalcAnimation(price.textContent);
                delChosen = true;
            }
            if (sizeBtn.classList.contains('btn-success') && fillerBtn.classList.contains('btn-success') && delChosen) {
                orderBtn.removeAttribute('disabled');
            }
        })
        delSelfCB.addEventListener('click', function () {
            if (this.checked && delAdd > 0) {
                delAdd = 0;
                price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd + delAdd;
                priceCalcAnimation(price.textContent);
                delChosen = true;
            }
            else {
                priceCalcAnimation(price.textContent);
                delChosen = true;
            }
            if (sizeBtn.classList.contains('btn-success') && fillerBtn.classList.contains('btn-success') && delChosen) {
                orderBtn.removeAttribute('disabled');
            }
        })

        let basketBg = document.createElement('div');
        orderBtn.addEventListener('click', function () {
            if (!basketExist) {
                basketExist = true;
                basketBg.style.position = 'fixed';
                basketBg.style.top = '0px';
                basketBg.style.left = '0px';
                basketBg.style.zIndex = "1";
                basketBg.style.backgroundColor = 'RGBA(0,0,0,0.8)';
                basketBg.style.height = '100%';
                basketBg.style.width = '100%';
                basketBg.classList.add('basketBg', 'd-flex', 'justify-content-center', 'align-items-center');
                productPage.appendChild(basketBg);
                let basketItem = document.createElement('div');
                basketItem.classList.add('text-center', 'fe-bold', 'p-3', 'rounded');
                basketItem.style.color = '#fff';
                basketItem.style.backgroundColor = 'green';
                basketBg.appendChild(basketItem);
                let intervalID = setTimeout(() => {
                    clearInterval(intervalID);
                    basketBg.style.display = 'none';
                    basketBg.classList.remove('d-flex');
                }, 5000);
                basketItem.innerText = `Дякуємо за замовлення!`
            }
            else {
                basketBg.classList.add('d-flex');
                let intervalID = setTimeout(() => {
                    clearInterval(intervalID);
                    basketBg.style.display = 'none';
                    basketBg.classList.remove('d-flex');
                }, 5000);
            }
        })

        function sizePrice(event) {
            switch (event.target.innerText) {
                case 'Маленька':
                    {
                        sizeBtn.classList.remove('btn-secondaty');
                        sizeBtn.classList.add('btn-success');
                        sizeAdd = basePrice * 0;
                        price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent);
                        sizeBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Середня':
                    {
                        sizeBtn.classList.remove('btn-secondaty');
                        sizeBtn.classList.add('btn-success');
                        sizeAdd = parseInt(basePrice * 0.1);
                        price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent);
                        sizeBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Велика':
                    {
                        sizeBtn.classList.remove('btn-secondaty');
                        sizeBtn.classList.add('btn-success');
                        sizeAdd = parseInt(basePrice * 0.2);
                        price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent); sizeBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                default:
                    {
                        sizeAdd = 0;
                        price.textContent = basePrice + sizeAdd + fillerAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent);;
                    };
                    break;
            }
            if (sizeBtn.classList.contains('btn-success') && fillerBtn.classList.contains('btn-success') && delChosen) {
                orderBtn.removeAttribute('disabled');
            }
        }

        function fillerPrice(event) {
            switch (event.target.innerText) {
                case 'Курятина':
                    {
                        fillerBtn.classList.remove('btn-secondaty');
                        fillerBtn.classList.add('btn-success');
                        fillerAdd = 20;
                        price.textContent = basePrice + fillerAdd + sizeAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent);
                        fillerBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Телятина':
                    {
                        fillerBtn.classList.remove('btn-secondaty');
                        fillerBtn.classList.add('btn-success');
                        fillerAdd = 50;
                        price.textContent = basePrice + fillerAdd + sizeAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent);
                        fillerBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Овочі':
                    {
                        fillerBtn.classList.remove('btn-secondaty');
                        fillerBtn.classList.add('btn-success');
                        fillerAdd = 0;
                        price.textContent = basePrice + fillerAdd + sizeAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent);
                        fillerBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                default:
                    {
                        fillerAdd = 0;
                        price.textContent = basePrice + fillerAdd + sizeAdd + toppingAdd + delAdd;
                        priceCalcAnimation(price.textContent)
                    };
                    break;
            }
            if (sizeBtn.classList.contains('btn-success') && fillerBtn.classList.contains('btn-success') && delChosen) {
                orderBtn.removeAttribute('disabled');
            }
        }
    }
}