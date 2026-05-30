let count = 0;

const result = document.getElementById("result");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const info = document.getElementById("info");

function update() {
  result.textContent = count;

  if (count > 0) {
    result.style.background = "#ffeb3b";
  } else if (count < 0) {
    result.style.background = "#4cef54";
  } else {
    result.style.background = "#f44336";
  }

  if (count === 10 || count === -10) {
    info.textContent = "вы достигли экстремального значения";
    info.classList.add("active");
  } else {
    info.classList.remove("active");
  }

  plus.disabled = count === 10;
  minus.disabled = count === -10;
}

plus.onclick = () => {
  if (count < 10) {
    count++;
    update();
  }
};

minus.onclick = () => {
  if (count > -10) {
    count--;
    update();
  }
};

update();
