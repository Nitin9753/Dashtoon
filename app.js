const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
async function query(data) {
    const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud", {
            headers: {
                "Accept": "image/png",
                "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    return result;
}

function AddTask() {
    if (inputBox.value === '') {
        alert("Add something");
    } else {
        query({
            "inputs": inputBox.value
        }).then((response) => {
            console.log(response);
            var object = URL.createObjectURL(response);
            console.log(object);
            let img = document.createElement("img");
            img.src = object;
            let div = document.createElement("div");
            div.classList.add("col-12", "col-md-4", "col-lg-3", "m-auto");
            let divTile = document.createElement("div");
            divTile.classList.add("comicName");
            divTile.innerHTML = inputBox.value;
            div.appendChild(img);

            div.appendChild(divTile);
            listContainer.appendChild(div);
            // var object = URL.createObjectURL(response);
            // console.log(object);
            // let img = document.createElement("img");
            // img.src = object;
            // img.setAttribute("src", img.src);
            // img.setAttribute("alt", "IMG");
            // listContainer.appendChild(img);

        })
    }
};