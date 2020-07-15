let logos = [
    {
        img: 'src="../imagens/html5new.png" alt="html5"',
    },
    {
        img:'src="../imagens/css3new.png" alt="css3"',
    },
    {
        img:'src="../imagens/javascriptnew.png" alt="javascript"',
    },
    {
        img:'src="../imagens/php.png" alt="php"',
    },
    {
        img:'src="../imagens/mysqlnew.png" alt="mysql"',
    },
    {
        img:'src="../imagens/linuxnew.png" alt="linux"',
    },
    {
        img:'src="../imagens/githubnew.png" alt="github"',
    },
    {
        img:'src="../imagens/bootstrapnew.png" alt="bootstrap"',
    }
    
]

let fotos = document.getElementById('logos')
function criar(){

    for (p of logos){
        fotos.innerHTML += `<div><img ${p.img}></div>`
    }
}
criar()