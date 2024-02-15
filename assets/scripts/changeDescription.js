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
            cardName.innerHTML = ' Node.js '
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
        if(nameCard === '.bootstrap') {
            cardName.innerHTML = ' bootstrap '
        }  
        if(nameCard === '.react') {
            cardName.innerHTML = ' react '
        }  
        if(nameCard === '.tailwind') {
            cardName.innerHTML = ' tailwind '
        }  
        if(nameCard === '.next') {
            cardName.innerHTML = ' Next.js '
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
    'Intermediário.'
)

changeDescription(
    '.node',
    'Intermediário.'   
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
changeDescription(
    '.bootstrap',
    'Intermediário.'
)
changeDescription(
    '.next',
    'Básico.'
)
changeDescription(
    '.react',
    'Básico.'
)
changeDescription(
    '.tailwind',
    'Básico.'
)


