

let api_url = 'https://api.shrtco.de/v2/shorten?url=' + input_link;

function copyText(htmlElement) {
        if(!htmlElement) {
            return;
        }
        let elementText = htmlElement.innerText;

        let inputElement = document.createElement('input');
        inputElement.setAttribute('value', elementText);
        document.body.appendChild(inputElement);

        inputElement.select();

        document.execCommand('copy');
}

async function shorten(){
    let input_link = document.getElementById('input_link').value;

    api_url = 'https://api.shrtco.de/v2/shorten?url=' + input_link;

    document.getElementById('original_link').textContent = input_link;

    // GetShortUrl();
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.result.short_link);
    document.getElementById('short_link').textContent = data.result.short_link;


    const shortLink = document.getElementById('short_link');
    const btnCopy = document.getElementById('btnCopy');
    
    btnCopy.onclick = function() {
        btnCopy.innerText = "copied";
        btnCopy.style.background = "hsl(257, 27%, 26%)";

        copyText(shortLink);
    }
}







