// Description
// document.getElementById('modal').addEventListener('click',()=>{
//     document.getElementById('extralarge-modal').classList.remove('hidden');
// })
document.getElementById('cross').addEventListener('click',()=>{
    document.getElementById('extralarge-modal').classList.add('hidden');
})
document.getElementById('crossed').addEventListener('click',()=>{
    document.getElementById('working').classList.add('hidden');
    document.querySelector('.hello').value = "";
    // document.querySelector('.hello').disabled = true;
    document.querySelector('.hello').selected = true;
    ele.forEach(e=>{
        e.children[0].classList.add('hidden');
        e.children[1].classList.add('hidden');
    })
    document.getElementById('para').classList.add('hidden')
})
document.getElementById('issued').addEventListener('click',()=>{
    document.getElementById('issues').classList.add('hidden');
})
let elem = Array.from(document.getElementsByClassName('click'));
elem.forEach(e => {
    e.addEventListener('click',(elem)=>{
        document.getElementById('extralarge-modal').style.background = "rgba(128, 128, 128, .8)";
        if(document.getElementById('extralarge-modal').classList.contains('hidden')){
            document.getElementById('extralarge-modal').classList.remove('hidden');
        }
    })
})

let w = Array.from(document.getElementsByClassName('work'));
w.forEach(e =>{
    e.addEventListener('click',(elem)=>{
        document.getElementById('working').style.background = "rgba(128, 128, 128, .8)";
        if(document.getElementById('working').classList.contains('hidden')){
            document.getElementById('working').classList.remove('hidden');
        }
    })
})

let is = Array.from(document.getElementsByClassName('issue'));
let pdname = "";
is.forEach(e =>{
    e.addEventListener('click',()=>{
        document.getElementById('issues').style.background = "rgba(128, 128, 128, .8)";
        if(document.getElementById('issues').classList.contains('hidden')){
            document.getElementById('issues').classList.remove('hidden');
        }
        pdname = e.parentElement.parentElement.children[0].innerHTML;
        // console.log(pdname);
        document.getElementById('issues').children[0].children[0].children[0].children[0].innerHTML = pdname;
    })
})

const selectElement = document.querySelector('.hello');
// console.log(selectElement)

let ele = Array.from(document.getElementsByClassName('sel'));

selectElement.addEventListener('change',(e)=>{
    // flag = true;
    url = e.target.value; 
    // console.log(url);
    async function fetching(){   
        const response = await fetch(url);
        const resp = await response.json();
        return resp;
    }
    fetching().then((data)=>{
        console.log(data);
        if(data.lcd=="Ok"){
            // arr[0] = 0;
            // dec[0] = 1;
            ele[0].children[0].classList.remove('hidden');
            ele[0].children[1].classList.add('hidden');
            // elem[0].children[2].classList.add('hidden');
            // elem[0].children[3].classList.add('hidden');
        }
        else{
            // brr[0] = 0;
            // dec[0] = 0;
            ele[0].children[1].classList.remove('hidden');
            ele[0].children[0].classList.add('hidden');
            // elem[0].children[2].classList.add('hidden');
            // elem[0].children[3].classList.add('hidden');
        }
        if(data.ad9833=="Ok"){
            // arr[1] = 0;
            // dec[1] = 1;
            ele[1].children[0].classList.remove('hidden');
            ele[1].children[1].classList.add('hidden');
            // elem[1].children[2].classList.add('hidden');
            // elem[1].children[3].classList.add('hidden');
        }
        else{
            // brr[1] = 0;
            // dec[1] = 0;
            ele[1].children[1].classList.remove('hidden');
            ele[1].children[0].classList.add('hidden');
            // elem[1].children[2].classList.add('hidden');
            // elem[1].children[3].classList.add('hidden');
        }
        if(data.triplefive=="Ok"){
            // arr[2] = 0;
            // dec[2] = 1;
            ele[2].children[0].classList.remove('hidden');
            ele[2].children[1].classList.add('hidden');
            // elem[2].children[2].classList.add('hidden');
            // elem[2].children[3].classList.add('hidden');
        }
        else{
            // brr[2] = 0;
            // dec[2] = 0;
            ele[2].children[1].classList.remove('hidden');
            ele[2].children[0].classList.add('hidden');
            // elem[2].children[2].classList.add('hidden');
            // elem[2].children[3].classList.add('hidden');
        }
        if(data.plus15V=="Ok"){
            // arr[3] = 0;
            // dec[3] = 1
            ele[3].children[0].classList.remove('hidden');
            ele[3].children[1].classList.add('hidden');
            // elem[3].children[2].classList.add('hidden');
            // elem[3].children[3].classList.add('hidden');
        }
        else{
            // brr[3] = 0;
            // dec[3] = 0;
            ele[3].children[1].classList.remove('hidden');
            ele[3].children[0].classList.add('hidden');
            // elem[3].children[2].classList.add('hidden');
            // elem[3].children[3].classList.add('hidden');
        }
        if(data.minus15V=="Ok"){
            // arr[4] = 0;
            // dec[4] = 1;
            ele[4].children[0].classList.remove('hidden');
            ele[4].children[1].classList.add('hidden');
            // elem[4].children[2].classList.add('hidden');
            // elem[4].children[3].classList.add('hidden');
        }
        else{
            // brr[4] = 0;
            // dec[4] = 0;
            ele[4].children[1].classList.remove('hidden');
            ele[4].children[0].classList.add('hidden');
            // elem[4].children[2].classList.add('hidden');
            // elem[4].children[3].classList.add('hidden');
        }
        if(data.plus5V=="Ok"){
            // arr[5] = 0;
            // dec[5] = 1;
            ele[5].children[0].classList.remove('hidden');
            ele[5].children[1].classList.add('hidden');
            // elem[5].children[2].classList.add('hidden');
            // elem[5].children[3].classList.add('hidden');
        }
        else{
            // brr[5] = 0;
            // dec[5] = 0;
            ele[5].children[1].classList.remove('hidden');
            ele[5].children[0].classList.add('hidden');
            // elem[5].children[2].classList.add('hidden');
            // elem[5].children[3].classList.add('hidden');
        }
        if(data.plus3point3V=="Ok"){
            // arr[6] = 0;
            // dec[6] = 1;
            ele[6].children[0].classList.remove('hidden');
            ele[6].children[1].classList.add('hidden');
            // elem[6].children[2].classList.add('hidden');
            // elem[6].children[3].classList.add('hidden');
        }
        else{
            // brr[6] = 0;
            // dec[6] = 0;
            ele[6].children[1].classList.remove('hidden');
            ele[6].children[0].classList.add('hidden');
            // elem[6].children[2].classList.add('hidden');
            // elem[6].children[3].classList.add('hidden');
        }
        if(data.varDC=="Ok"){
            // arr[7] = 0;
            // dec[7] = 1;
            ele[7].children[0].classList.remove('hidden');
            ele[7].children[1].classList.add('hidden');
            // elem[7].children[2].classList.add('hidden');
            // elem[7].children[3].classList.add('hidden');
        }
        else{
            // brr[7] = 0;
            // dec[7] = 0;
            ele[7].children[1].classList.remove('hidden');
            ele[7].children[0].classList.add('hidden');
            // elem[7].children[2].classList.add('hidden');
            // elem[7].children[3].classList.add('hidden');
        }
        if(data.ccled=="Ok"){
            // arr[8] = 0;
            // dec[8] = 1;
            ele[8].children[0].classList.remove('hidden');
            ele[8].children[1].classList.add('hidden');
            // elem[8].children[2].classList.add('hidden');
            // elem[8].children[3].classList.add('hidden');
        }
        else{
            // brr[8] = 0;
            // dec[8] = 0;
            ele[8].children[1].classList.remove('hidden');
            ele[8].children[0].classList.add('hidden');
            // elem[8].children[2].classList.add('hidden');
            // elem[8].children[3].classList.add('hidden');
        }
        if(data.caled=="Ok"){
            // arr[9] = 0;
            // dec[9] = 1;
            ele[9].children[0].classList.remove('hidden');
            ele[9].children[1].classList.add('hidden');
            // elem[9].children[2].classList.add('hidden');
            // elem[9].children[3].classList.add('hidden');
        }
        else{
            // brr[9] = 0;
            // dec[9] = 0;
            ele[9].children[1].classList.remove('hidden');
            ele[9].children[0].classList.add('hidden');
            // elem[9].children[2].classList.add('hidden');
            // elem[9].children[3].classList.add('hidden');
        }
        if(data.sevensegmentone=="Ok"){
            // arr[10] = 0;
            // dec[10] = 1;
            ele[10].children[0].classList.remove('hidden');
            ele[10].children[1].classList.add('hidden');
            // elem[10].children[2].classList.add('hidden');
            // elem[10].children[3].classList.add('hidden');
        }
        else{
            // brr[10] = 0;
            // dec[10] = 0;
            ele[10].children[1].classList.remove('hidden');
            ele[10].children[0].classList.add('hidden');
            // elem[10].children[2].classList.add('hidden');
            // elem[10].children[3].classList.add('hidden');
        }
        if(data.sevensegmenttwo=="Ok"){
            // arr[11] = 0;
            // dec[11] = 1;
            ele[11].children[0].classList.remove('hidden');
            ele[11].children[1].classList.add('hidden');
            // elem[11].children[2].classList.add('hidden');
            // elem[11].children[3].classList.add('hidden');
        }
        else{
            // brr[11] = 0;
            // dec[11] = 0;
            ele[11].children[1].classList.remove('hidden');
            ele[11].children[0].classList.add('hidden');
            // elem[11].children[2].classList.add('hidden');
            // elem[11].children[3].classList.add('hidden');
        }
        document.getElementById('para').innerHTML = data.remark;
        document.getElementById('para').classList.remove('hidden');
        document.getElementById('para').classList.add('flex');
        document.getElementById('para').classList.add('items-center');
        document.getElementById('para').classList.add('justify-center');

    })
})

async function fetched(){   
    const response = await fetch("/product");
    const resp = await response.json();
    return resp;
}

const elx = Array.from(document.getElementsByClassName('first'));
const m = new Map();
fetched().then((data)=>{
    const arr = Object.entries(data);
    // console.log(arr);
    arr.every(e=>{
        // console.log(e[1].name);
        m.set(e[1].name,e[1].count);
        m.set(e[1].name,e[1].count);
        return true;
    })
    // console.log(m);
    elx.forEach(e =>{
        const child = e.children[0];
        // console.log(m.get(child.innerHTML));
        if(m.has(child.innerHTML)){
            if(m.get(child.innerHTML)==0){
                e.children[2].innerHTML = 'Not Available';
                e.children[2].classList.remove('text-green-700');
                e.children[2].classList.add('text-red-700');
                e.children[4].children[0].classList.add('bg-slate-300');
                e.children[4].children[0].classList.add('text-slate-700');
                e.children[4].children[0].classList.remove('bg-white');
                e.children[4].children[0].classList.remove('hover:bg-black');
                e.children[4].children[0].classList.remove('hover:text-white');
                e.children[4].children[0].disabled = true;
            }
            else{
                e.children[2].innerHTML = 'Available';
                e.children[2].classList.add('text-green-700');
                e.children[2].classList.remove('text-red-700');
                e.children[4].children[0].classList.remove('bg-slate-300');
                e.children[4].children[0].classList.remove('text-slate-700');
                e.children[4].children[0].classList.add('bg-white');
                e.children[4].children[0].classList.add('hover:bg-black');
                e.children[4].children[0].classList.add('hover:text-white');
                e.children[4].children[0].disabled = false;
            }
        }
        else{
            e.children[2].innerHTML = 'Not Available';
            e.children[2].classList.remove('text-green-700');
            e.children[2].classList.add('text-red-700');
            e.children[4].children[0].classList.add('bg-slate-300');
            e.children[4].children[0].classList.add('text-slate-700');
            e.children[4].children[0].classList.remove('bg-white');
            e.children[4].children[0].classList.remove('hover:bg-black');
            e.children[4].children[0].classList.remove('hover:text-white');
            e.children[4].children[0].disabled = true;
        }
    })
    document.getElementById('myform').addEventListener('submit', async ()=>{
        document.getElementById('pname').value = pdname;
        // console.log(m.get(pdname));
        const result = await fetch(`/product/${pdname}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:pdname,
                count: m.get(pdname)-1
            })
        });
        // console.log(m);
        // m.set(child.innerHTML, m.get(child.innerHTML) - 1);
        // console.log(m);
        // console.log(elx[0].children[0].innerHTML);
    })
})

