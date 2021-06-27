console.log('script ingeladen')
// thema switcher
const switchTheme = document.querySelector('.theme-switcher');

if (switchTheme) {
    switchTheme.addEventListener('click', function(){
        const theBody = document.querySelector(".colorbg , .colorbgcalc");
        const switchers = document.querySelectorAll('.switchers')
        theBody.classList.toggle('colorbg_dark')

        for (let i = 0; i < switchers.length; i++) {
            const changeSwitcher = switchers[i];
            changeSwitcher.classList.toggle('switch-dark')
        }

    })

}

// get alert welcome to calculator when comming from other nav pages

const getAlert = document.querySelector('.alert-get');

if (getAlert) {
    getAlert.addEventListener('click', function(){
       alert('Welcome to the Calculator');
    })
}

