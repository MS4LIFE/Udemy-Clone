document.getElementById("2").style.display = "none"
document.getElementById("3").style.display = "none"
document.getElementsByClassName("1")[0].classList.add("underLine")
function tabs(targt) {
    console.log(targt.classList[1]);
    document.getElementsByClassName("1")[0].classList.remove("underLine")
    document.getElementsByClassName("2")[0].classList.remove("underLine")
    document.getElementsByClassName("3")[0].classList.remove("underLine")

    targt.classList.add("underLine")
    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "none"
    document.getElementById("3").style.display = "none"
    if (targt.classList[1] == 1) {
        document.getElementById("1").style.display = "block"
    } else if (targt.classList[1] == 2) {
        document.getElementById("2").style.display = "block"
    } else if (targt.classList[1] == 3) {
        document.getElementById("3").style.display = "block"
    }

}