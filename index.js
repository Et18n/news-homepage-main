let cross =document.getElementById('cross_btn')
let btn=document.getElementById('burger')

btn.addEventListener('click', function() {
    console.log('click')
    cross.classList.toggle('hidden')
    btn.classList.toggle('hidden')
    if(!cross.classList.contains('hidden')){
        console.log('cross')
        document.getElementById('nav_links').classList.add('opening_bar')
        


        document.querySelector('.overlay').classList.add('visible');
    }
        
})
cross.addEventListener('click', function() {
    console.log('click')
    cross.classList.toggle('hidden')
    btn.classList.toggle('hidden')
    if(!btn.classList.contains('hidden')){
        console.log('cross')
        document.getElementById('nav_links').classList.remove('opening_bar')


        document.querySelector('.overlay').classList.remove('visible'); 
    }
})
