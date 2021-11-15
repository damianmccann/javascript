let data = [
    {
        id:1,
        firstName:"Sophie",
        lastName:"Loz..."
    },
    {
        id:2,
        firstName:"Annie",
        lastName:"Versaire"
    },
    {
        id:3,
        firstName:"Paul",
        lastName:"Ochon"
    },
    {
        id:4,
        name:"Microsoft",
    }
]

let text = 'so';

let retList = [];
data.forEach(element => {
    if(JSON.stringify(element).toLowerCase().includes(text.toLowerCase())) {
        retList.push(element);
    }
})

console.log(retList);

