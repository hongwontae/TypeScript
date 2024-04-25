class DataStorage<T extends string | number | boolean>{
    public data : T[] = [];
    
    addItem(item : T){
        this.data.push(item);
    }

    removeItem(item : T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const TextStorage = new DataStorage<string>();
TextStorage.addItem('Jerrad');
TextStorage.addItem('Coutinew');
console.log(TextStorage);
