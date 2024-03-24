window.onload = function () {
    hidden();                                  
}

function hidden(){
    var Projects = document.querySelectorAll('.cards-project');         // Seleciona todos os projetos ocultos
    
    // Este é um loop for que começa do índice 6 na lista Projects e continua até o final da lista (Projects.length). Isso significa que ele começa a partir do sétimo elemento na lista e termina no ultimo
    for (var i = 6; i < Projects.length; i++) {
        Projects[i].classList.add('cards-hidden');
    }
}

// Função para mostrar mais projetos
function showMore() {
    var hiddenProjects = document.querySelectorAll('.cards-project');         // Seleciona todos os projetos ocultos
    var button = document.getElementById('showMore');
    console.log(hiddenProjects)                                              

    // Remove a classe cards-hidden de todos os projetos ocultos
    hiddenProjects.forEach(function (project) {
        project.classList.remove('cards-hidden');
    });

    button.innerText = 'Ver menos';                                        // Atualiza o texto do botão para "Ver menos"
    button.setAttribute('onclick', 'showLess()');                         // Altera a função de clique do botão para showLess()
}

// Função para mostrar menos projetos
function showLess() {
    var visibleProjects = document.querySelectorAll('.cards-project:not(.cards-hidden)');      // Seleciona todos os projetos visíveis, exceto o primeiro
    var button = document.getElementById('showMore');                                         // Seleciona o botão

    // Oculta todos os projetos, exceto o primeiro
    visibleProjects.forEach(function (project, index) {
        if (index > 5) {
            project.classList.add('cards-hidden');
        }
    });

    button.innerText = 'Ver mais';                        // Atualiza o texto do botão para "Ver mais"
    button.setAttribute('onclick', 'showMore()');        // Altera a função de clique do botão para showMore()
}