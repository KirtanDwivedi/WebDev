const eventSource = new EventSource('temp/live')
const tempDisplay = document.getElementById('temp-display')

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data)
    tempDisplay.textContent = data.temperature
}

eventSource.onerror = () => {
    console.log('Error in event source')
    eventSource.close()
}