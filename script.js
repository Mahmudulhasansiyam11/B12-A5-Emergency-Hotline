// Reusable Function
//get Inner Text
function getInnerText(id){
    const element = document.getElementById(id).innerText;
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