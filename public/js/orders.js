let elem = Array.from(document.getElementsByClassName('det'));
elem.forEach(e =>{
    e.addEventListener('click',()=>{
        let idx = e.id.charAt(e.id.length-1);
        document.getElementById(`initialdiv-${idx}`).classList.add('hidden');
        document.getElementById(`finaldiv-${idx}`).classList.remove('hidden');
        document.getElementById(`prodimg-${idx}`).classList.remove('w-40');
        document.getElementById(`prodimg-${idx}`).classList.remove('h-40');
        document.getElementById(`prodimg-${idx}`).classList.add('w-52');
        document.getElementById(`prodimg-${idx}`).classList.add('h-52');
        document.getElementById(`prodinfo-${idx}`).classList.add('hidden');
    })
})
let ele = Array.from(document.getElementsByClassName('find'))
ele.forEach(e =>{
    e.addEventListener('click',()=>{
        let idx = e.id.charAt(e.id.length-1);
        document.getElementById(`initialdiv-${idx}`).classList.remove('hidden');
        document.getElementById(`finaldiv-${idx}`).classList.add('hidden');
        document.getElementById(`prodimg-${idx}`).classList.add('w-40');
        document.getElementById(`prodimg-${idx}`).classList.add('h-40');
        document.getElementById(`prodimg-${idx}`).classList.remove('w-52');
        document.getElementById(`prodimg-${idx}`).classList.remove('h-52');
        document.getElementById(`prodinfo-${idx}`).classList.remove('hidden');
    })
})

let x = Array.from(document.getElementsByClassName('pro'));
x.forEach(e =>{
    e.addEventListener('click',()=>{
        let i = e.id.charAt(e.id.length-1);
        document.getElementById(`problem-${i}`).classList.remove('hidden');
        document.getElementById(`initialdiv-${i}`).classList.add('hidden');
        document.getElementById(`prodimg-${i}`).classList.remove('w-40');
        document.getElementById(`prodimg-${i}`).classList.remove('h-40');
        document.getElementById(`prodimg-${i}`).classList.add('w-80');
        document.getElementById(`prodimg-${i}`).classList.add('h-80');
        document.getElementById(`prodinfo-${i}`).classList.add('hidden');
    })
})

let y = Array.from(document.getElementsByClassName('prob'));
y.forEach(e =>{
    e.addEventListener('click',()=>{
        let i = e.id.charAt(e.id.length-1);
        document.getElementById(`problem-${i}`).classList.add('hidden');
        document.getElementById(`initialdiv-${i}`).classList.remove('hidden');
        document.getElementById(`prodimg-${i}`).classList.add('w-40');
        document.getElementById(`prodimg-${i}`).classList.add('h-40');
        document.getElementById(`prodimg-${i}`).classList.remove('w-80');
        document.getElementById(`prodimg-${i}`).classList.remove('h-80');
        document.getElementById(`prodinfo-${i}`).classList.remove('hidden');
    })
})

async function fetched(){   
    // console.log(Buffer.from(localStorage.getItem('token')), 'base64').toString();
    const response = await fetch("/issuenow");
    const resp = await response.json();
    return resp;
}
// let arr = [];
// arr = Object.entries(data);
// console.log(data[0].autho);
const data = await fetched();
// console.log(data.length);
let len = data.length;
let cnt = len;
console.log("Hi",len);
const ems = Array.from(document.getElementsByClassName('rows'));
let idx = 0;
ems.forEach(e=>{
    if(cnt==0){
        e.classList.add('hidden');
    }
    else{
        e.children[1].children[0].innerHTML = data[idx].pname;
        e.children[1].children[1].innerHTML = 'Date of Issue: ' + data[idx].issdate.substring(0,10);
        e.children[1].children[2].innerHTML = 'Date of Return: ' + data[idx].retdate.substring(0,10);
        e.children[3].children[1].children[0].children[0].children[1].innerHTML = data[idx].name;
        e.children[3].children[1].children[0].children[1].children[1].innerHTML = data[idx].uid;
        e.children[3].children[1].children[0].children[2].children[1].innerHTML = data[idx].contact;
        e.children[3].children[1].children[1].children[0].children[1].innerHTML = data[idx].subject;
        e.children[3].children[1].children[1].children[1].children[1].innerHTML = data[idx].facname;
        e.children[3].children[1].children[1].children[2].children[1].innerHTML = data[idx].autho;
        cnt--;
        idx++;
    }
})

if(localStorage.length==0){
    document.getElementById('nosign').classList.remove('hidden');
    document.getElementById('sign').classList.add('hidden');
}
else{
    document.getElementById('nosign').classList.add('hidden');
    document.getElementById('sign').classList.remove('hidden');
}
