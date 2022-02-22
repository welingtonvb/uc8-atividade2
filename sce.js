// Modulo para entrada de dados no console - npm install --save readline-sync

console.clear()
// variaveis
let participantes = []
let i = 0

// arrays
// array com os eventos : tema, data, vagas, resta
let eventos = [
    ['Java','20/03/2022',5,0],
    ['HTML5','15/02/2022',5,0],
    ['C#','20/04/2022',5,0],
    ['Node.js','05/05/2022',5,0],
    ['SQL Server','01/02/2021',5,0],
]

// array com os palestrates : tema, nome
let palestrantes = [
    ['Java', 'Francisco'],
    ['HTML5', 'Jose'],
    ['C#', 'Paulo'],
    ['Node.js','Lucia'],
    ['SQL Server','Antonio'],
]

// menu inicial
// variaveis
let lendo = require('readline-sync');
let Menu = true
let opcaoMenu

while ((Menu == true)) {
    console.log()
    console.log("Sistema de Cadastro de Eventos - SCE - 0.0000001 bugs")
    console.log("-----------------------------------------------------")
    console.log("Menu de opçoes")
    console.log()
    console.log("1 - Cadastrar no evento")
    console.log("2 - Imprimir listagem por evento")
    console.log()
    console.log("100 -  Sair")
    console.log()
    opcaoMenu = lendo.question("Digite a opcao :   ")
    console.log() 

    // menu principal
    if (opcaoMenu == 1 ){      

        // variaveis
        let nome
        let idade
        let opcao
         
        console.log("Sistema de Cadastro de Eventos - SCE - 0.0000001 bugs")
        console.log("-----------------------------------------------------")
        console.log("Eventos disponiveis")
        console.log()
        console.table(eventos)
        console.log()
        console.log("COLUNAS: ")
        console.log("0 - TEMA / 1 - DATA / 2 - VAGAS / 3 - INCRITOS" )
        console.log() 

        let continuar = lendo.question("Cadastrar? ENTER - nao / 1 - sim :   ")

        if (continuar == 1) {

            let repete = true
            
            // repere ate a condicao ser verdadeira
            do {
                console.log()
                opcao = lendo.question("Digite o numero (linha) correspondente ao evento :  ")
                if ((opcao >= 0) && (opcao <= 4) && (opcao.length > 0))  {
                    repete = false
                } 
                               
            } while (repete == true)
            
            // retorna mensagem que as vagas foram preenchidas
            if (eventos[opcao][3] == eventos[opcao][2]){
                console.log()
                console.log("Inscrição negada por não haver vagas disponíveis.")
                console.log()
                lendo.question("Tecle Enter para voltar ao menu")
            } 

            // variaveis
            let j = 0
            let parar = false  

            // repete enquanto a vagas para evento
            while ((j <= eventos[opcao][2]-1) && (eventos[opcao][2] != eventos[opcao][3])
                  && (parar == false)){              
                console.log()
                console.log("Evento : " + eventos[opcao][0]," ",eventos[opcao][1])
                console.log()
                console.log("Vagas restantes : ",eventos[opcao][2] - eventos[opcao][3])
                console.log();
                nome = lendo.question("Digite seu nome completo :   ")
                idade = lendo.question("Digite a sua idade atual (em anos) :   ")
                j = j + 1
                console.log()
                
                // variaveis
                let diaE
                let mesE
                let anoE
    
                // data do evento em dia, mes, ano
                let dataEventoPartes = eventos[opcao][1].split('/')
                diaE = dataEventoPartes[0]
                mesE = dataEventoPartes[1]
                anoE = dataEventoPartes[2]

                // variaveis
                let diaA
                let mesA
                let anoA
                
                // data atual em dia, mes, ano
                let dataAtual = new Date(); 
                diaA = dataAtual.getDate();
                mesA = dataAtual.getMonth() + 1; 
                anoA = dataAtual.getFullYear();
                
                // compara data, idade e cadastra no array participantes
                let DE = new Date(anoE, mesE, diaE);  
                let DA = new Date(anoA, mesA, diaA); 
        
                if (DE.getTime() > DA.getTime()) {
                    console.log("Cadastro permitido, por data")
                    console.log()
                    if (idade >= 18) {
                        console.log("Cadastro permitido, por idade")
                        console.log()
                        
                        // insere no array o cadastro do participante
                        participantes[i] = [nome,idade,opcao]
                        i = i + 1;

                        // atualiza vagas restantes para o evento
                        eventos[opcao][3] = eventos[opcao][3] + 1;

                        console.log("Seu cadastro foi realizado com sucesso!")
                        lendo.question("Teclar ENTER para continuar")
                        console.log()   
    
                    } else {  
                        console.log("Inscrição negada por idade não permitida.")
                        parar = true
                        console.log()
                    } 
                } else {
                    console.log("Periodo de inscrição encerrada para o evento")
                    console.log("escolhido.O cadastro não será permitido por data invalida")

                    parar = true 
                    console.log()
                }     
                
                let sair
    
                 sair = lendo.question("Cadastrar? ENTER - nao / 1 - sim :   ")
                if (sair.length == 0) {
                    parar = true
                }        
            }
        }      
    }    

    // imprimi listagem por evento    
    if (opcaoMenu == 2 ){    
         if (participantes.length > 0) {
            console.log("Listagem por evento :")
            console.log("-----------------------------------------")
     
            for (let a = 0; a < eventos.length; a++) {
                console.log("Tema: ",eventos[a][0])
                console.log("Palestrante : ",palestrantes[a][1])
                console.log("-----------------------------------------")         
            
                for (let b = 0; b < participantes.length; b++) {
                    if (a == participantes[b][2]) {
                    console.log(participantes[b][0])
                    }   
                }    
        
            console.log()
            console.log("-----------------------------------------")
            }    

            lendo.question("Tecle Enter para sair")          
        }
    }

    // sai do programa
    if (opcaoMenu == 100 ){
        Menu = false
    } 

}