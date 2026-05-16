export class Map {
    constructor(coords) {
        // this.coordinates = coords;
        this.render(coords);
    }
    render(coordinates) {
        if(!window.ol) {
            alert('Could not load maps library - please try again later!');
            return;
        }
        document.getElementById('map').innerHTML = '';

        const map = new window.ol.Map({
            target: 'map',
            layers: [
                new window.ol.layer.Tile({
                source: new window.ol.source.OSM()
                })
            ],
            view: new window.ol.View({
                center: window.ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
                zoom: 16
            })
        });
    }
}