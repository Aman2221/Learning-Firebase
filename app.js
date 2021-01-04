// const List  = document.querySelector("#list");
// const renderDate = (doc_1) => {
// const li  = document.createElement('li');
// const date = document.createElement('h3');
// li.appendChild(date);
// li.setAttribute('data-id',doc_1.id);
// List.appendChild(li);
// date.textContent = doc_1.data().text;
// }

// const renderTime = (doc_2) => {
//     const li  = document.createElement('li');
//     const time = document.createElement('h3');
//     li.appendChild(time);
//     li.setAttribute('data-id',doc_2.id);
//     List.appendChild(li);
//     time.textContent = doc_2.data().text;
// }

// const renderEmail = (doc_3) => {
//     const li  = document.createElement('li');
//     const email = document.createElement('h3');
//     li.appendChild(email);
//     li.setAttribute('data-id',doc_3.id);
//     List.appendChild(li);
//     email.textContent = doc_3.data().text;
// }
// // Geetting data -- Date

// db.collection('Date').get().then((snapshots) => {
//     snapshots.docs.forEach(doc_1 => {
//         renderDate(doc_1);
//     })
// })

// // Geetting data -- Time

// db.collection('Time').get().then((snapshots) => {
//     snapshots.docs.forEach(doc_2 => {
//         renderTime(doc_2);
//     })
// })

// // Geetting data -- Email

// db.collection('Email').get().then((snapshots) => {
//     snapshots.docs.forEach(doc_3 => {
//         renderEmail(doc_3);
//     })
// })
// Putting data

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('Programming_Lang').add({
//         Name : form.name.value
//     })
//     form.name.value = '';
// })

// Login user 
const Login_Form = document.querySelector('#LoginForm');
Login_Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#login_Email').value;
    const password = document.querySelector('#login_Password').value;

    auth.signInWithEmailAndPassword(email, password).then(success => {
        console.log('Login Successfull');
    })

    // db.collection('Programming_Lang').add({
    //     Name : Login_Form.login_Email.value
    // })
})

//Sign up user 
const Signup_Form = document.querySelector('#SignupForm');
Signup_Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signin_Email').value;
    const password = document.querySelector('#signin_Password').value;

    auth.createUserWithEmailAndPassword(email, password).then(success => {
        console.log('SignUp Successfull');
    })
})

//Sign Out
const Signout_Button = document.querySelector('#signout_Btn');
Signout_Button.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
})

auth.onAuthStateChanged(user => {
    if(user){
        console.log('Login');
    }
    else{
        console.log('Logout');
    }
})
const render = (doc) => {
    let name = document.createElement('h2');
    name.textContent = doc.data().Name;
    console.log(name);
}
db.collection('Programming_Lang').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        render(doc);
    })
})
