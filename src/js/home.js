console.log('v1.5');

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


// Recupera o banco de dados
let artistas = JSON.parse( localStorage.getItem('artistas') ) || [];

// Cria o método para a busca, ao clicar no botão
document.querySelector('#btnPesquisar').onclick = function(e) {
    // Recupera o valor do campo (e cancela se estiver vazio)
    if(inputPesquisa.value=='')
        return;
    console.log('Buscando por: '+ inputPesquisa.value);
    
    // Identifica o campo e cria um conteúdo vazio inicial
    listaArtistas.innerHTML = '<ul>';
    
    // Seleciona os artistas
    let artistasFiltrados = artistas.filter(
        function(artista) {
           return artista.estilo.toLowerCase() == inputPesquisa.value.toLowerCase() 
        }
    );
    
    // Inclui os artistas pesquisados
    for(let i in artistasFiltrados) {
        let art = artistasFiltrados[i];
        listaArtistas.innerHTML += `
             <li>
                 <strong>${art.nome}</strong><br />
                 Estilo: ${art.estilo}<br />
                 Região: ${art.regiao}<br />
                 Observação: ${art.observacao}<br />
             </li>
        `;
    }
    
    // Conclui o conteúdo da lista
    listaArtistas.innerHTML += '</ul>';
    
}
