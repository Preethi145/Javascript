
/*document.addEventListener("DOMContetentloading",()=>{

    const apikey = "cT2AbdEI1JKOglaQOMfOAYEAhqiku0wJBjk5i6SO";
    const apiurl="https://api.nasa.gov/planetary/apod";


    const titleElement = document.getElementById("title");
    const dateElement = document.getElementById("date");
    const imageElement = document.getElementById("apod-image");
    const explanationElement = document.getElementById("explanation");


    let url = `${apiurl}?api_key=${apikey}`
console.log(url)

    const getastromypictureoftheday = async ()=>{
    try{
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        titleElement.textContent = data.title;
        dateElement.textContent = data.date;
        imageElement.src = data.url;
        explanationElement.textContent = data.explanation;
    }
    catch(error){
        console.log(error)
    }
}
getastromypictureoftheday();

}) ; */


document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "vWyR7u69FxGf3P1axBCpGaPWb8Mxo7dd9Nz1awli"
    const apiUrl = "https://api.nasa.gov/planetary/apod";
 
    const apodImage = document.getElementById("apod-image");
    const apodTitle = document.getElementById("apod-title");
    const apodExplanation = document.getElementById("apod-explanation");




    let url =`${apiUrl}?api_key=${apiKey}`
console.log(url)


    const  getAstronomyPictureOfTheDay = async()=> {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        apodImage.src = data.url;
        apodTitle.textContent = data.title;
        apodExplanation.textContent = data.explanation;
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
 
    getAstronomyPictureOfTheDay();
  });



/*const apiKey = "cT2AbdEI1JKOglaQOMfOAYEAhqiku0wJBjk5i6SO"; // Replace with your actual API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const titleElement = document.getElementById('title');
const dateElement = document.getElementById('date');
const imageElement = document.getElementById('apod-image');
const explanationElement = document.getElementById('explanation');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        titleElement.textContent = data.title;
        dateElement.textContent = data.date;
        imageElement.src = data.url;
        explanationElement.textContent = data.explanation;
    })
    .catch(error => 
        console.error(error)); */
