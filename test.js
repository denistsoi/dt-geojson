import test from 'tape';
import generateGeoJson from './';
import geojsonhint from 'geojsonhint';

var features = [{
  locations: [
  { 
    id: 1,
    name: 'fish and chips',
    location: { longitude: 50, latitude: 100 } 
  }, {
    id: 2,
    name: 'kebabs',
    location: { longitude: 55, latitude: 99 } 
  }]
}];

test('generateGeoJson', (t) => {
  const GeoJSON = generateGeoJson(features);

  t.equal(GeoJSON.type, 'FeatureCollection');
  // Check Features
  t.equal(typeof GeoJSON.features, 'object');
  t.equal(GeoJSON.features.length, 2);

  // check first feature exists
  t.equal(GeoJSON.features[0].properties.id, 1);
  t.equal(GeoJSON.features[0].properties.name, 'fish and chips');

  // test to ensure feature is formed accurately
  t.deepEqual(GeoJSON.features[1], { 
      type: 'Feature' ,
      geometry: { 
        type: 'Point',
        coordinates: [ 55, 99 ], 
      }, 
      properties: { address: '', id: 2, name: 'kebabs' }
    }
  );

  t.end();
});