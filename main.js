
const makechar = (char) => {
    const container = document.getElementById("charcontainer")
    const obj = document.createElement("div")
    obj.classList.add("card")

    const name = char["name"]
    const element = char["element"]
    const id = char["id"]

    obj.innerHTML = `
        <p>Name: ${name}</p>
        <p>Element: ${element}</p>
        <button class="details" onclick="window.location='/charsite/index.html?id=${id}'">Details</button>
    `

    container.appendChild(obj)
}

const deleteall = () => {
    const container = document.getElementById("charcontainer")

    container.innerHTML = '';
}

const search = () => {
    deleteall()
    const search = document.getElementById("search").value
    if(search == "") {
        alert("No Empty search!!!")
        return false;
    }
    const chars = getchars(search)

    for (let i = 0; i<chars.length; i++) {
        makechar(chars[i])
    }
}

const getchars = (got) => {
    const charlib = data
    let results = []

    for (let i = 0; i<charlib.length; i++) {
        if (charlib[i]["name"].includes(`${got}`)) {
            results.push(charlib[i])
        }
    }
    return results
}


const chars = getchars("")

for (let i = 0; i<chars.length; i++) {
    makechar(chars[i])
}