let classSelect = document.getElementsByClassName('select-committees');
let classTables = document.getElementsByClassName('tables');
let classButton = document.getElementsByClassName('button-table');


for (let i = 0; i <= classButton.length; i++) {
    classButton[i].onclick = function() {
        if(classSelect[i].style.display === "none") {
            classSelect[i].style.display = 'block';
            classTables[i].style.display = 'block';
            for (let j = 0; j <= classSelect.length; j++) {
                if( i !== j){
                    classTables[j].style.display = 'none';
                    classSelect[j].style.display = 'none';
                }
            }
        }
    };
}


function validateLicense() {
    let selectChoose = document.getElementById('choose-license');
    let optionCount = 0;
    let optionsLicense = 4;
    for (let i = 0; i < selectChoose.length; i++) {
        if (selectChoose[i].selected) {
            optionCount++;
            if (optionCount > optionsLicense) {
                alert("Validation failed, you have exceeded the number of selections (4)");
                return false;
            }
        }
    }
    if (optionCount === optionsLicense)
        return true;
    else {
        alert("Validation failed, just selected " + optionCount + "!");
    }
}

function validateDissertation() {
    let selectChoose = document.getElementById('choose-dissertation');
    let optionCount = 0;
    let optionDissertation = 5;
    for (let i = 0; i < selectChoose.length; i++) {
        if (selectChoose[i].selected) {
            optionCount++;
            if (optionCount > optionDissertation) {
                alert("Validation failed, you have exceeded the number of selections (5)");
                return false;
            }
        }
    }
    if (optionCount === optionDissertation)
        return true;
    else {
        alert("Validation failed, just selected " + optionCount + "!");
    }
}

