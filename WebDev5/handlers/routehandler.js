import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import { sanitizeInput } from '../utils/sanitizeInput.js'

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {

    try {
        const parsedBody = await parseJSONBody(req)
        // console.log(parsedBody)// get the posted data of the body
        const sanitizedBody = sanitizeInput(parsedBody)
        await addNewSighting(sanitizedBody)
        sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody))
    } catch (err) {
        sendResponse(res, 400, 'application/json', JSON.stringify({ error: err }))
    }

}

// can use npm package santizeHTML to have control what to display what to not
// npm EventEmitter- whenever an Event emit we can see it on our terminal(include timer)
