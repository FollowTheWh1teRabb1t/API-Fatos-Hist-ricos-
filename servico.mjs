import fatosHistoricos from './dados/dados.mjs';


function servicoValidaAno(ano) {
    if(isNaN(ano)) {
        return false;
    }
    else {
        if(ano >= 120 && ano <= 2020) {
            return true;
        }
        else {
            return false;
        }
    }
}

function servicoBuscarFatoPorAno(ano) {
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });

    return fatoSelecionado.Fato;
}

export {servicoBuscarFatoPorAno, servicoValidaAno}