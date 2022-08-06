document.getElementById('login_btn').addEventListener('click',()=>{
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('login').style.background = "rgba(128, 128, 128, .8)";
    document.getElementById('login').classList.add('flex');
    document.getElementById('login').classList.add('justify-center');
    document.getElementById('login').classList.add('items-center');
    
})
document.getElementById('log_out').addEventListener('click',()=>{
    localStorage.clear(); 
    document.getElementById('login_btn').classList.remove('hidden');
    document.getElementById('logout_btn').classList.add('hidden');
    document.getElementById('logout').classList.add('hidden');
    window.location.href = '/index';
})
document.getElementById('logout_btn').addEventListener('click',()=>{
    document.getElementById('logout').classList.remove('hidden');
    document.getElementById('logout').classList.add('flex');
    document.getElementById('logout').classList.add('justify-center');
    document.getElementById('logout').classList.add('items-center');
    document.getElementById('logout').style.background = "rgba(128, 128, 128, .8)";
})
document.getElementById('band-4').addEventListener('click',()=>{
    document.getElementById('logout').classList.add('hidden');
    document.getElementById('logout').classList.remove('flex');
    document.getElementById('logout').classList.remove('justify-center');
    document.getElementById('logout').classList.remove('items-center');
})
document.getElementById('changepassword').addEventListener('click',()=>{
    document.getElementById('login').classList.add('hidden');
    document.getElementById('logout').classList.add('hidden');
    document.getElementById('changepass').classList.remove('hidden');
    document.getElementById('changepass').classList.add('flex');
    document.getElementById('changepass').classList.add('justify-center');
    document.getElementById('changepass').classList.add('items-center');
    document.getElementById('changepass').style.background = "rgba(128, 128, 128, .8)";
})
document.getElementById('band-1').addEventListener('click',()=>{
    document.getElementById('login').classList.add('hidden');
    document.getElementById('login').classList.remove('flex');
    document.getElementById('login').classList.remove('justify-center');
    document.getElementById('login').classList.remove('items-center');
    document.getElementsByClassName('logentry')[0].children[1].value = "";
    document.getElementsByClassName('logentry')[1].children[1].value = "";
})
document.getElementById('band-2').addEventListener('click',()=>{
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('signup').classList.remove('flex');
    document.getElementById('signup').classList.remove('justify-center');
    document.getElementById('signup').classList.remove('items-center');
    document.getElementsByClassName('signentry')[0].children[1].value = "";
    document.getElementsByClassName('signentry')[1].children[1].value = "";
    document.getElementsByClassName('signentry')[2].children[1].value = "";
    document.getElementsByClassName('signentry')[3].children[1].value = "";
})
document.getElementById('create').addEventListener('click',()=>{
    document.getElementById('login').classList.add('hidden');
    document.getElementById('signup').classList.remove('hidden');
    document.getElementById('signup').style.background = "rgba(128, 128, 128, .8)";
    document.getElementById('signup').classList.add('flex');
    document.getElementById('signup').classList.add('justify-center');
    document.getElementById('signup').classList.add('items-center');
})
document.getElementById('log').addEventListener('click',()=>{
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').style.background = "rgba(128, 128, 128, .8)";
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('login').classList.add('flex');
    document.getElementById('login').classList.add('justify-center');
    document.getElementById('login').classList.add('items-center');
})

// document.getElementById('lostchange').addEventListener('click',()=>{
//     document.getElementById('login').classList.add('hidden');
//     document.getElementById('changepass').classList.remove('hidden');
//     document.getElementById('changepass').classList.add('flex');
//     document.getElementById('changepass').classList.add('justify-center');
//     document.getElementById('changepass').classList.add('items-center');
//     document.getElementById('changepass').style.background = "rgba(128, 128, 128, .8)";

// })
document.getElementById('band-3').addEventListener('click',()=>{
    document.getElementById('changepass').classList.add('hidden');
    document.getElementById('changepass').classList.remove('flex');
    document.getElementById('changepass').classList.remove('justify-center');
    document.getElementById('changepass').classList.remove('items-center');
    document.getElementsByClassName('chgentry')[0].children[1].value = "";
    document.getElementsByClassName('chgentry')[1].children[1].value = "";
    document.getElementsByClassName('chgentry')[2].children[1].value = "";
})
document.getElementById('back').addEventListener('click',()=>{
    document.getElementById('changepass').classList.add('hidden');
    document.getElementById('logout').classList.remove('hidden');
    document.getElementById('logout').style.background = "rgba(128, 128, 128, .8)";
    document.getElementById('logout').classList.add('flex');
    document.getElementById('logout').classList.add('justify-center');
    document.getElementById('logout').classList.add('items-center');
    document.getElementById('curremail').value = "";
    document.getElementById('currpass').value = "";
    document.getElementById('updatepass').value = "";
})

if(localStorage.length>0){
    document.getElementById('login_btn').classList.add('hidden');
    document.getElementById('logout_btn').classList.remove('hidden');
}

const login = document.getElementById('login');
login.addEventListener('submit', logUser);
async function logUser(e){
    e.preventDefault();
    const email = document.getElementById('logemail').value;
    const password = document.getElementById('logpassword').value;

    const result = await fetch('/logstud',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email,
            password
        })
    }).then((res)=>res.json())

    if(result.status == 'ok'){
        console.log('Got the token: ', result.data);
        localStorage.setItem('token', result.data);
        window.location.href = '/index'
        alert("Logged In Successfully");
    }
    else{
        alert(result.data);
    }
    // console.log(result.status);
}


const chgpass = document.getElementById('changepass');
chgpass.addEventListener('submit', chgPass);
async function chgPass(e){
    e.preventDefault();
    const email = document.getElementById('curremail').value;
    const currpassword = document.getElementById('currpass').value;
    const updatedpassword = document.getElementById('updatepass').value;

    const result = await fetch('/chgpass',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email,
            currpassword,
            updatedpassword,
            token:localStorage.getItem('token')
        })
    }).then((res)=>res.json())

    if(result.status == 'ok'){
        console.log('Got the token: ', result.data);
        alert(result.data);
        localStorage.clear();
        window.location.href = '/index';
    }
    else{
        alert(result.data);
    }
    // console.log(result.status);
}


const reg = document.getElementById('signup');
reg.addEventListener('submit', registerUser);
async function registerUser(e){
    e.preventDefault();
    const name = document.getElementById('sname').value;
    const uid = document.getElementById('suid').value;
    const email = document.getElementById('regemail').value;
    const password = document.getElementById('regpassword').value;
    // console.log(name, uid, email, password);

    const result = await fetch('/registud',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            uid,
            email,
            password
        })
    }).then((res)=>res.json())

    if(result.status == 'ok'){
        localStorage.clear();
        document.getElementById('signup').classList.add('hidden');
        // console.log("Hi");
        alert(result.data);
    }
    else{
        // console.log(result.data);
        alert(result.data);
    }
}