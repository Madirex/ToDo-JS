var pdata = new programData();

function makePage(){
    let page = document.getElementById("page");
    let title = document.createElement("h1");
    title.classList.add("title");
    title.innerHTML = "Agregar tarea";

    //area
    let formPage = document.createElement("div");

    let form = document.createElement("form");

    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Título:";

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");

    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Descripción:";

    let descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.setAttribute("id", "description");
    descriptionTextarea.setAttribute("name", "description");

    let button = document.createElement("input");
    button.innerHTML = "Crear nuevo";
    button.setAttribute("type", "button");
    button.setAttribute("value", "Agregar");
    button.addEventListener("click", addElementToList);

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionTextarea);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    form.appendChild(button);

    formPage.appendChild(form);

    page.appendChild(title);
    page.appendChild(formPage);
}

function addElementToList(){
    let title = document.getElementById("title");
    let desc = document.getElementById("description");

    if (isStringEmptyOrWhitespace(title.value)){
        alert("Debes de asignar un título a la tarea.");
    }else{
        let titleValue = title.value;
        let descValue = desc.value;
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        pdata.addElement(new Element(titleValue,descValue));
    }
}

makePage();