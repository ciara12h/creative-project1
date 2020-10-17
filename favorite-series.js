let baseUrl = 'https://the-one-api.dev/v2';

books();
movies();
characters();

//alert("alert");
async function getUrl(url) {
    let headers = new Headers();
    headers.set('Authorization', "Bearer sJ1MpdmZzqyoC_LaVlUA");
    let response = await fetch(url, { method: 'GET', headers: headers })
    let json = await response.json();
    return json;
};



async function books() {
    let url = baseUrl + "/book";
    let json = await getUrl(url);
    console.log(json);
    let result = "";
    for (let book of json.docs) {
        result += "<li> <a href='#' title='click to view chapter titles' onclick='bookChapters(this)' id='" +
            book._id + "' class='book'>" + book.name + "</a> <span id='chapters_"+ book._id + "'> </span> </li>";
    }
    document.getElementById("bookTitles").innerHTML = await result;
}

async function bookChapters(item) {
    event.preventDefault();
    document.getElementById("chapters_" + item.id).innerHTML = '<img src="loading.gif" style="width: 100px"/>';
    let url = baseUrl + "/book/" + item.id + "/chapter";
    let json = await getUrl(url);
    let result = "<ol>";
    for (let chapter of json.docs) {
        result += "<li>" + chapter.chapterName + "</li>";
    }
    result += "</ol>";
    document.getElementById("chapters_" + item.id).innerHTML = await result;
}

async function movies() {
    let url = baseUrl + "/movie";
    let json = await getUrl(url);
    console.log(json);
    let result = "";
    for (let movie of json.docs) {
        result += "<li>" + movie.name + "</li>";
    }
    document.getElementById("movieTitles").innerHTML = await result;
}

async function characters() {
    let url = baseUrl + "/character";
    let json = await getUrl(url);
    let result = "";
    for (character of json.docs) {
        result += "<tr>"
        result += "<td> <a target='_blank' href='" + character.wikiUrl + "'>" + character.name + "</a></td>"
        result += "<td>" + character.race + "</td>"
        result += "<td>" + character.gender + "</td>"
        result += "<td>" + character.birth + "</td>"
        result += "<td>" + character.death + "</td>"
        result += "<td>" + character.spouse + "</td>"

        result += "</tr>"
    }
    document.getElementById("character-data").innerHTML = result;

       
}






