function ordenar() {
    const valoresLista = document.getElementById('valores');
    const algoritmoSelecionado = document.getElementById('algoritmo').value;
    let valores = Array.from(valoresLista.children).map((item) => parseInt(item.textContent));

    const [algoritmo, ordem] = algoritmoSelecionado.split('-');

    if (algoritmo === 'bubble') {
        bubble_sort(valores);
    } else if (algoritmo === 'selection') {
        selection_sort(valores);
    } else if (algoritmo === 'quick') {
        quick_sort(valores);
    }

    if (ordem === 'asc') {
        valores.sort((a, b) => a - b); // Classifica os números em ordem crescente
    } else if (ordem === 'desc') {
        valores.sort((a, b) => b - a); // Classifica os números em ordem decrescente
    }

    valoresLista.innerHTML = valores.map((item) => `<li>${item}</li>`).join('');
}