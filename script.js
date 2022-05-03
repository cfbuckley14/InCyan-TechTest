// using example Json data
// usually would use an API fetch function to attain information and then assign to a variable
// making the assumption that the Json payload will always be returned as structured below
// function needs to return html to create graph, to then be styled with css
// labels can be attained by exampleJsonData.title etc
// for loop over items count and output * for each iteration of the count

const exampleJsonData = {
    "title": "stock count",
    "xtitle": "asset",
    "ytitle": "count",
    "items": [
        {"chairs": 20},
        {"tables": 5},
        {"stands": 7},
        {"lamps": 8},
        {"cups": 10}
    ]
}


// function that loops through to return individual items
// for loop to iterate through each individual count and return '*' to display on graph for each item
// function to be called in displayGraph function
function displayCount(items) {
    let count = ""

    items.forEach((item) => {
        for (let i = 0; i < item.key; i ++) {
            count += "*"
        }
        return count
    })
}

// function accessing jsonData to return html required to create graph
// including title and labels
// calls another function, displayCount which return the count of each item
function displayGraph(jsonData) {
    let output = ""

    output += "<h1>" + exampleJsonData.title + "</h1>" +
        "<h2>" + exampleJsonData.ytitle + "</h2>" +
        "<h2>" + exampleJsonData.xtitle + "</h2>" +
        "<p>" + displayCount(exampleJsonData.items) + "</p>"

    document.querySelector('main').innerHTML += output
 }

displayGraph(exampleJsonData)
