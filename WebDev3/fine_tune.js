import OpenAI from "openai"
const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

// upload training data
const upload= await openai.files.create({
    file: await fetch('training_data.jsonl').then(res => res.text()),
    purpose: "fine-tune"
})

console.log(upload)// get the file id from here

// create fine-tuning job
const fineTuneJob = await openai.fineTuning.jobs.create({
    training_file: "file-id",
    model: "gpt-4.1",
    suffix: "stock-predictor"
})

console.log(fineTuneJob)// get the status from it

// check status of fine-tuning jobs
const fineTuneJobs = await openai.fineTuning.jobs.retrieve("status-id")

console.log(fineTuneJobs)// get the new model name

// use the fine-tuned model
const response = await openai.chat.completions.create({
    model: "new-model-name",
    messages: [
        {role: "system", content: "You are a helpful assistant."},
        {role: "user", content: "Hello, how are you?"}
    ]
})

console.log(response)

// generate images from ai
async function generateImages() {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: "A photo of an astronaut riding a horse",
        n: 1,
        size: "1024x1024",
        style: "vivid", // also natural
        quality: "standard", // standard or hd
        response_format: "b64_json", // url(temporary) or b64_json(immediate and no expire time)
    })
    console.log(response)
    outputImg.innerHTML = `<img src="data:image/png;base64,${response.data[0].b64_json}" alt="The image API failed">`
}

generateImages()

// AI safety
async function main() {
    const completion= await openai.moderation.create({
        input: "I want to kill myself",
        user: "user-id"
    })
    const {flagged, categories}= completion.results[0]
    if (flagged) {
        console.log("This content is flagged as inappropriate.")
        console.log(categories)
    }
}

main()

/*
A CI/CD pipeline is an automated series of steps that takes code from a developer’s computer and moves it through building, testing,
 and deployment to a live environment


*/