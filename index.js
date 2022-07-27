function inputFunction(item) {
  var num = document.getElementsByClassName(`item${item}`)[0].innerText;

  document.getElementById('num--inp').value += num;
}

function operation(operator) {
  var opr = operator;
  document.getElementById('num--inp').value += opr;
}

function splOperation(splOp) {
  let num = parseInt(document.getElementById('num--inp').value);
  let res;
  switch (splOp) {
    case 'fract':
      res = 1 / num;
      document.getElementById('num--inp').value = res.toPrecision(6);
      $('#inp--history #hist--ol').append(`<li class="hist--li">1/${num}</li>`);
      break;
    case '^':
      res = num * num;
      document.getElementById('num--inp').value = res;
      $('#inp--history #hist--ol').append(
        `<li class="hist--li">${num}<sup>2</sup></li>`
      );
      break;
    case 'root':
      res = Math.sqrt(num);
      document.getElementById('num--inp').value = res.toPrecision(6);
      $('#inp--history #hist--ol').append(
        `<li class="hist--li">&#8730;${num}</li>`
      );
      break;
  }
}

function calc() {
  let inp = document.getElementById('num--inp').value;

  // send to history
  $('#inp--history #hist--ol').append(`<li class="hist--li">${inp}</li>`);
  let newInp = eval(`${inp}`);
  //sent

  document.getElementById('num--inp').value = newInp;
}

function Clear() {
  let inp = document.getElementById('num--inp').value;
  if (inp.length > 0) document.getElementById('num--inp').value = null;
}

document.querySelector('#hist').addEventListener('click', () => {
  $('#inp--history').toggle(500);
});