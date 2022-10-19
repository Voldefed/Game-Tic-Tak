let elems = document.querySelectorAll(".game_blocks .block");
game(elems);

function game(elems) {
  let i = 0; // начальное значение счетчика

  for (let elem of elems) {
    elem.addEventListener("click", function step() {
      if (i % 2 == 0) {
        this.textContent = "X";
      } else {
        this.textContent = "0";
      }

      this.removeEventListener("click", step);

      if (isVictory(elems)) {
        alert(`Переміг ${this.textContent}`);
        location.reload();
      } else if (i === 8) {
        alert("Ничія");
        location.reload();
      }

      i++; // увеличиваем счетчик
    });
  }
}

function isVictory(elems) {
  let vicValues = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let vicValue of vicValues) {
    if (
      elems[vicValue[0]].textContent == elems[vicValue[1]].textContent &&
      elems[vicValue[1]].textContent == elems[vicValue[2]].textContent &&
      elems[vicValue[0]].textContent != ""
    ) {
      return true;
    }
  }
  return false;
}
