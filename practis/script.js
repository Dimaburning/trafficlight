const  testTextField = document.querySelector('#testTextField');
testTextField.onclick = function() {
  // тело обработчика
  console.log('Это тот блок');
  // конец тела обработчика
}
//обработчик с 1 слушателем
//=============================================================================================================


const  testTextField = document.querySelector('#testTextField');
testTextField.addEventListener('click', 
  (event) => {
    // тело обработчика
    console.log('Это тот блок');
    // конец тела обработчика
})
//обработчик с >1 слушателями
//___________________________________
document.querySelector('#testTextField').addEventListener('click', 
  (event) => {
    console.log('Это тот блок');
})
//без переменной