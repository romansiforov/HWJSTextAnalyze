document.write(`Задача про аналіз тексту:

Вам потрібно написати функцію, яка отримує на вхід рядок тексту. Функція повинна повернути об'єкт,
 в якому кожен ключ - це унікальне слово з тексту, а значення - кількість разів, коли це слово зустрічається в тексті.`);

function countWords(word, array) {
    let count = 0;
    for( let i = 0; i < array.length; i++){
        if(word == array[i]){
            count++;
        }
    }
    return count;
}


 function analyzeText(text){
    let tmpArray = text.split(" ");
    
    let textObject = {};

    for(let i= 0; i < tmpArray.length; i++){
        tmpArray[i] = tmpArray[i].replace(",", "");
        tmpArray[i] = tmpArray[i].replace(".", "");
        tmpArray[i] = tmpArray[i].toLowerCase();
        textObject[tmpArray[i]] = countWords(tmpArray[i], tmpArray);
    }
    return textObject;
 }

 const text = "Це простий текст, який використовується для тестування простих задач з програмування. Текст повинен містити кілька унікальних слів. Текст простий. Тестування програмування.";

 console.log(analyzeText(text));