window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
    document.querySelector('a-gltf-model')
        .setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
    });
}
