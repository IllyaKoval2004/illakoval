const title = document.createElement('h1');
title.textContent = 'Індивідуальне завдання';
document.body.insertBefore(title, body.children[0]);

let watchId = null;

let ourCoords = {
    latitude: 48.94, 
    longitude: 24.73 
};

let myCoords = {
    latitude: 0, 
    longitude: 0
};

window.onload=getMyLocation;
function getMyLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        var watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;
        var clearWatchButton = document.getElementById("clearWatch");
        clearWatchButton.onclick = clearWatch;
    }
    else{
        alert("Oops, no geolocation support");
    }
}

var rounded = function(number){
    return +number.toFixed(2);
}

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let div = document.getElementById("location");
    div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
    div.innerHTML += ` (with ${position.coords.accuracy} meters accuracy)`;
    let km = computeDistance(position.coords, ourCoords);
    let distance = document.getElementById("distance");
    distance.innerHTML = `You are ${km} km from the College`;
    myCoords.latitude = rounded(latitude);
    myCoords.longitude = rounded(longitude);
    Marker(myCoords.latitude , myCoords.longitude); 
}

function displayError(error) {
    let errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    let errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.latitude);
    let destLongRads = degreesToRadians(destCoords.longitude);
    let Radius = 6371;
    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
}

function degreesToRadians(degrees) {
    let radians = (degrees * Math.PI)/180;
    return radians;
}

function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}

function clearWatch() {
    if(watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}


var map = L.map('map').setView([ourCoords.latitude, ourCoords.longitude], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function Marker(latitude, longitude) {
    let marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("Your are here:" + [latitude, longitude].toString()).openPopup();
}

var circle = L.circle([ourCoords.latitude, ourCoords.longitude], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 80
}).addTo(map);

circle.bindPopup("College is here:" + [ourCoords.latitude, ourCoords.longitude].toString()).openPopup();