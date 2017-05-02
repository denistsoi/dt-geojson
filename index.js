/**
 * generateGeoJson
 * @param {array} features
 * @returns {GeoJson}
 */

function generateGeoJSON(features) {  
  var template = {
    type: "FeatureCollection",
    features: generateFeatures(features)
  };  

  return template;
}

/**
 * generateFeatures
 * @param {array} features 
 * @returns {FeaturesArray}
 */
function generateFeatures(features) {
  var featuresArray = [];

  // dataSet = [
  //  { k: [{ l: [lng,lat] }, { l: [lng,lat] } ] }, 
  //  { k: [{ l: [lng,lat] }] }
  // ]

  features.forEach(function(feature) {
    console.log(feature);
    if (feature.locations.length) {
      feature.locations.forEach(function(location) {
        featuresArray.push(generateFeature(location));
      });
    };
  });

  return featuresArray;
  // if (typeof features[0] == 'object') {
  //   features.forEach(function(dataPoint) {
  //     for (var key in dataPoint) {
  //       if (typeof dataPoint[key] == 'object') {
  //         dataPoint[key].forEach((feature)=>{
  //           featuresArray.push(generateFeature(feature));
  //         });
  //       }

  //     }
  //   });
  //   return featuresArray;
  // }
}

/**
 * generateFeature
 * @param {object} building 
 * @returns {FeatureObject}
 */
function generateFeature(feature) {
  var featureTemplate = {
    type: "Feature",
    geometry: {
      type: feature.type || "Point",
      coordinates: [feature.location.longitude, feature.location.latitude]
    },
    properties: {
      id: feature.id || '',
      name: feature.name || '',
      address: feature.location.address || ''
    }
  };

  return featureTemplate;
}


var features = [{
  locations: [{ 
    id: 1,
    name: 'fish and chips',
    location: { longitude: 50, latitude: 100 } 
  }, {
    id: 2,
    name: 'kebabs',
    location: { longitude: 50, latitude: 100 } 
  }]
}];

generateGeoJSON(features);

exports = module.exports = generateGeoJSON;