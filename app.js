function pesquisar() {

    // Obtém a seção HTML onde os resultados serão inseridos
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value 

    console.log(campoPesquisa);

    //se campoPerquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado.<br>Reenviar o nome de seu anime favorito.</P>"
        return
    }

    // Função para que no campo pesquisa , buque dado com letra minuscula
    campoPesquisa = campoPesquisa.toLowerCase ()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags  = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase ()
        titulo = dado.descricao.toLowerCase ()
        tags = dado.tags.toLocaleLowerCase()
        
        //Se dado no titulo inlcude campoPesquisa , condição dentro do IF + ou uso do ||
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) 
            {
             // Cria um novo elemento HTML para cada resultado, formatando os dados da pesquisa
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
    }
    // No caso do campo de pesquisa estar fora de contexto usamos if(!)

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

    

