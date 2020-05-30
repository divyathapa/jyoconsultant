
const positive = document.querySelector('.positive');
  
// <!-- <div id="wrapper">
        
// <label for="yes_no_radio">
//     Are you ready change your life?
// </label>
// <p>
// <input class= "positive" type="radio" name="yes_no" checked>Yes</input>
// </p>
// <p>
// <input class= "negative" type="radio" name="yes_no">No</input>
// </p>
// </div> -->
const negative = document.querySelector('.negative');
const question = document.getElementById('wrapper');

function renderLotusImage(){
    const lotusImage =  `<div id="welcome">
    <img src ="./image/lotus.png">
</div><p>Please enter your name and email address.</p>`;
    question.innerHTML = lotusImage;

};
positive.addEventListener('click', renderLotusImage);

function renderInnerMessage(){
   const innerMessage = `<div class ="homepage">
    <p> Please browse our webpage to learn more about Ayurveda ! </p></div>`;
    question.innerHTML = innerMessage;
}
negative.addEventListener('click', renderInnerMessage);



