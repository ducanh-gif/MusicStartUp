let signOut=document.getElementById('sign_out')

signOut.addEventListener('click', (e) => {
    localStorage.removeItem('currentUsers')
     location.href('./login.html')
})