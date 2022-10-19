const para = document.querySelector('.quote');
const btn = document.querySelector('.btn');
const id = document.querySelector('.id');

const getAdvice = async () => {
    await fetch("http://api.adviceslip.com/advice")
        .then((res) => res.json()) 
        .then((data) => {
            console.log(data.slip.advice);
            let advice = `"${data.slip.advice}"`;
            let idContent = `ADVICE # ${data.slip.id}`;//add Advice #

            para.textContent = advice;
            id.textContent = idContent;

        })
        .catch((err) => console.log(err.message))
};

getAdvice();

btn.addEventListener('click', function(){
    getAdvice();
})