let link=document.querySelector('a');

link.addEventListener('click',(event)=>{
     let Prom=prompt('Изменить текст ссылки на');
     link.textContent=Prom;
     event.preventDefault();
})