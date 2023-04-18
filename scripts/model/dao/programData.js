class programData{
    constructor(){
        this._elements = [];
        this._elementCounter = 0;
    }

    addElement(element){
        this._elements.push(element);
        document.getElementById("elements").appendChild(this.createTask(element.title,element.desc));
    }

    removeElement(index){
        this._elements.splice(index, 1);
    }

    upElement(index){
        if (index > 0 && index < this._elements.length){
            this.changeContainerHtml(index, index - 1);
            let temp = this._elements[index];
            this._elements.splice(index, 1);
            this._elements.splice(index - 1, 0, temp);
        }
    }

    downElement(index){
        if (index >= 0 && index < this._elements.length - 1) {
            this.changeContainerHtml(index, index + 1);
            let temp = this._elements[index];
            this._elements.splice(index, 1);
            this._elements.splice(index + 1, 0, temp);
          }
    }

    changeContainerHtml(index1,index2){
        // Obtener los elementos h2 y p que queremos intercambiar
        let i1 = document.getElementById("element-" + index1);
        let i2 = document.getElementById("element-" + index2);

        let h2_1 = i1.querySelector("h2");
        let p_1 = i1.querySelector("p");

        let h2_2 = i2.querySelector("h2");
        let p_2 = i2.querySelector("p");

        // Guardar el texto del primer h2 y p en variables temporales
        let tempH2 = h2_1.innerText;
        let tempP = p_1.innerText;

        // Intercambiar el texto del primer y segundo h2 y p
        h2_1.innerText = h2_2.innerText;
        p_1.innerText = p_2.innerText;
        h2_2.innerText = tempH2;
        p_2.innerText = tempP;
    }

    createTask(title, description) {
        let taskContainer = document.createElement("div");
        taskContainer.className = "task-container";
        let id = this._elementCounter;
        this._elementCounter +=1;
        taskContainer.id = "element-" + id;
      
        let buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
      
        let upButton = document.createElement("button");
        upButton.innerHTML = "🔼";
        upButton.className = "up-button";
        upButton.addEventListener('click', () => this.upElement(id));
        buttonContainer.appendChild(upButton);
      
        let downButton = document.createElement("button");
        downButton.innerHTML = "🔽";
        downButton.className = "down-button";
        downButton.addEventListener('click', () => this.downElement(id));
        buttonContainer.appendChild(downButton);
      
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "🗑️";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener('click', () => this.confirmDeletion(id));

        ///
        
        let textArea = document.createElement("div");
        textArea.className = "task-text-area";
            let titleElement = document.createElement("h2");
            titleElement.innerHTML = title;
        
            let descriptionElement = document.createElement("p");
            descriptionElement.innerHTML = description;

        textArea.appendChild(titleElement);
        textArea.appendChild(descriptionElement);
      
        taskContainer.appendChild(buttonContainer);
        taskContainer.appendChild(textArea);
        taskContainer.appendChild(deleteButton);
      
        return taskContainer;
    }

    confirmDeletion(index) {
        let confirmation = confirm('¿Quieres eliminar esta tarea?');
        if (confirmation) {
            let elementToDelete = document.getElementById('element-' + index);
            elementToDelete.remove();
            this.removeElement(index);
        }
    }

}