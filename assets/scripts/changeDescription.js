// Mudar a Descrição

const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' Html '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' Css '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' JavaScript '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git '
        } 
        if(nameCard === '.node') {
            cardName.innerHTML = ' Node '
        } 
        if(nameCard === '.linux') {
            cardName.innerHTML = ' Linux '
        } 
        if(nameCard === '.docker') {
            cardName.innerHTML = ' Docker '
        } 
        
        if(nameCard === '.sql') {
            cardName.innerHTML = ' SQL '
        }
        if(nameCard === '.postman') {
            cardName.innerHTML = ' Postman '
        }  
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* passe o cursor sobre os ícones para saber mais *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Intermediário.'
)

changeDescription(
    '.css',
    'Intermediário.'
)

changeDescription(
    '.js',
    'Básico.'
)

changeDescription(
    '.node',
    'Básico.'   
)
changeDescription(
    '.sql',
    'Intermediário.'   
)
changeDescription(
    '.git',
    'Intermediário.'
)
changeDescription(
    '.linux',
    'Intermediário.'
)

changeDescription(
    '.docker',
    'Intermediário.'   
)
changeDescription(
    '.postman',
    'Básico.'
)


