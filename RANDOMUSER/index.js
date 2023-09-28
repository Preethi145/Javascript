let h1El= document.getElementById("name")
let emailEl=document.getElementById("mail")
let imgEl=document.getElementById("img")


const fetchRandomUser =async()=>{
    try {
        const response = await fetch('https://randomuser.me/api/');
       
        const data = await response.json();


        return data
        console.log(data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function displayUser(userData) {
    imgEl.src=userData.results[0].picture.large;
    h1El.textContent = `${userData.results[0].name.first} ${userData.results[0].name.last}`;
    emailEl.textContent = userData.results[0].dob.age;
}


window.addEventListener('load', async () => {
    const randomUser = await fetchRandomUser();
    displayUser(randomUser);
});


