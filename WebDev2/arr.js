let count = 1;
function getLabelsHTML(text, sender, ...staffObjs) {
    return staffObjs.map(staff => {
        return `<div class="label">
            <p>${text} ${count++}</p>
            <p>${sender}</p>
            <p>${staff.name}</p>
            <p>${staff.role}</p>
        </div>`
    }).join('')
}

document.getElementById("app").innerHTML = getLabelsHTML(
    "Assignment",
    "Project Lead",
    { name: "Jane Cooper", role: "UI/UX Designer" },
    { name: "Robert Fox", role: "Lead Developer" },
    { name: "Esther Howard", role: "Product Manager" },
    { name: "Cameron Williamson", role: "QA Engineer" }
)