document.addEventListener('DOMContentLoaded',function(){
const a = document.getElementById('adminis')
a.addEventListener('click',function(){
    const code = prompt("Veuillez confirmer votre identité avec votre code d'Administrateur:");
    if(code === 'P31G3Miage'){
        window.location.href = "https://projetmiage.github.io/test.gethub.io/admin/admin.html"
    }else{
        alert("Connexion echoue!");
    }
});
});