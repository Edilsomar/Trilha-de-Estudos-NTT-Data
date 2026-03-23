const func = ['Alan Rodrígues', 'Barbara Macedo', 'Claudio Rocha', 'Daniela Monteiro', 'Eduarda Kelly'];

var lista = document.getElementById('lista');

for(let pos = 0 ; pos < func.length; pos++){
    var funci = func[pos];
    var li = document.createElement('li');
    li.innerText = funci;
    lista.appendChild(li);
}
//tambem daria certo:

const func = ['Alan Rodrígues', 'Barbara Macedo', 'Claudio Rocha', 'Daniela Monteiro', 'Eduarda Kelly'];

var lista = document.getElementById('lista');

for(let funci of func){
    var li = document.createElement('li');
    li.innerText = funci;
    lista.appendChild(li);
}

