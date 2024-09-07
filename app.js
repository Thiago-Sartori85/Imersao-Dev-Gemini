function pesquisar() {

    // Obtém a seção HTML onde os resultados serão inseridos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        // Constrói o HTML para cada resultado, formatando os dados da pesquisa
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank"> ${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao} </p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

    

