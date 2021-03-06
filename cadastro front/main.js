const maskElements = document.querySelectorAll("[data-mascara]")

const fnMasks = {
    matricula: maskMatricula
}

function maskMatricula(el) {
    el.addEventListener("keydown", ev => {
        const key = ev.key
        if (key == "a") {
            ev.preventDefault()
        }
    })
}

maskElements.forEach(el => {
    const maskName = el.dataset.mascara
    const fnMascara = fnMasks[maskName]
    fnMascara(el)
})

const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btAdd.addEventListener("click",() => {
    const cloneModal = templateModalAluno.content.cloneNode(true)
    container.appendChild(cloneModal)

})

container.addEventListener("click", ev => {
    const btClose = ev.target.closest(".bt-close")
    if (btClose) {
        const modal = ev.target.closest(".modal")
        modal.remove()
    }
    
    const btAction = ev.target.closest(".action")
    
    if (btAction) {
        form = document.querySelector("form")
        dadosFormulario = new FormData(form)
        dadosFormulario.forEach(value => console.log(value))
    }
})


/**
 * x = document.querySelector("form")
 * f = new formData()
 *  */

/*let i = 100

while (i--) {
    const z = templateModalAluno.content.cloneNode(true)
    container.appendChild(z)
}*/

