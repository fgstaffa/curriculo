let logos = [
    {
        img: 'src="../imagens/html5new.png" alt="html5"',
        // p: 'Conhecimento intermediário'
    },
    {
        img:'src="../imagens/css3new.png" alt="css3"',
        // p: 'Conhecimento intermediário'
    },
    {
        img:'src="../imagens/javascriptnew.png" alt="javascript"',
        // p: 'Estudando atualmente'
    },
    {
        img:'src="../imagens/php.png" alt="php"',
        // p: 'Conhecimento Básico'
    },
    {
        img:'src="../imagens/mysqlnew.png" alt="mysql"',
        // p: 'Conhecimento Básico'
    },
    {
        img:'src="../imagens/linuxnew.png" alt="linux"',
        // p: 'Usuário'
    },
    {
        img:'src="../imagens/githubnew.png" alt="github"',
        // p: 'Conhecimento Básico'
    },
    {
        img:'src="../imagens/bootstrapnew.png" alt="bootstrap"',
        // p: 'Conhecimento Básico'
    }
    
]


let fotos = document.getElementById('logos')
function criar(){

    for (p of logos){
        fotos.innerHTML += `<div id="mudar"><img ${p.img}></div>`
    }
}
criar()

let quadro = document.getElementById('quadro')

function abrir(){

    quadro.innerHTML = '<h2>Desenvolver Front End</h2><img id="foto-pc" src="../imagens/coding.png" alt=""><p>Apaixonado por tecnologia! Hoje estudante    de Web Full Stack, evoluindo sempre para ser   um grande desenvolver. Cursos e mais cursos   buscando sempre um melhor desempenho.</p>'
}
abrir()


// let mudar = document.getElementById('mudar')


// let cinza = mudar.addEventListener('mouseover', function change(){
//     mudar.style.backgroundColor = 'rgba(27, 47, 74, 80%)'
//     mudar.style.border = '2px solid black'
//     mudar.style.color = '#e4e9eb'
// })


// let branco = mudar.addEventListener('mouseout', function change(){
//     mudar.style.backgroundColor = '#e4e9eb'
//     mudar.style.border = '2px solid rgba(27, 47, 74, 80%)'
//     mudar.style.color = 'rgba(27, 47, 74, 80%)' 
// })





