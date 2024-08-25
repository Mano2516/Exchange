let inV = document.getElementById('cur')
let outV = document.getElementById('cu')
let last = document.querySelector(".last span")
let inputValue= document.getElementById('num-value')
let res=document.querySelector(".res")
let from = document.querySelector(".in")
let to = document.querySelector(".out")
let btn = document.querySelector(".convert");
let change = document.querySelector(".change");
    let dataTo;
    let dateFrom;
    let inValue ;
    let outValue;

// console.log(from)
// console.log(inV)
// let ts= document.querySelector(".ts")
let data;
fetch("https://v6.exchangerate-api.com/v6/ec62e8b7cf19036236cce96f/latest/USD").then((tst)=>{
    return tst.json();
}).then((test)=>{
    // console.log(test)

    // console.log((test.conversion_rates))
    makeSelectBox(Object.keys(test.conversion_rates))
    let obj = test.conversion_rates;

    // console.log(Object.keys(test.conversion_rates).US)
        // console.log(test.time_last_update_utc)
    lastUpdate(test.time_last_update_utc)

    from.onchange = function(){
        // console.log(one.value)
        dateFrom = from.value;
        // console.log(obj[dateFrom])
        inValue=obj[dateFrom];
    }
    to.onchange=function(){
        dataTo=to.value;
        // console.log(obj[dataTo])
        outValue=obj[dataTo]
    } 
    // res.style.display ="none";
    // change.addEventListener("click", function(){
    //     let sw =to.value;
    //     to.value= from.value;
    //     from.va=sw;
        
        btn.addEventListener("click", function(){
            if(inputValue.value<0){
                res.style.display ="block";
                res.innerHTML="Enter Vaild Value"
                // from.value="";
                // to.vlaue=""
                // inputValue.value=""
            }else{
                // console.log((outValue/inValue)*inputValue.value)
                res.style.display ="block";
                res.innerHTML=((outValue/inValue)*inputValue.value).toFixed(3);
                // from.value="";
                // to.innerHTML=""
                // inputValue.value=""
                // res.style.display ="none";
            }
            // res.style.display ="none";
        })
    })
    btn.addEventListener("click", function(){
        if(inputValue.value<0){
            res.style.display ="block";
            res.innerHTML="Enter Vaild Value"
            // from.value="";
            // to.vlaue=""
            // inputValue.value=""
        }else{
            // console.log((outValue/inValue)*inputValue.value)
            res.style.display ="block";
            res.innerHTML=((outValue/inValue)*inputValue.value).toFixed(3);
            // from.value="";
            // to.innerHTML=""
            // inputValue.value=""
            // res.style.display ="none";
        }
        // res.style.display ="none";
    })


    
    
    // from.onchange =function(){
    //     let dtaFrom = from.value;
    //     console.log(dtaFrom)
    //     console.log(test.conversion_rates[dta])
    // }

// })



function makeSelectBox(obj){

    //make input values 

    for(let i =0 ; i<Object.keys(obj).length ; i++) {
        let op = document.createElement("option");
        op.value=obj[i];
        op.innerHTML=obj[i];
        inV.appendChild(op);
    }

    for(let i =0 ; i<Object.keys(obj).length ;i++) {

        let op = document.createElement("option");
        op.value=obj[i];
        op.innerHTML=obj[i];
        outV.appendChild(op);

    }

}

function lastUpdate(date) {
    last.innerHTML=date;
}
// function getValues(one ,two ,obj){
//     one.onchange = function(){
//         // console.log(one.value)
//         dateFrom = one.value;
//         console.log(obj[dateFrom])
//         // inValue=obj[dateFrom];
//     }
//     two.onchange=function(){
//         dataTo=two.value;
//         console.log(obj[dataTo])
//         // outValue=obj[dataTo]
//     }
// }

// console.log(inValue)
// inputValue.onblur= function(){
//     res.innerHTML=inputValue.value;
// }
// console.log(data)
// let arr = Array.from(data)
// console.log(data)
