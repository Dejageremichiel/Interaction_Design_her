var casesDeaths = false;
var data_maart
var data_april
var data_mei
var data_february
var data_june
var data_july
var data_augustus
var selected_country


let getAPI_Cases = (country) =>{
    getAPI_February(country)
    getAPI_March(country)
    getAPI_April(country)
    getAPI_Mei(country)
    getAPI_June(country)
    getAPI_July(country)
    getAPI_Augustus(country)
}

let getAPI_February = (country) => {
	const url = `https://api.covid19api.com/country/${country}?from=2020-02-01T00:00:00Z&to=2020-03-01T00:00:00Z`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
            console.log(json)
            if (casesDeaths)
            {
                for (i=0; i < json.length; i++){
                    data_february = (json[json.length-1].Deaths)
            }}
            else
            {
                for (i=0; i < json.length; i++){
                    data_february = (json[json.length-1].Confirmed)
            }
            }
		});
};

let getAPI_March = (country) => {
	const url = `https://api.covid19api.com/country/${country}?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
            console.log(json)
            if (casesDeaths)
            {
                for (i=0; i < json.length; i++){
                    data_maart = (json[json.length-1].Deaths)
            }}
            else
            {
                for (i=0; i < json.length; i++){
                    data_maart = (json[json.length-1].Confirmed)
            }
            }
		});
};
let getAPI_April = (country) => {
	const url = `https://api.covid19api.com/country/${country}?from=2020-04-01T00:00:00Z&to=2020-05-01T00:00:00Z`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
            console.log(json)
            if (casesDeaths)
            {
                for (i=0; i < json.length; i++){
                    data_april = (json[json.length-1].Deaths)
            }}
            else
            {
                for (i=0; i < json.length; i++){
                    data_april = (json[json.length-1].Confirmed)
            }
            }
		});
};
let getAPI_Mei = (country) => {
	const url = `https://api.covid19api.com/country/${country}?from=2020-05-01T00:00:00Z&to=2020-06-01T00:00:00Z`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
            console.log(json)
            if (casesDeaths)
            {
                for (i=0; i < json.length; i++){
                    data_mei = (json[json.length-1].Deaths)
            }}
            else
            {
                for (i=0; i < json.length; i++){
                    data_mei = (json[json.length-1].Confirmed)
            }
            }
		});
};
let getAPI_June = (country) => {
	const url = `https://api.covid19api.com/country/${country}?from=2020-06-01T00:00:00Z&to=2020-07-01T00:00:00Z`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
            console.log(json)
            if (casesDeaths)
            {
                for (i=0; i < json.length; i++){
                    data_june = (json[json.length-1].Deaths)
            }}
            else
            {
                for (i=0; i < json.length; i++){
                    data_june = (json[json.length-1].Confirmed)
            }
            }
		});
};

let getAPI_July = (country) => {
	const url = `https://api.covid19api.com/country/${country}?from=2020-07-01T00:00:00Z&to=2020-08-01T00:00:00Z`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
            console.log(json)
            if (casesDeaths)
            {
                for (i=0; i < json.length; i++){
                    data_july = (json[json.length-1].Deaths)
            }}
            else
            {
                for (i=0; i < json.length; i++){
                    data_july = (json[json.length-1].Confirmed)
            }
            }
		});
};

let getAPI_Augustus = (country) => {
	const url = `https://api.covid19api.com/country/${country}?from=2020-08-01T00:00:00Z&to=2020-09-01T00:00:00Z`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
            console.log(json)
            if (casesDeaths)
            {
                for (i=0; i < json.length; i++){
                    data_augustus = (json[json.length-1].Deaths)
            }}
            else
            {
                for (i=0; i < json.length; i++){
                    data_augustus = (json[json.length-1].Confirmed)
            }
            }
            loadGraph("Februari, Maart, April, Mei, Juni, Juli, Augustus", `${data_february}, ${data_maart}, ${data_april}, ${data_mei}, ${data_june}, ${data_july}, ${data_augustus}`)
		});
};

let getAPICountrys = () => {
	const url = `https://api.covid19api.com/countries`;
	fetch(url)
		.then(req => {
			if (!req.ok) {
				console.error('Error with fetch');
			} else {
				return req.json();
			}
		})
		.then(json => {
			showListCountry(json);
		});
};
const loadGraph = function (chartTime, chartValue)
{   
    let myChart = document.getElementById("chart").getContext("2d");
    let casesDeathsString = 'Cases'
    if (casesDeaths)
    {
        casesDeathsString = 'Deaths';
    }

    let massPopChart = new Chart(myChart, {
        type: "line",
        data: {
            labels: chartTime.split(',') /* tijd */,
            datasets: [{
                data: chartValue.split(','),
                backgroundColor: '#FFE2E2',
                borderColor: '#FF0000'
            }]
        },
        options:{
            maintainAspectRatio: false,
            legend:{
                display: false
            },
            scales: {
                yAxes: [{
                    ticks:{
                        min:0,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: casesDeathsString
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Time'
                    }
                }]
            }
        }
    })
}

const changeColor = function ()
{
    if (casesDeaths)
    {
        $(".js-cases").animate({backgroundColor: "Transparent"}, 200);
        $(".js-deaths").animate({backgroundColor: "#FF7171"}, 200);
        console.log("Deaths")
        console.log(casesDeaths)
    }
    else
    {
        $(".js-cases").animate({backgroundColor: "#FF7171"}, 200);
        $(".js-deaths").animate({backgroundColor: "Transparent"}, 200);
        console.log("Cases")
        console.log(casesDeaths)

    }
}

const changeCasesDeaths = function ()
{
    console.log('SWITCH');
    casesDeaths =! casesDeaths;
    //changeValue();
    changeColor();
    getAPI_Cases(selected_country);
}

let showListCountry = queryResponse => {
    var listCountry = []
    var listCountryapi = []
    var i;
    for (i=0; i < queryResponse.length; i++){
        listCountry.push(queryResponse[i].Country)
        listCountryapi.push(queryResponse[i].Slug)
    }
    listCountry.sort()
    listCountryapi.sort()
    for (i=0; i < listCountry.length; i++){
        document.querySelector('.js-country').innerHTML += `<option class="u-bold" value="${listCountryapi[i]}">${listCountryapi[i]}</option>`;
    }
    
}
const countryselected = function (country){
    //console.log(country)
    getAPI_Cases(country)
    selected_country = country
    //console.log(country)
}

const listenToUI = function ()
{
    countryselect.addEventListener('input', function(e) {countryselected(e.target.value);});
    switchCases.addEventListener('click', changeCasesDeaths);
    switchDeaths.addEventListener('click', changeCasesDeaths);
}
const init = function()
{
    console.log("DOM Loaded");
    countryselect = document.querySelector('.js-country');
    switchCases = document.querySelector(".js-cases");
    switchDeaths = document.querySelector(".js-deaths");
    listenToUI();
    //loadGraph()
    getAPICountrys();
}

document.addEventListener('DOMContentLoaded', init);