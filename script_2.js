
function uberFactorial()
{
  let num = prompt("De quel nombre tu veux faire le facactoriel?");
  num = Number(num);
  let iter = 1;
  for (var i = 2; i <= num; i++)
      iter = iter * i;
  return iter;
};

console.log(uberFactorial());
