//Heavily relied on outside sources for this file, including the Wikipedia REST API and MDN Web Docs. See the references below for more information.
//----------------------------
// Open-book reference (Wikipedia REST API)
//----------------------------
// Endpoint: https://en.wikipedia.org/api/rest_v1/page/summary/{title}
// Free, no key. Returns JSON with a title, short description, extract and
// optional thumbnail. Docs: https://en.wikipedia.org/api/rest_v1/
//
// Sources / references
// - Wikimedia (n.d.) Wikimedia REST API. Available at: https://en.wikipedia.org/api/rest_v1/
// - Wikimedia (n.d.) API usage guidelines. Available at: https://api.wikimedia.org/wiki/API_reference
// - MDN Web Docs (n.d.) Using the Fetch API. Available at:
//   https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// - MDN Web Docs (n.d.) Using promises. Available at:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// - MDN Web Docs (n.d.) Promise.prototype.finally(). Available at:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
// - MDN Web Docs (n.d.) encodeURIComponent(). Available at:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
// - MDN Web Docs (n.d.) Node.textContent. Available at:
//   https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
// - MDN Web Docs (n.d.) HTMLImageElement: loading property. Available at:
//   https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading
// - W3C (n.d.) WAI-ARIA: aria-invalid and aria-busy. Available at:
//   https://www.w3.org/TR/wai-aria-1.2/#aria-invalid and https://www.w3.org/TR/wai-aria-1.2/#aria-busy
// - Creative Commons (n.d.) CC BY-SA 4.0. Available at:
//   https://creativecommons.org/licenses/by-sa/4.0/


const WIKI_SUMMARY_URL = "https://en.wikipedia.org/api/rest_v1/page/summary/";

//------------------------------------------
// Show a summary on the page and Create element
//--------------------------------------
function MakeElement(tag, className, text)
{
    let element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function ShowSummary(data)
{
    let result = document.getElementById("reference-result");
    result.textContent = "";

    let card = MakeElement("article", "reference-card", "");
    let text = MakeElement("div", "reference-card__text", "");

    text.appendChild(MakeElement("h3", "", data.title));

    if (data.description)
    {
        text.appendChild(
            MakeElement("p", "reference-card__description", data.description)
        );
    }

    text.appendChild(MakeElement("p", "", data.extract));

    let credit = MakeElement("p", "reference-card__credit", "Source: ");
    let link = document.createElement("a");

    link.href = data.content_urls.desktop.page;
    link.textContent = "Wikipedia";

    credit.appendChild(link);
    credit.appendChild(document.createTextNode(" (CC BY-SA)"));
    text.appendChild(credit);
    card.appendChild(text);

    if (data.thumbnail)
    {
        let figure = MakeElement("figure", "reference-card__figure", "");
        let image = document.createElement("img");

        image.src = data.thumbnail.source;
        image.alt = data.title;
        image.width = data.thumbnail.width;
        image.height = data.thumbnail.height;
        image.loading = "lazy";

        figure.appendChild(image);
        card.appendChild(figure);
    }

    result.appendChild(card);
}

//----------------------------
// Validate selection
//----------------------------
function ValidateReference()
{
    let select = document.getElementById("reference-select");
    let error = document.getElementById("reference-select-error");

    if (select.value === "")
    {
        error.textContent = "Please choose a topic first.";
        return false;
    }

    error.textContent = "";
    return true;
}

//----------------------------
// Load Wikipedia summary
//----------------------------
function LoadReference()
{
    let select = document.getElementById("reference-select");
    let status = document.getElementById("reference-status");
    let result = document.getElementById("reference-result");

    status.classList.remove("status-error");
    result.textContent = "";

    if (!ValidateReference())
    {
        status.textContent = "";
        return;
    }

    let chosen = select.value;
    status.textContent = "Loading…";

    fetch(WIKI_SUMMARY_URL + encodeURIComponent(chosen))
        .then(function(response)
        {
            if (!response.ok)
            {
                throw new Error("Could not load summary");
            }

            return response.json();
        })
        .then(function(data)
        {
            ShowSummary(data);
            status.textContent = "";
        })
        .catch(function()
        {
            status.classList.add("status-error");
            status.textContent =
                "Could not load the summary. Check your connection and try again.";
        });
}

//----------------------------
// Reset reference
//----------------------------
function ResetReference()
{
    document.getElementById("reference-select").value = "";
    document.getElementById("reference-select-error").textContent = "";
    document.getElementById("reference-status").textContent = "";
    document.getElementById("reference-result").textContent = "";
}

//----------------------------
// Event Listeners
//----------------------------
document.getElementById("reference-form").addEventListener("submit", function(event)
{
    event.preventDefault();
    LoadReference();
});

document.getElementById("reference-select").addEventListener("change", function()
{
    if (this.value !== "")
    {
        LoadReference();
    }
});

document.getElementById("restart-btn").addEventListener("click", ResetReference);
