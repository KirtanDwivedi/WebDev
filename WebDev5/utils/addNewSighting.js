import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from './getData.js'

export async function addNewSighting(sighting) {
    try {
        const sightings = await getData()
        sightings.push(sighting)

        const filePath = path.join('data', 'data.json')
        await fs.writeFile(filePath, JSON.stringify(sightings, null, 2), 'utf8')
    } catch (err) {
        throw new Error(err)
    }
}