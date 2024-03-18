const input = document.querySelector('input');
const p = document.querySelector('#duplicateField');
const btn = document.querySelector('button');

input.addEventListener('input', function() {
  p.textContent = input.value;
})

btn.addEventListener('click', function(){
    console.log(input.value);
    document.querySelector("input").value = "";
    document.getElementById("duplicateField").textContent = "";
})
