let indexMessage = Math.round(Math.random() * 10);
const menssages = [
    "Comece onde você está, use o que você tem e faça o que você pode.", 
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.",
    "Não importa que você vá devagar, contanto que você não pare.",
    "A inspiração existe, porém temos que encontrá-la trabalhando.",
    "Coragem é saber o que não temer.",
    "Acredite em milagres, mas não dependa deles.",
    "Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá",
    "Acredite em milagres, mas não dependa deles."
];
const entireCookie = document.querySelector(".entireCookie");
const brokenCookie = document.querySelector(".brokenCookie");
const cookie = document.querySelector(".entireCookie img");
const btnReset = document.querySelector("button");

cookie.addEventListener("click", openCookie)

function openCookie(){
    entireCookie.classList.add("hide")
    brokenCookie.classList.remove("hide")
}