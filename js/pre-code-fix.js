// Получаем все элементы <pre> с классом "code"
var codeElements = document.querySelectorAll("pre code");

// Проходимся по каждому элементу
codeElements.forEach(function(codeElement) {
    var html = codeElement.innerHTML;
    var pattern = html.match(/\s*\n[\t\s]*/);
    codeElement.innerHTML = html.replace(new RegExp(pattern, "g"), '\n');
});