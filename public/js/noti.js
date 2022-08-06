let del = Array.from(document.getElementsByClassName('close'));
del.forEach(ele =>{
    ele.addEventListener('click',(e)=>{
        let idx = e.target.parentElement.parentElement.id;
        document.getElementById(`${idx}`).classList.add('hidden');
    })
})