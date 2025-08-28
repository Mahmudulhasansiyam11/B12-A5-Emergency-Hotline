// Reusable Function
//get Inner Text
function getInnerText(id){
    const element = document.getElementById(id).innerText;
    return element;
}

function getId(id){
    const element = document.getElementById(id);
    return element;
}


// Heart Icon
// Clicking of the heart icon of any card will increase the count in the Navbar 
// Main section every card heart icon set same class name 'card-heart-icon'
// Navbar section count heart increase set id 'heart-count'

// Get access all card heart icon
const cardHeartIcons = document.getElementsByClassName('card-heart-icon');

for(const cardHeartIcon of cardHeartIcons){
    cardHeartIcon.addEventListener('click', function(){
        
        //Get access navbar heart count
        const heartCount = getInnerText('heart-count');
        const heartCountIncrease = Number(heartCount) + 1;
        document.getElementById('heart-count').innerText = heartCountIncrease;
    });
}


//Call Buttons
// Main section every card call buttons set same class name "call-btn"
// Navbar section coin value set id 'coin-value'
const callButtons = document.getElementsByClassName('call-btn');

for(const callButton of callButtons){
    callButton.addEventListener('click', function(){

        // Get time
        const now = new Date().toLocaleTimeString();


        //Get access history container
        const historyContainer = getId('history-Container');

        //Get access navBar coin value
        const coinValue = getInnerText('coin-value');
        if(coinValue >= 20){

            const serviceName = callButton.parentNode.parentNode.children[0].children[0].innerText;
            const serviceNumber = callButton.parentNode.parentNode.children[1].children[0].innerText;
            alert("Calling " + serviceName + " " + serviceNumber);

            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="flex justify-between items-center bg-gray-50 rounded-[8px] p-[16px] mt-[8px]">
                        <div class="hind-madurai-font font-[300] text-[14px]">
                            <h3 class="text-[#111111]">${serviceName}</h3>
                            <p class="text-[#5c5c5c]">${serviceNumber}</p>
                        </div>
                        <div class="hind-madurai-font font-[300] text-[14px]">
                            <p>${now}</p>
                        </div>
                    </div>
            `;
            historyContainer.appendChild(newHistory);

            const coinValueDecrease = Number(coinValue) - 20;document.getElementById('coin-value').innerText = coinValueDecrease;
        }
        else{
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        }

    });
}


// //Create new div for history container
            