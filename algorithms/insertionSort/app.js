// A função "insertionSort" recebe um array como entrada e retorna um array ordenado.

function insertionSort(arr) {
  // Ela começa percorrendo o array da posição 1 até o final.
  for (let i = 1; i < arr.length; i++) {
    // Em cada iteração, o elemento atual é armazenado em uma variável chamada "current"
    // e uma variável "j" é inicializada com "i - 1".
    let current = arr[i];
    let j = i - 1;

    // Então, enquanto "j" for maior ou igual a 0
    // e o elemento no índice "j" do array for maior do que "current",
    // o elemento no índice "j" é movido para a posição "j + 1" e "j" é decrementado.
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Quando o loop termina, o elemento "current" é inserido na posição "j + 1".
    // Isso garante que o array até a posição "i" está sempre ordenado.
    arr[j + 1] = current;
  }

  return arr;
}

let arr = [5, 2, 4, 1, 3];
console.log(insertionSort(arr)); // [1, 2, 3, 4, 5]
