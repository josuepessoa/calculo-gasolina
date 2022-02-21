function calcula(){
    //Pega retorno dos inputs e prepara variaveis
    
    let kms = 0 ;
    let preco = 0;
    let consumo = 0 
    let valorDiario = 0

    kms  = document.getElementById('inputKm').value;
    preco = document.getElementById('inputPreco').value;  
    consumo = document.getElementById('inputConsumo').value;  
    
    
    valorDiario = (kms/consumo) * preco;  

    //habilita a tabela de resutados
    document.getElementById("dados").style.display = "" ;


    //para 5 pessoas que cabem no carro
    for (var i = 1; i <= 5; i++) {
        //prepara itens da tabela
        let tbody = document.getElementById('tbody');
        let row = document.createElement('tr');
        let pessoas = document.createElement('td');
        let prcDias= document.createElement('td');
        let prcSemana = document.createElement('td');
        let prcMes = document.createElement('td');
    
        console.log("passou "+ i )
        pessoas.innerHTML = i
        prcDias.innerHTML = (valorDiario / i).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        prcSemana.innerHTML = (valorDiario * 5 / i).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        prcMes.innerHTML = (valorDiario*22 / i).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        //popula tabela
        row.appendChild(pessoas);
        row.appendChild(prcDias);
        row.appendChild(prcSemana);
        row.appendChild(prcMes);

        tbody.appendChild(row);
    }
    //retira botão de confirmar
    document.getElementById("confirmar").style.display = "none" ;
}

