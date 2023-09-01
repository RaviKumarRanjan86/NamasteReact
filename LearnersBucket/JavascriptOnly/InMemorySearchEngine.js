// we need to create constructor function
// as mentioned in the question here we are invokking the function using the new Keyword

function InMemorySearch(){
    //this is going to be the place where we are going to store the data
    this.entities = new Map();

    this.addDocuments = function (namespace, ...data){
        const existing = this.entities.get(namespace);

        if(existing){
            this.entities.set(namespace,[...this.entities,...data]);
        }
        else{
            this.entities.set(namespace, [...data])
        }
    }

    this.search = function(namespace,filterfn,orderby) {
        let data= this.entities.get(namespace);

        data = data.filter(filterfn);

        if(orderby){
            const {key,asc} = orderby;

            if(orderby){
                if(asc)
                data.sort((a,b) => a[key]-b[key])
                else
                data.sort((a,b) => b[key]-a[key])
            }
        }
        return data;
    }
}

const searchEngine = new InMemorySearch();
searchEngine.addDocuments('Movies', 
                    {name: 'Avenger', rating: 8.5, year: 2017}, 
                    {name: 'Black Adam', rating: 8.7, year: 2022}, 
                    {name: 'Jhon Wick 4', rating: 8.2, year: 2023}, 
                    {name: 'Black Panther', rating: 9.0, year: 2022}
                   );
console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {key: 'rating', asc: true}));
