function multiplyTable(x) {
    let multString = "";
    for (let j = 1; j <= 9; j++) {
        multString = multString + `${x} * <span class="number"> ${j} </span> = ${(x * j)} <br>`;       
    }
    return multString;    
}

function Calculate() {
    let list = document.querySelector('.mylist');
    let optionValue = list.value;
    if (optionValue == 'none') { 
        alert('Не выбрано число');
    }  else {
        let result = multiplyTable(optionValue);
        let blank = document.querySelector('.blank');
        blank.innerHTML = result;
    }   
}