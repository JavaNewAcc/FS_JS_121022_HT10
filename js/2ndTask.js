window.onload = () => {
    let userOrder = '';
    let productPage = '';
    let pizzaPageBtn = document.querySelector('#pizzaPageBtn');
    let productPageExist = false;


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
            addProdElem(productPage, './img/pizzaMeatKonFungi.jpg', 'МітКонФунгі', 355);
            addProdElem(productPage, './img/pizzaMeatSupreme.jpg', 'Міт Супрім', 375);
            addProdElem(productPage, './img/pizzaOlio.jpg', 'Оліо', 350);
            addProdElem(productPage, './img/pizzaPearCheese.jpg', 'Сирна з грушею', 340);
            addProdElem(productPage, './img/pizzaPepperoni.jpg', 'Пеппероні', 350);
            addProdElem(productPage, './img/pizzaPollo.jpg', 'Полло', 370);
            addProdElem(productPage, './img/pizzaSicilia.jpg', 'Сіцилія', 320);
            addProdElem(productPage, './img/pizzaVitello.jpg', 'Вітелло', 290);

            productPage.scrollIntoView();
        }
    }

    function addProdElem(parElem, imgURL, pizzaName, basePrice) {
        let pizzaPrice = 0;
        let fillerAdd = 0;
        let sizeAdd = 0;
        let prodElement = document.createElement('div');
        parElem.appendChild(prodElement);
        prodElement.classList.add('p-1', 'm-1', 'd-flex', 'flex-column', 'aligh-items-between', 'col-6', 'col-sm-4', 'col-md-3', 'prodElement');
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
        sizeUl.style.minWidth = `${sizeBtn.getBoundingClientRect().width}px`;
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
        fillerUl.style.minWidth = `${fillerBtn.getBoundingClientRect().width}px`;
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
        addToppingDiv.classList.add('form-check', 'm-1', 'p-0', 'text-center', 'd-flex', 'flex-wrap');
        prodElement.appendChild(addToppingDiv);


        let checkBoxCheeseDiv = document.createElement('div');
        checkBoxCheeseDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxCheeseDiv);
        let checkBoxCheese = document.createElement('input');
        checkBoxCheese.type = 'checkbox';
        checkBoxCheese.classList.add('form-check-input', 'm-0', 'p-0');
        checkBoxCheese.id = 'cheeseCB';
        checkBoxCheese.style.width = '12px'
        checkBoxCheese.style.height = '12px'
        checkBoxCheeseDiv.appendChild(checkBoxCheese);
        let cheeseLabel = document.createElement('label');
        cheeseLabel.classList.add('form-check-label', 'p-0', 'm-0', 'text-start');
        cheeseLabel.for = 'checkBoxCheese';
        cheeseLabel.innerText = 'Сир'
        checkBoxCheeseDiv.appendChild(cheeseLabel);

        let checkBoxSausageDiv = document.createElement('div');
        checkBoxSausageDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxSausageDiv);
        let checkBoxSausage = document.createElement('input');
        checkBoxSausage.type = 'checkbox';
        checkBoxSausage.classList.add('form-check-input', 'm-0', 'p-0');
        checkBoxSausage.id = 'sausageCB';
        checkBoxSausage.style.width = '12px'
        checkBoxSausage.style.height = '12px'
        checkBoxSausageDiv.appendChild(checkBoxSausage);
        let sausageLabel = document.createElement('label');
        sausageLabel.classList.add('form-check-label');
        sausageLabel.for = 'checkBoxCheese';
        sausageLabel.innerText = 'Ковбаски'
        checkBoxSausageDiv.appendChild(sausageLabel);

        let checkBoxTomatoDiv = document.createElement('div');
        checkBoxTomatoDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxTomatoDiv);
        let checkBoxTomato = document.createElement('input');
        checkBoxTomato.type = 'checkbox';
        checkBoxTomato.classList.add('form-check-input', 'm-0', 'p-0');
        checkBoxTomato.id = 'sausageCB';
        checkBoxTomato.style.width = '12px'
        checkBoxTomato.style.height = '12px'
        checkBoxTomatoDiv.appendChild(checkBoxTomato);
        let tomatoLabel = document.createElement('label');
        tomatoLabel.classList.add('form-check-label');
        tomatoLabel.for = 'checkBoxTomato';
        tomatoLabel.innerText = 'Томати'
        checkBoxTomatoDiv.appendChild(tomatoLabel);

        let checkBoxMashroomsDiv = document.createElement('div');
        checkBoxMashroomsDiv.classList.add('w-50', 'd-flex', 'align-items-center');
        addToppingDiv.appendChild(checkBoxMashroomsDiv);
        let checkBoxMashrooms = document.createElement('input');
        checkBoxMashrooms.type = 'checkbox';
        checkBoxMashrooms.classList.add('form-check-input', 'm-0', 'p-0');
        checkBoxMashrooms.id = 'sausageCB';
        checkBoxMashrooms.style.width = '12px'
        checkBoxMashrooms.style.height = '12px'
        checkBoxMashroomsDiv.appendChild(checkBoxMashrooms);
        let mashroomsLabel = document.createElement('label');
        mashroomsLabel.classList.add('form-check-label');
        mashroomsLabel.for = 'checkBoxMashrooms';
        mashroomsLabel.innerText = 'Гриби'
        checkBoxMashroomsDiv.appendChild(mashroomsLabel);

        let price = document.createElement('div');
        price.classList.add('w-100', 'text-end', 'p-1');
        price.style.color = 'green';
        price.style.fontWeight = '700';
        price.style.fontSize = '2rem';
        price.innerText = `${basePrice}`;
        prodElement.appendChild(price);


        let orderBtn = document.createElement('button');
        orderBtn.classList.add('btn', 'btn-success', 'm-1');
        orderBtn.innerText = 'Замовити'
        prodElement.appendChild(orderBtn);

        function priceCalcAnimation() {
            let priceCalcAnimation = [{ color: 'orange' },
            { color: "green" }];
            price.animate(priceCalcAnimation, 1000);
        }

        sizeUl.addEventListener('click', sizePrice);
        fillerUl.addEventListener('click', fillerPrice);

        function sizePrice(event) {
            switch (event.target.innerText) {
                case 'Маленька':
                    {
                        sizeBtn.classList.remove('btn-secondaty');
                        sizeBtn.classList.add('btn-success');
                        sizeAdd = basePrice * 0;
                        price.textContent = basePrice + sizeAdd + fillerAdd;
                        priceCalcAnimation(price.textContent);
                        sizeBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Середня':
                    {
                        sizeBtn.classList.remove('btn-secondaty');
                        sizeBtn.classList.add('btn-success');
                        sizeAdd = parseInt(basePrice * 0.1);
                        price.textContent = basePrice + sizeAdd + fillerAdd;
                        priceCalcAnimation(price.textContent); sizeBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Велика':
                    {
                        sizeBtn.classList.remove('btn-secondaty');
                        sizeBtn.classList.add('btn-success');
                        sizeAdd = parseInt(basePrice * 0.2);
                        price.textContent = basePrice + sizeAdd + fillerAdd;
                        priceCalcAnimation(price.textContent); sizeBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                default:
                    {
                        sizeAdd = 0;
                        price.textContent = basePrice + sizeAdd + fillerAdd;
                        priceCalcAnimation(price.textContent);;
                    };
                    break;
            }
        }

        function fillerPrice(event) {
            switch (event.target.innerText) {
                case 'Курятина':
                    {
                        fillerBtn.classList.remove('btn-secondaty');
                        fillerBtn.classList.add('btn-success');
                        fillerAdd = 20;
                        price.textContent = basePrice + fillerAdd + sizeAdd;
                        priceCalcAnimation(price.textContent);
                        fillerBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Телятина':
                    {
                        fillerBtn.classList.remove('btn-secondaty');
                        fillerBtn.classList.add('btn-success');
                        fillerAdd = 50;
                        price.textContent = basePrice + fillerAdd + sizeAdd;
                        priceCalcAnimation(price.textContent);
                        fillerBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                case 'Овочі':
                    {
                        fillerBtn.classList.remove('btn-secondaty');
                        fillerBtn.classList.add('btn-success');
                        fillerAdd = 0;
                        price.textContent = basePrice + fillerAdd + sizeAdd;
                        priceCalcAnimation(price.textContent);
                        fillerBtn.innerText = `${event.target.innerText}`;
                    };
                    break;
                default:
                    {
                        fillerAdd = 0;
                        price.textContent = basePrice + fillerAdd + sizeAdd;
                        priceCalcAnimation(price.textContent)
                    };
                    break;
            }

        }
    }
}