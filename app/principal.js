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

const minLevelXp = [400, 800, 1200, 1600, 2000, 2600, 3200, 3800, 4400, 5000, 6000, 7000, 8000, 9000, 10000, 11600, 13200, 14800, 16400, 18000];


function changeLevelBasedOnXp() {
    function displayNewLevel(newLevel) {
        if(newLevel == -1) {
            document.getElementById('principal-level').value = 20
        } else {
            document.getElementById('principal-level').value = newLevel
        }
        
    }

    document.getElementById('principal-experiencia').addEventListener('change', () => {
        displayNewLevel(minLevelXp.findIndex(element => element > document.getElementById('principal-experiencia').value)) 
    })
}

