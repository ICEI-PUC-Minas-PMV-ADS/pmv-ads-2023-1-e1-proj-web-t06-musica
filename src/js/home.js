var btAbrirModal = $("#btAbrirModal");
var modal = $("#modal");
var modalClose = $("#modal .modal-close");
var modalBackground = $("#modal .modal-bg");

btAbrirModal.click(function () {
    modal.fadeIn(500);
});

modalClose.click(function () {
    modal.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
//modalBackground.click(function () {
//    modal.fadeOut(500);
//});