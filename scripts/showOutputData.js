let arrayOfDigits = [];
let arrayOfNumbers = [];
let resultOfAction = 0;

document.getElementById("calc__outout-window").value = 0;

// ------------------------------------------ NUMBER-BUTTONS MANAGE -------------------------------------------------

document.getElementById("1").onclick = function () {
  arrayOfDigits.push(document.getElementById("1").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("2").onclick = function () {
  arrayOfDigits.push(document.getElementById("2").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("3").onclick = function () {
  arrayOfDigits.push(document.getElementById("3").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("4").onclick = function () {
  arrayOfDigits.push(document.getElementById("4").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("5").onclick = function () {
  arrayOfDigits.push(document.getElementById("5").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("6").onclick = function () {
  arrayOfDigits.push(document.getElementById("6").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("7").onclick = function () {
  arrayOfDigits.push(document.getElementById("7").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("8").onclick = function () {
  arrayOfDigits.push(document.getElementById("8").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("9").onclick = function () {
  arrayOfDigits.push(document.getElementById("9").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("0").onclick = function () {
  arrayOfDigits.push(document.getElementById("0").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

document.getElementById("dot").onclick = function () {
  arrayOfDigits.push(document.getElementById("dot").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
};

// --------------------------------------------------------- ACTION-BUTTONS MANAGE ------------------------------------------------

function plus() {
  arrayOfDigits.push(document.getElementById("plus").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
}

function minus() {
  arrayOfDigits.push(document.getElementById("minus").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
}

function multiple() {
  arrayOfDigits.push(document.getElementById("mult").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
}

function divide() {
  arrayOfDigits.push(document.getElementById("divide").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
}

function sad() {
  arrayOfDigits.push(document.getElementById("sad").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
}

function smile() {
  arrayOfDigits.push(document.getElementById("smile").innerHTML);

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
}

function clear() {
  document.getElementById("calc__outout-window").value = 0;
  arrayOfNumbers = [];
  arrayOfDigits = [];
}

function equal() {
  resultOfAction = eval(document.getElementById("calc__outout-window").value);
  document.getElementById("calc__outout-window").value = resultOfAction;
  arrayOfNumbers = [];
  resultOfAction = eval(arrayOfDigits.toString);
  arrayOfDigits = [];
  arrayOfDigits.push(document.getElementById("calc__outout-window").value);
  return resultOfAction;
}

function remove(){
  arrayOfDigits.pop();

  function getNumber() {
    let i = 0;
    let sum = "";
    for (i; i < arrayOfDigits.length; i += 1) {
      sum = sum + arrayOfDigits[i];
    }
    return sum;
  }

  document.getElementById("calc__outout-window").value = getNumber();
}

document.getElementById("equal").addEventListener("click", equal);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("mult").addEventListener("click", multiple);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("sad").addEventListener("click", sad);
document.getElementById("smile").addEventListener("click", smile);
document.getElementById("remove").addEventListener("click", remove);
