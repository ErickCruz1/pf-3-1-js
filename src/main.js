
export function addTwoNumbers(a, b){
  //aqui va tu código
  console.log(a + b)

}

function minus(a, b) {
  return a - b
}

function Division(a, b) {
  return a / b
}

function addThreeNumbers(a, b, c){
  return a + b + c
}

function A(x){
  function B(y){
    function C(z){
     (x + y - z );
    }
    C(3);
  }
  B(2);
}
A(1);