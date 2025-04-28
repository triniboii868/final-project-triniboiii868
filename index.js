async function init() {
    await customElements.whenDefined('gmp-map');

    const mapElement = document.getElementById('gmpMap');
    const markerElement = document.getElementById('gmpMarker');
    const placePicker = document.querySelector('gmpx-place-picker');
    const infowindow = new google.maps.InfoWindow();

    mapElement.innerMap.setOptions({
        mapTypeControl: false
    });

    // Get user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                mapElement.center = { lat: userLat, lng: userLng };
                mapElement.zoom = 14;

                markerElement.position = { lat: userLat, lng: userLng };

                infowindow.setContent(`<strong>Your Location</strong>`);
                infowindow.open(mapElement.innerMap, markerElement);

                // Add additional marker at a specific Featured Charities 
                const additionalMarker = new google.maps.Marker({
                    position: { lat: 41.818062, lng: -87.726813 },
                    map: mapElement.innerMap,
                    title: 'Greater Chicago Food Depository'
                });

                const additionalInfoWindow = new google.maps.InfoWindow({
                    content: `<strong>Greater Chicago Food Depository</strong><br><span>Chicago, IL, USA</span>`
                });

                // Event Listener for Marker
                additionalMarker.addListener('click', () => {
                    additionalInfoWindow.open(mapElement.innerMap, additionalMarker);
                });

                // Charity 1
                const additionalMarker2 = new google.maps.Marker({
                    position: { lat: 40.737562, lng: -73.998188 },
                    map: mapElement.innerMap,
                    title: 'The Salvation Army'
                });

                const additionalInfoWindow2 = new google.maps.InfoWindow({
                    content: `<strong>The Salvation Army</strong><br><span>New York, NY, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 2
                const additionalMarker3 = new google.maps.Marker({
                    position: { lat: 34.015687, lng: -118.25581 },
                    map: mapElement.innerMap,
                    title: 'A Place Called Home'
                });

                const additionalInfoWindow3 = new google.maps.InfoWindow({
                    content: `<strong>A Place Called Home><br><span>Los Angeles, CA, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 3
                const additionalMarker4 = new google.maps.Marker({
                    position: { lat: 39.385688, lng: -104.867812 },
                    map: mapElement.innerMap,
                    title: 'Help and Hope Center'
                });

                const additionalInfoWindow4 = new google.maps.InfoWindow({
                    content: `<strong>Help and Hope Center><br><span>Castle Rock, CO, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 4
                const additionalMarker5 = new google.maps.Marker({
                    position: { lat: 29.537562, lng: -95.115188 },
                    map: mapElement.innerMap,
                    title: 'Assistance League of the Bay Area'
                });

                const additionalInfoWindow5 = new google.maps.InfoWindow({
                    content: `<strong>Assistance League of the Bay Area><br><span>Webster, TX, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 5
                const additionalMarker6 = new google.maps.Marker({
                    position: { lat: 25.913312, lng: -80.309687 },
                    map: mapElement.innerMap,
                    title: 'The Education Fund'
                });

                const additionalInfoWindow6 = new google.maps.InfoWindow({
                    content: `<strong>The Education Fund><br><span>Miami Lakes, FL, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 6
                const additionalMarker7 = new google.maps.Marker({
                    position: { lat: 45.358688, lng: -122.587187 },
                    map: mapElement.innerMap,
                    title: 'Childrens Center'
                });

                const additionalInfoWindow7 = new google.maps.InfoWindow({
                    content: `<strong>Childrens Center><br><span>Oregon City, OR, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 7
                const additionalMarker8 = new google.maps.Marker({
                    position: { lat: 46.831937, lng: -96.857563 },
                    map: mapElement.innerMap,
                    title: 'The Arc Attic Treasures'
                });

                const additionalInfoWindow8 = new google.maps.InfoWindow({
                    content: `<strong>The Arc Attic Treasures><br><span>Fargo, ND, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 8
                const additionalMarker9 = new google.maps.Marker({
                    position: { lat: 35.259687, lng: -81.156063 },
                    map: mapElement.innerMap,
                    title: 'The Salvation Army Family Store & Donation Center'
                });

                const additionalInfoWindow9 = new google.maps.InfoWindow({
                    content: `<strong>The Salvation Army Family Store & Donation Center><br><span>Gastonia, NC, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 9
                const additionalMarker10 = new google.maps.Marker({
                    position: { lat: 33.507438, lng: -86.806062 },
                    map: mapElement.innerMap,
                    title: 'Ronald McDonald House Charities of Alabama'
                });

                const additionalInfoWindow10 = new google.maps.InfoWindow({
                    content: `<strong>Ronald McDonald House Charities of Alabama><br><span>Birmingham, AL, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 10
                const additionalMarker11 = new google.maps.Marker({
                    position: { lat: 43.492188, lng: -112.036812 },
                    map: mapElement.innerMap,
                    title: 'Bonneville Humane Society'
                });

                const additionalInfoWindow11 = new google.maps.InfoWindow({
                    content: `<strong>Bonneville Humane Society><br><span>Idaho Falls, ID, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 11
                const additionalMarker12 = new google.maps.Marker({
                    position: { lat: 36.224688, lng: -115.217188 },
                    map: mapElement.innerMap,
                    title: 'Project 150'
                });

                const additionalInfoWindow12 = new google.maps.InfoWindow({
                    content: `<strong>Project 150><br><span>Las Vegas, NV, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 12
                const additionalMarker13 = new google.maps.Marker({
                    position: { lat: 39.055188, lng: -94.516437 },
                    map: mapElement.innerMap,
                    title: 'Harvesters-the Community Food Network'
                });

                const additionalInfoWindow13 = new google.maps.InfoWindow({
                    content: `<strong>Harvesters-the Community Food Network><br><span>Kansas City, MO, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 13
                const additionalMarker14 = new google.maps.Marker({
                    position: { lat: 35.687687, lng: -105.946438 },
                    map: mapElement.innerMap,
                    title: 'WildEarth Guardians'
                });

                const additionalInfoWindow14 = new google.maps.InfoWindow({
                    content: `<strong>WildEarth Guardians><br><span>Santa Fe, NM, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 14
                const additionalMarker15 = new google.maps.Marker({
                    position: { lat: 35.523313, lng: -97.599563 },
                    map: mapElement.innerMap,
                    title: 'The Hugs Project'
                });

                const additionalInfoWindow15 = new google.maps.InfoWindow({
                    content: `<strong>The Hugs Project><br><span>Central Oklahoma City, OK, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });

                // Charity 15
                const additionalMarker16 = new google.maps.Marker({
                    position: { lat: 46.614312, lng: -112.019312 },
                    map: mapElement.innerMap,
                    title: 'Good Samaritan Thrift Store'
                });

                const additionalInfoWindow16 = new google.maps.InfoWindow({
                    content: `<strong>Good Samaritan Thrift Store><br><span>Helena, MT, USA</span>`
                });

                additionalMarker2.addListener('click', () => {
                    additionalInfoWindow2.open(mapElement.innerMap, additionalMarker2);
                });
            },
            (error) => {
                console.error('Error getting user location:', error);
                // Keep default map settings if location fails
            }
        );
    } else {
        console.error('Geolocation not supported by this browser.');
    }

    if (placePicker) {
        placePicker.addEventListener('gmpx-placechange', () => {
            const place = placePicker.value;

            if (!place.location) {
                window.alert(
                    "No details available for input: '" + place.name + "'"
                );
                infowindow.close();
                markerElement.position = null;
                return;
            }

            if (place.viewport) {
                mapElement.innerMap.fitBounds(place.viewport);
            } else {
                mapElement.center = place.location;
                mapElement.zoom = 17;
            }

            markerElement.position = place.location;
            infowindow.setContent(
                `<strong>${place.displayName}</strong><br>
                 <span>${place.formattedAddress}</span>`
            );
            infowindow.open(mapElement.innerMap, markerElement);
        });
    }
}


document.addEventListener('DOMContentLoaded', init);

// Menu toggle
function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.classList.toggle("show-menu");
}

// Back-to-top button
window.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
