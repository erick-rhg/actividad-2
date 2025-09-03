alert(document.compatMode)

setInterval(timeRefresh, 10000)

function timeRefresh() {
    const time = new Date().toTimeString()
    document.getElementById("horaJs").textContent = time
}