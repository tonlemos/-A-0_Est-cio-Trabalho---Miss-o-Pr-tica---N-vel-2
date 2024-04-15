
// Função para trocar os valores de duas posições
const trocarElementos = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  };
  
  // Função para embaralhar os elementos
  const embaralhar = (arr, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
      const pos1 = Math.floor(Math.random() * arr.length);
      const pos2 = Math.floor(Math.random() * arr.length);
      trocarElementos(arr, pos1, pos2);
    }
  };
  
  // Função para realizar a ordenação Bubble Sort
  const bubble_sort = (arr) => {
    const tamanho = arr.length;
    for (let i = 0; i < tamanho; i++) {
      for (let j = 0; j < tamanho - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          trocarElementos(arr, j, j + 1);
        }
      }
    } 
  };
  
  // Função para realizar a ordenação Selection Sort em um vetor de inteiros
  const selection_sort = (arr) => {
    const tamanho = arr.length;
    for (let i = 0; i < tamanho - 1; i++) {
      let indiceMinimo = i;
      for (let j = i + 1; j < tamanho; j++) {
        if (arr[j] < arr[indiceMinimo]) {
          indiceMinimo = j;
        }
      }
      if (indiceMinimo !== i) {
        trocarElementos(arr, i, indiceMinimo);
      }
    }
  };
  
  // Função para realizar a ordenação Quick Sort em um vetor de inteiros de forma recursiva
  const quick_sort = (arr, inicio = 0, fim = arr.length - 1) => {
    if (inicio >= fim) return;
    const pivo = arr[fim];
    let indiceParticao = inicio;
    for (let i = inicio; i < fim; i++) {
      if (arr[i] < pivo) {
        trocarElementos(arr, i, indiceParticao);
        indiceParticao++;
      }
    }
    trocarElementos(arr, indiceParticao, fim);
    quick_sort(arr, inicio, indiceParticao - 1);
    quick_sort(arr, indiceParticao + 1, fim);
  };
  