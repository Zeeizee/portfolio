const li = document.querySelectorAll('.navbar ul li a')
const goTop = document.querySelector('.top');
const loader=document.querySelector('.loader')


setTimeout(()=>{
    loader.classList.add('d-none')
},5000)



console.log("welcome")

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
