 let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#ffbb00';

// Переменная для хранения ID чата
let chatId;

// Функция для установки ID чата
function setChatId(id) {
    chatId = id;
}

// Находим все кнопки minusBtn и plusBtn
let minusBtns = document.querySelectorAll('.minus-btn');
let plusBtns = document.querySelectorAll('.plus-btn');
let quantityDisplays = document.querySelectorAll('.quantity');
let addButton = document.querySelectorAll('.addButton');
let priceDisplays = document.querySelectorAll('.price');

// Функция для обновления количества товара
function updateQuantity(increment, index) {
    let quantity = parseInt(quantityDisplays[index].innerText);
    if (increment) {
        quantity++;
    } else {
        if (quantity > 0) {
            quantity--;
        }
    }
    quantityDisplays[index].innerText = quantity;
}

function updateMainButton() {
    let totalPrice = calculateTotalPrice();
    if (totalPrice > 0) {
        tg.MainButton.setText(`Загальна вартість: ${totalPrice.toFixed(2)} грн`);
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    } else {
        tg.MainButton.hide();
    }
}

function calculateTotalPrice() {
    let totalPrice = 0;
    items.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    return totalPrice;
}

// Присваиваем обработчики событий для всех кнопок минус и плюс
for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener("click", function() {
        updateQuantity(false, i);
        updateMainButton(); // Обновляем отображение главной кнопки
    });

    plusBtns[i].addEventListener("click", function() {
        updateQuantity(true, i);
        updateMainButton(); // Обновляем отображение главной кнопки
    });

    // Добавляем обработчик события только для кнопок "Добавить"
    addButton[i].addEventListener("click", function() {
        toggleItem(this, "item" + (i + 1), parseFloat(priceDisplays[i].innerText), i);
        updateMainButton(); // Обновляем отображение главной кнопки
    });
}

let items = [];

function toggleItem(btn, itemId, price, index) {
    let itemIndex = items.findIndex(i => i.id === itemId);
    let quantity = parseInt(quantityDisplays[index].innerText);

    if (itemIndex === -1) {
        let newItem = { id: itemId, price: price, quantity: quantity };
        items.push(newItem);
        quantityDisplay.innerText = quantity;
    } else {
        items[itemIndex].quantity = quantity; // Обновляем количество товара
    }
    
    if (quantity === 0) {
       addButton.innerText = "Додати";
    } else {
        addButton.innerText = "Змінити";
    }


    let totalPrice = calculateTotalPrice(); // Пересчитываем общую цену

    if (totalPrice > 0) {
        tg.MainButton.setText(`Загальна вартість: ${totalPrice.toFixed(2)} грн`);
        if (!tg.MainButton.isVisible) {
            tg.MainButton.show();
        }
    } else {
        tg.MainButton.hide();
    }
}


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    let data = {
        chat_id: chatId, // Передаем ID чата
        items: items.map(item => ({id: item.id, price: item.price, quantity: item.quantity})),
        totalPrice: calculateTotalPrice(),
    };
    tg.sendData(JSON.stringify(data));
});

document.getElementById("btn1").addEventListener("click", function(){
	toggleItem(this, "item1", 58);
});
document.getElementById("btn2").addEventListener("click", function(){
	toggleItem(this, "item2", 68);
});
document.getElementById("btn3").addEventListener("click", function(){
	toggleItem(this, "item3", 105);
});
document.getElementById("btn4").addEventListener("click", function(){
	toggleItem(this, "item4", 125);
});
document.getElementById("btn5").addEventListener("click", function(){
	toggleItem(this, "item5", 196);
});
document.getElementById("btn6").addEventListener("click", function(){
	toggleItem(this, "item6", 108);
});
document.getElementById("btn7").addEventListener("click", function(){
	toggleItem(this, "item7", 209);
});
document.getElementById("btn8").addEventListener("click", function(){
	toggleItem(this, "item8", 106);
});
document.getElementById("btn9").addEventListener("click", function(){
	toggleItem(this, "item9", 141);
});
document.getElementById("btn10").addEventListener("click", function(){
	toggleItem(this, "item10", 214);
});
document.getElementById("btn11").addEventListener("click", function(){
	toggleItem(this, "item11", 213);
});
document.getElementById("btn12").addEventListener("click", function(){
	toggleItem(this, "item12", 40);
});

document.getElementById("btn13").addEventListener("click", function(){
	toggleItem(this, "item13", 125);
});

document.getElementById("btn14").addEventListener("click", function(){
	toggleItem(this, "item14", 136);
});

document.getElementById("btn15").addEventListener("click", function(){
	toggleItem(this, "item15", 79);
});

document.getElementById("btn16").addEventListener("click", function(){
	toggleItem(this, "item16", 64);
});

document.getElementById("btn17").addEventListener("click", function(){
	toggleItem(this, "item17", 52);
});

document.getElementById("btn18").addEventListener("click", function(){
	toggleItem(this, "item18", 90);
});

document.getElementById("btn19").addEventListener("click", function(){
	toggleItem(this, "item19", 64);
});

document.getElementById("btn20").addEventListener("click", function(){
	toggleItem(this, "item20", 91);
});

document.getElementById("btn21").addEventListener("click", function(){
	toggleItem(this, "item21", 129);
});

document.getElementById("btn22").addEventListener("click", function(){
	toggleItem(this, "item22", 273);
});

document.getElementById("btn23").addEventListener("click", function(){
	toggleItem(this, "item23", 86);
});

document.getElementById("btn24").addEventListener("click", function(){
	toggleItem(this, "item24", 148);
});

document.getElementById("btn25").addEventListener("click", function(){
	toggleItem(this, "item25", 273);
});

document.getElementById("btn26").addEventListener("click", function(){
	toggleItem(this, "item26", 273);
});

document.getElementById("btn27").addEventListener("click", function(){
	toggleItem(this, "item27", 96);
});

document.getElementById("btn28").addEventListener("click", function(){
	toggleItem(this, "item28", 148);
});

document.getElementById("btn29").addEventListener("click", function(){
	toggleItem(this, "item29", 229);
});

document.getElementById("btn30").addEventListener("click", function(){
	toggleItem(this, "item30", 273);
});

document.getElementById("btn31").addEventListener("click", function(){
	toggleItem(this, "item31", 273);
});

document.getElementById("btn32").addEventListener("click", function(){
	toggleItem(this, "item32", 27);
});

document.getElementById("btn33").addEventListener("click", function(){
	toggleItem(this, "item33", 27);
});

document.getElementById("btn34").addEventListener("click", function(){
	toggleItem(this, "item34", 16);
});

document.getElementById("btn35").addEventListener("click", function(){
	toggleItem(this, "item35", 16);
});

document.getElementById("btn36").addEventListener("click", function(){
	toggleItem(this, "item36", 16);
});

document.getElementById("btn37").addEventListener("click", function(){
	toggleItem(this, "item37", 16);
});

document.getElementById("btn38").addEventListener("click", function(){
	toggleItem(this, "item38", 16);
});

document.getElementById("btn39").addEventListener("click", function(){
	toggleItem(this, "item39", 16);
});

document.getElementById("btn40").addEventListener("click", function(){
	toggleItem(this, "item40", 16);
});

document.getElementById("btn41").addEventListener("click", function(){
	toggleItem(this, "item41", 16);
});

document.getElementById("btn42").addEventListener("click", function(){
	toggleItem(this, "item42", 19);
});

document.getElementById("btn43").addEventListener("click", function(){
	toggleItem(this, "item43", 10);
});

document.getElementById("btn44").addEventListener("click", function(){
	toggleItem(this, "item44", 10);
});

document.getElementById("btn45").addEventListener("click", function(){
	toggleItem(this, "item45", 64);
});
document.getElementById("btn46").addEventListener("click", function(){
	toggleItem(this, "item46", 53);
});
document.getElementById("btn47").addEventListener("click", function(){
	toggleItem(this, "item47", 46);
});
document.getElementById("btn48").addEventListener("click", function(){
	toggleItem(this, "item48", 64);
});
document.getElementById("btn49").addEventListener("click", function(){
	toggleItem(this, "item49", 64);
});
document.getElementById("btn50").addEventListener("click", function(){
	toggleItem(this, "item50", 64);
});
document.getElementById("btn51").addEventListener("click", function(){
	toggleItem(this, "item51", 60);
});
document.getElementById("btn52").addEventListener("click", function(){
	toggleItem(this, "item52", 60);
});
document.getElementById("btn53").addEventListener("click", function(){
	toggleItem(this, "item53", 60);
});
document.getElementById("btn54").addEventListener("click", function(){
	toggleItem(this, "item54", 75);
});
document.getElementById("btn55").addEventListener("click", function(){
	toggleItem(this, "item55", 75);
});
document.getElementById("btn56").addEventListener("click", function(){
	toggleItem(this, "item56", 75);
});
document.getElementById("btn57").addEventListener("click", function(){
	toggleItem(this, "item57", 71);
});
document.getElementById("btn58").addEventListener("click", function(){
	toggleItem(this, "item58", 71);
});
document.getElementById("btn59").addEventListener("click", function(){
	toggleItem(this, "item59", 71);
});
document.getElementById("btn60").addEventListener("click", function(){
	toggleItem(this, "item60", 46);
});
document.getElementById("btn61").addEventListener("click", function(){
	toggleItem(this, "item61", 53);
});
document.getElementById("btn62").addEventListener("click", function(){
	toggleItem(this, "item62", 53);
});
document.getElementById("btn63").addEventListener("click", function(){
	toggleItem(this, "item63", 42);
});
document.getElementById("btn64").addEventListener("click", function(){
	toggleItem(this, "item64", 35);
});
document.getElementById("btn65").addEventListener("click", function(){
	toggleItem(this, "item65", 29);
});
document.getElementById("btn66").addEventListener("click", function(){
	toggleItem(this, "item66", 42);
});
document.getElementById("btn67").addEventListener("click", function(){
	toggleItem(this, "item67", 35);
});
document.getElementById("btn68").addEventListener("click", function(){
	toggleItem(this, "item68", 49);
});
document.getElementById("btn69").addEventListener("click", function(){
	toggleItem(this, "item69", 42);
});
document.getElementById("btn70").addEventListener("click", function(){
	toggleItem(this, "item70", 35);
});
document.getElementById("btn71").addEventListener("click", function(){
	toggleItem(this, "item71", 29);
});
document.getElementById("btn72").addEventListener("click", function(){
	toggleItem(this, "item72", 21);
});
document.getElementById("btn73").addEventListener("click", function(){
	toggleItem(this, "item73", 19);
});
document.getElementById("btn74").addEventListener("click", function(){
	toggleItem(this, "item74", 21);
});
document.getElementById("btn75").addEventListener("click", function(){
	toggleItem(this, "item75", 19);
});
document.getElementById("btn76").addEventListener("click", function(){
	toggleItem(this, "item76", 42);
});
document.getElementById("btn77").addEventListener("click", function(){
	toggleItem(this, "item77", 32);
});
document.getElementById("btn78").addEventListener("click", function(){
	toggleItem(this, "item78", 27);
});
document.getElementById("btn79").addEventListener("click", function(){
	toggleItem(this, "item79", 27);
});
document.getElementById("btn80").addEventListener("click", function(){
	toggleItem(this, "item80", 60);
});
document.getElementById("btn81").addEventListener("click", function(){
	toggleItem(this, "item81", 65);
});
document.getElementById("btn82").addEventListener("click", function(){
	toggleItem(this, "item82", 56);
});
document.getElementById("btn83").addEventListener("click", function(){
	toggleItem(this, "item83", 62);
});
document.getElementById("btn84").addEventListener("click", function(){
	toggleItem(this, "item84", 62);
});
document.getElementById("btn85").addEventListener("click", function(){
	toggleItem(this, "item85", 62);
});
document.getElementById("btn86").addEventListener("click", function(){
	toggleItem(this, "item86", 67);
});
document.getElementById("btn87").addEventListener("click", function(){
	toggleItem(this, "item87", 62);
});
document.getElementById("btn88").addEventListener("click", function(){
	toggleItem(this, "item88", 62);
});
document.getElementById("btn89").addEventListener("click", function(){
	toggleItem(this, "item89", 62);
});
document.getElementById("btn90").addEventListener("click", function(){
	toggleItem(this, "item90", 67);
});
document.getElementById("btn91").addEventListener("click", function(){
	toggleItem(this, "item91", 62);
});
document.getElementById("btn92").addEventListener("click", function(){
	toggleItem(this, "item92", 72);
});
