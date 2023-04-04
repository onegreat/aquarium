const applicantForm = document.getElementById('form-main')

function serializeForm(formNode) {
    const { elements } = formNode

    const data = new FormData()

    Array.from(elements)
        .filter((item) => !!item.name)
        .forEach((element) => {
            const { name, type } = element
            const value = type === 'checkbox' ? element.checked : element.value

            data.append(name, value)
        })

    return new FormData(formNode)
}


function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    serializeForm(applicantForm)
    console.log('Отправка!')
}


applicantForm.addEventListener('submit', handleFormSubmit)


async function sendData(data) {
    return await fetch('/api/apply/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    })
}
async function handleFormSubmit(event) {
    event.preventDefault()

    const data = serializeForm(event.target)
    const response = await sendData(data)
}


//  Отправлять объект с 4 полями.