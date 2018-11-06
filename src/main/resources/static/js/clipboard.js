// Initialize all popovers
$('[data-toggle="popover"]').popover()

$('#contact button').click(function() {
    let _this = $(this);
    let tempInput = document.createElement("input");

    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = $(this).text();
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    _this.popover().on('shown.bs.popover', function () {
        setTimeout(function() { _this.popover('hide') }, 1000)
    })
});