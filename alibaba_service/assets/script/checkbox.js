let checkbox = document.querySelectorAll('.table__checkbox');


    checkbox[0].addEventListener('click', tableTr)

console.log(checkbox[0])

function tableTr() {

    if (checkbox[0].checked === true) {
        for (var i = 0; checkbox.length > 0; i++) {
            checkbox[i].checked = "false"
        }
    } else {
        for (var i = 0; checkbox.length > 0; i++) {
            checkbox[i].checked = "checked"
        }
    }
}