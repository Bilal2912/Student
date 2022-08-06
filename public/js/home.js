document.getElementById('rarrow').addEventListener('click',(e)=>{
    let idx = e.target.parentNode.children[0].id;
    if(idx==3){
        idx = 0;
    }
    idx = parseInt(idx);
    idx = idx+1;
    e.target.parentNode.children[0].style = `background-image:url('proj-${idx}.jpg')`;
    e.target.parentNode.children[0].id = idx;
})
document.getElementById('larrow').addEventListener('click',(e)=>{
    let idx = e.target.parentNode.children[0].id;
    if(idx==1){
        idx = 4;
    }
    idx = parseInt(idx);
    idx = idx-1;
    e.target.parentNode.children[0].style = `background-image:url('proj-${idx}.jpg')`;
    e.target.parentNode.children[0].id = idx;
})
document.getElementById('proj').children[0].addEventListener('mouseenter',(e)=>{
    let idx = e.target.id;
    e.target.style="";
    // console.log(e.target);
    e.target.style.transition = "background-image 3s";
    e.target.children[idx-1].classList.remove('hidden');
})
document.getElementById('proj').children[0].addEventListener('mouseleave',(e)=>{
    let idx = e.target.id;
    e.target.style=`background-image:url('proj-${idx}.jpg')`;
    e.target.children[idx-1].classList.add('hidden');
})
