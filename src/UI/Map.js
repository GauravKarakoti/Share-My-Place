export class Map {
    constructor(coords) {
        // this.coordinates = coords;
        this.render(coords);
    }
    render(coordinates) {
        if(!google) {
            alert('Could not load maps library - please try again later!');
            return;
        }
        document.getElementById('map').innerHTML = '';

        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
                zoom: 16
            })
        });
    }
}