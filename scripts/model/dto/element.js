class Element{
    constructor(title,desc){
        this._title = title;
        this._desc = desc;
    }

    get title(){
        return this._title;
    }

    get desc(){
        return this._desc;
    }
}