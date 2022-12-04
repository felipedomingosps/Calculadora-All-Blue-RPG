

function countPointsUsed() {
    const attributes = document.querySelectorAll('.form__fieldset--brutos > div > input')
    const attributesValues = []

    attributes.forEach(attribute => {
        attributesValues.push(attribute.value)
    })

    return attributesValues.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
}

function displayRemainingAndUsedPoints() {
    const elements = [...document.querySelectorAll('.form__fieldset--brutos > div > input'), document.querySelector('#principal-experiencia')]

    const displayRemainingPoints = () => {
        document.getElementById('pontos-usados').innerHTML = countPointsUsed()
    };

    const displayUsedPoints = () => {
        document.getElementById('pontos-restantes').innerHTML = document.getElementById('principal-experiencia').value - countPointsUsed()
    };

    elements.forEach(element => {
        element.addEventListener('change', () => {
            displayRemainingPoints()
            displayUsedPoints()
        })
    })

}

displayRemainingAndUsedPoints()

