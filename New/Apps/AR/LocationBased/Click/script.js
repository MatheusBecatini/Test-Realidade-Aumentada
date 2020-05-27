window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
    document.querySelector('a-gltf-model')
        .setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
    });
}

AFRAME.registerComponent("clickhandler", {
    init: function() {
      // we add the click event listener to any instance of this component
      this.el.addEventListener("click", () => {
        alert("Clicked!");
      });
    }
  });
