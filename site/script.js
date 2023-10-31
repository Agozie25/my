const bars = document.querySelector('.bars')
const modalBox = document.querySelector('.modal-box')
const back = document.querySelector('.back')
const xMark = document.querySelector('.mark')
const next = document.querySelector('.next')
const content = document.querySelector('.content')
const navbar = document.querySelector('.navbar')
const mark2 = document.querySelector('.mark2')

const mark3 = document.querySelector('.mark3')
const profile = document.querySelector('#profile')
const gallery = document.querySelector('#gallery')
const portfolio = document.querySelector('#portfolio')


const hireMeBtn = document.querySelector('.HireMe')
const mark4 = document.querySelector('.mark4')
const send = document.querySelector('.send')
const contactModal = document.querySelector('.contact')
const messageBox = contactModal.querySelector('h2')
const form =  document.querySelector('form')
const inputel = form.querySelector('.inputName');
const forms = form.querySelectorAll('input');



mark4.addEventListener('click',()=>{
    modalBox.classList.remove('visible')
    back.classList.remove('visible')
    contactModal.classList.toggle('visible')
    content.classList.remove('visible')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    return;
})

hireMeBtn.addEventListener('click',()=>{
    portfolio.classList.remove('visible')
    content.classList.add('visible')
    contactModal.classList.add('visible')
    // modalBox.classList.remove('visible')
})

send.addEventListener('click',()=>{
    if(!inputel.value){
        alert('Nothing to send.')
        return
    }else{
            messageBox.style.display = 'block'
            form.style.display = 'none'
        }
})



next.addEventListener('click',()=>{
    navbar.classList.toggle('visible')
    // content.classList.remove('visible')
    modalBox.classList.remove('visible')
    back.classList.remove('visible')

})

mark2.addEventListener('click',()=>{
    navbar.classList.remove('visible')
    content.classList.remove('visible')


})


xMark.addEventListener('click',()=>{
    modalBox.classList.remove('visible')
    back.classList.remove('visible')
    content.classList.remove('visible')


})

back.addEventListener('click',()=>{
    modalBox.classList.remove('visible')
    back.classList.remove('visible')
    content.classList.remove('visible')
    portfolio.classList.remove('visible')
    contactModal.classList.remove('visible')



})
function backDrop(){
    back.classList.toggle('visible')
    modalBox.classList.toggle('visible')
    content.classList.toggle('visible')
    navbar.classList.remove('visible')


}
bars.addEventListener('click',backDrop)

// portfolio

profile.addEventListener('click',()=>{
    content.classList.add('visible')
    navbar.classList.remove('visible')
    console.log(portfolio)
    
    if(portfolio.classList !== 'visible'){
        portfolio.classList.add('visible')
        back.classList.toggle('visible')
        
    }else{
        portfolio.classList.remove('visible')
    }
    
    // portfolio.classList.toggle('visible')
    
})



gallery.addEventListener('click',()=>{
    modalBox.classList.toggle('visible')

})

mark3.addEventListener('click',()=>{
    back.classList.remove('visible')
    portfolio.classList.remove('visible')
    content.classList.remove('visible')

})

// contact


