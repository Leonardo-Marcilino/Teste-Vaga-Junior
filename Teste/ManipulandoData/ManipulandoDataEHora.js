function handleDateOperations(date) {
    let options = parseInt(prompt('calcular diferencia entre data, digite: 1 - Adicionar dias, digite: 2 - alterar fuso, digite: 3 Formatar data digite: 4'));
    switch (options) {
        case 1:
            // Calculando a diferença entre duas datas
            let dateTwo = prompt('Digite a outra data no formato YYYY-MM-DD');//Solicito uma segunda data
            dateTwo = conversionStringInDate(dateTwo);

            if (!isNaN(dateTwo)) {// Se dateTwo for um número válido, realiza os cálculos
                const diffInMs = Math.abs(date - dateTwo); // Retorna o valor absoluto idependente de quem for Maior
                const daysBetween = Math.trunc(diffInMs / (1000 * 60 * 60 * 24)); // converção dos milessegundos em dias
                return daysBetween;
            } else {
                return 'Data inválida.';
            }
        case 2:
            //Adição de dias a uma data 
            const daysToAdd = parseInt(prompt('Quantos dias deseja adicionar a data? '));
            let newDate = new Date(date); // criando uma cópia para não alterar a data principal
            newDate.setDate(newDate.getDate() + daysToAdd); // adicionando mais dias 
            return newDate

        case 3:
            //Alterar fuso horário
            let timeBrasil = parseInt(prompt('Digite o horário no Brasil: '));
            let minutes = parseInt(prompt('Digite os minutos: '));

            let timeFrance = timeBrasil + 5;

            if(timeFrance > 24) {
                timeFrance - 24;
            }

            convertedTimeZone = (`Brasil: ${timeBrasil}:${minutes} 
            França: ${timeFrance}:{minutes}`);
            
            return convertedTimeZone // Retorna a data no formato ISO 8601   
        case 4:
            // Formatação da data
            // Pegando cada dado da data e separando
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            // Verificando se o dia e o mês tem apenas um número para deixar ele com 0 antes ex - (01, 02, 03 e etc...)
            if (day.toString().length == 1) {
                day = '0' + day;
            }
            if (month.toString().length == 1) {
                month = '0' + month;
            }

            optionFormatted = parseInt(prompt('qual formatação você deseja? Digite 1 para DD/MM/YYYY, 2 para MM/DD/YYYY e 3 para YYYY-MM-DD'))

            switch (optionFormatted) {
                case 1:
                    formattedDate = `${day}/${month}/${year}`;
                    return formattedDate

                case 2:
                    formattedDate = `${month}/${day}/${year}`;
                    return formattedDate

                case 3:
                    formattedDate = `${year}/${month}/${day}`;
                    return formattedDate

                default:
                    return 'Valor inválido'
            }



        default:
            return 'Número inválido'
    }
}

function conversionStringInDate(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
        return console.error('Formato de data inválido. Use YYYY-MM-DD.');
    }
    return new Date(dateString);
}

let dateString = prompt('Insira um horário no formato YYYY-MM-DD');

dateString = conversionStringInDate(dateString);

if (!isNaN(dateString)) {
    console.log(handleDateOperations(dateString));
} else {
    console.log('Data inválida.');
}
