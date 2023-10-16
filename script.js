const url = 'https://punpal-random-joke-generator-api.p.rapidapi.com/random';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '500f194b76mshdea800d39cdfda0p1d40cbjsn62138058827c',
		'X-RapidAPI-Host': 'punpal-random-joke-generator-api.p.rapidapi.com'
	}
};
const btn=document.getElementById("btn")
const jokeContainer=document.getElementById("joke")
btn.addEventListener('click',getjoke)
function getjoke(){
         jokeContainer.classList.remove("fade");
         const response =  fetch(url, options)
	.then(res=>res.json())
         .then(data=>{
                  jokeContainer.textContent=data.data.body
                  jokeContainer.classList.add("fade")
         })
	// console.log(result);
}

