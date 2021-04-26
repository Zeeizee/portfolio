const li = document.querySelectorAll('.navbar ul li a')
console.log(li)
li.forEach(element => {

    element.addEventListener('click', e => {
        e.preventDefault();

        li.forEach(element => {
            console.log(element);
            element.classList.remove('actived');
        })

        e.target.classList.add('actived');
        console.log(e.target);

    }

    )
});


// const li = document.querySelectorAll('.navbar ul li a')
// console.log(li)
// li.forEach(element => {

//     element.addEventListener('click', e => {
//         e.preventDefault();

//         li.forEach(element => {
//             console.log(element);
//             element.classList.remove('actived');
//         })

//         e.target.classList.add('actived');
//         console.log(e.target);

//     }

//     )
// });