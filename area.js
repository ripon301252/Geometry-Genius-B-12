// calculate button delegation technique
document.getElementById('card-box').addEventListener('click', function(e){
    // console.log(e.target)
    // console.log(e.target.tagName)
    if(e.target.className.includes('calculate-btn')){

        const calculateBtn = e.target

        const areaName = calculateBtn.parentNode.parentNode.children[1].children[0].innerText;
        const input1 = calculateBtn.parentNode.parentNode.children[1].children[2].children[0].children[0].children[0].value;
        const input2 = calculateBtn.parentNode.parentNode.children[1].children[2].children[1].children[0].children[0].value;
        const number = calculateBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;
        const area = number * input1 * input2;
        

        const areaHistoryCalculateContainer = document.getElementById('area-history-calculate-container');
        const newAreaHistoryCalculateContainer1 = document.createElement('div');
        // const newAreaHistoryCalculateContainer2 = document.createElement('div');
       
        newAreaHistoryCalculateContainer1.innerHTML = `
            
            <div class="bg-white border-1 border-gray-100 mx-5 p-5 rounded shadow-md font-bold text-lg mt-2">
                <h1>${areaName} Area = ${area} cm</h1>
            </div>
            `

            //  newAreaHistoryCalculateContainer2.innerHTML = `
            //  <div class="bg-white border-1 border-gray-100 mx-5 p-5 rounded shadow-md font-bold text-xl">
            //     <h1>${areaName} Area = ${area2}</h1>
            // </div>
            //  `
            areaHistoryCalculateContainer.appendChild(newAreaHistoryCalculateContainer1);
        
    }
})




// calculate button traverse technique
// const calculateBtns = document.getElementsByClassName('calculate-btn');
// for (let calculateBtn of calculateBtns) {
//     calculateBtn.addEventListener('click', function () {
//         // console.log(calculateBtn)
//         const areaName = calculateBtn.parentNode.parentNode.children[1].children[0].innerText
//         const input1 = calculateBtn.parentNode.parentNode.children[1].children[2].children[0].children[0].children[0].value;
//         const input2 = calculateBtn.parentNode.parentNode.children[1].children[2].children[1].children[0].children[0].value;
//         const number = calculateBtn.parentNode.parentNode.children[1].children[1].children[0].innerText;    
//         const area = number * input1 * input2;
        

//         const areaHistoryCalculateContainer = document.getElementById('area-history-calculate-container');
//         const newAreaHistoryCalculateContainer1 = document.createElement('div');
//         // const newAreaHistoryCalculateContainer2 = document.createElement('div');
       
//         newAreaHistoryCalculateContainer1.innerHTML = `
            
//             <div class="bg-white border-1 border-gray-100 mx-5 p-5 rounded shadow-md font-bold text-lg mt-2">
//                 <h1>${areaName} Area = ${area} cm</h1>
//             </div>
//             `

//             //  newAreaHistoryCalculateContainer2.innerHTML = `
//             //  <div class="bg-white border-1 border-gray-100 mx-5 p-5 rounded shadow-md font-bold text-xl">
//             //     <h1>${areaName} Area = ${area2}</h1>
//             // </div>
//             //  `

//             areaHistoryCalculateContainer.appendChild(newAreaHistoryCalculateContainer1);
//             // areaHistoryCalculateContainer.appendChild(newAreaHistoryCalculateContainer2);

//     })
// }





// clear button
document.getElementById('clear=btn').addEventListener('click', function(){
    const areaHistoryCalculateContainer = document.getElementById('area-history-calculate-container');
    areaHistoryCalculateContainer.innerText = ''
})

