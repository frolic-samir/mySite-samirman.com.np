document.querySelector('.social').addEventListener('click',function(e){
    if(e.target.className == 'fab fa-github'){
        window.open('https://github.com/github-samir')
    }else if(e.target.className == 'fab fa-instagram'){
        window.open('https://www.instagram.com/merimas64/')
    }else if (e.target.className == 'fab fa-facebook'){
        window.open('https://www.facebook.com/meRimas64')
    }
})
