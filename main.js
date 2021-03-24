
const makechar = (char) => {
    const container = document.getElementById("charcontainer")
    const obj = document.createElement("div")
    obj.classList.add("card")

    const name = char["name"]
    const element = char["element"]

    obj.innerHTML = `
        <p>Name: ${name}</p>
        <p>Element: ${element}</p>
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
    const charlib = [{"name":"Razor", "element":"Elektro"},
                    {"name":"Ningguang", "element":"Geo"},
                    {"name":"Amber", "element":"Pyro"},
                    {"name":"Barbara", "element":"Hydro"},
                    {"name":"Saccharose", "element":"Anemo"},
                    {"name":"Xiangling", "element":"Pyro"},
                    {"name":"Noelle", "element":"Geo"},
                    {"name":"Beidou", "element":"Elektro"},
                    {"name":"Kaeya", "element":"Kryo"}];
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