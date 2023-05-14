const RenoModels=[
    {name:'simbol', price:100},
    {name:'logan', price:120}
]
const BMVModels=[
    {name:'1bmv', price:200},
    {name:'2bmv', price:300}
]

const OpelModels=[
    {name:'1opel', price:150},
    {name:'2opel', price:160}
]

const brand = document.getElementById('brand');
const modelSelect = document.getElementById('model');
let summPrice = 0;

const renderModel=(array) => {
    let modelHTML = '<option value="default" disabled selected>выберите модель автомобиля</option>'
    array.forEach((model) => {
        modelHTML+=`<option value = "${model.price}"> ${model.name}</option>`
    
    })
    modelSelect.innerHTML = modelHTML
    document.getElementById('modelDiv').className = 'visible'
}


const onBrandChange = () =>{
    const indexOfChosen = brand.selectedIndex;
    const chosenBrand = brand.options[indexOfChosen].innerText;
    let brandSumm = 0
    switch(chosenBrand){
        case "Reno":
            renderModel(RenoModels);
            brandSumm += Number(brand.options[indexOfChosen].value); 
            break;
        case "BMV":
            renderModel(BMVModels);
            brandSumm += Number(brand.options[indexOfChosen].value); 
            break;
        case "Opel":
            renderModel(OpelModels);
            brandSumm += Number(brand.options[indexOfChosen].value); 
            break;

        default:
            summPrice += brandSumm; 
            console.log('done');

    }
}

const onOldClick= () =>{
    document.getElementById('stateDiv').className="visible"
}

const onNewClick= () =>{
    document.getElementById('stateDiv').className="invisible"
}

const onModelChange=()=>{
    const model = document.getElementById('model');
    const indexChosenModel = model.selectedIndex;
    const modelPrice = model.options[indexChosenModel].value;
    summPrice += Number[modelPrice];
}

const onSummCount =()=>{
    const brandPrice=Number(brand.value);

}

const onFuelChose =()=>{
    const fuels= Array.from(document.getElementById('fuel').children);
    const chosenFuel= fuels.filter((fuel)=>{
        return fuel.checked === true
    })
    summPrice += Number(chosenFuel[0].value)
}



