const li = document.querySelectorAll('.navbar ul li a')
const goTop = document.querySelector('.top');
const loader=document.querySelector('.loader')
const contactForm=document.querySelector('.get-in-touch-cotact-form')


setTimeout(()=>{
    loader.classList.add('d-none')
},3000)
li.forEach(element => {

    element.addEventListener('click', e => {
        li.forEach(element => {
            console.log(element);
            element.classList.remove('actived');
        })

        e.target.classList.add('actived');
        console.log(e.target);

    }
    )
});

goTop.addEventListener('click', e => {

    li.forEach(element => {

        element.addEventListener('click', e => {

            li.forEach(element => {
                console.log(element);
                element.classList.remove('actived');
            });

        });


    });
    const getSelected = document.querySelector('.selected');
    console.log(getSelected);
    if (!getSelected.classList.contains('actived'))
        getSelected.classList.add('actived');


})
const btnGetInTouch=document.querySelector('.btn-submit')
const txtGetInTouch=document.querySelector('.email')
const formcontainer=document.querySelector('.get-in-touch-cotact-form')
const btncancel=document.querySelector('.cancel')
const form=document.querySelector('form')
const txtusername=document.querySelector('.username')
const txtemail=document.querySelector('.useremail')
const txtmsg=document.querySelector('.usermsg')

btnGetInTouch.addEventListener('click',()=>{

    formcontainer.classList.remove('d-none')
    txtmsg.value=txtGetInTouch.value

})
btncancel.addEventListener('click', (e)=>{
    e.preventDefault()
    form.reset()
    formcontainer.classList.add('d-none')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    emailsend();
    form.reset()
    txtGetInTouch.value="";
    
})


const emailsend=()=>{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "zenizee563@gmail.com",
        // Password : "yfuiobtuotzavibt",
        Password : "nwgtfkmofwsesefj",
        To : txtemail.value.trim(),
        From : "zenizee563@gmail.com",
        Subject : "GET IN TOUCH (ZEENAT PARVEEN)",
        Body : `Hello <b>${txtusername.value.trim()}</b>: <br> Thank you for contacting me.I have recieved your email. I will get back to you very soon.`
    }).then(
    ).catch(err=>{
        console.log(err)
    })
    Email.send({
        Host : "smtp.gmail.com",
        Username : "zenizee563@gmail.com",
        // Password : "yfuiobtuotzavibt",
        Password : "nwgtfkmofwsesefj",
        To : 'zenizee563@gmail.com',
        From : "zenizee563@gmail.com",
        Subject : `GET IN TOUCH ${txtusername.value}`,
        Body : `${txtusername.value} is trying to connect you through Get In Touch from this Email: ${txtemail.value.trim()} <br><br> ${txtmsg.value.trim()}  `
    }).then(()=>
        {formcontainer.classList.add('d-none');
        alert("Your email has been sent to Zeenat Parveen.Check your gmail account for confirmation");}
    ).catch(err=>{
        console.log(err)
    })
}