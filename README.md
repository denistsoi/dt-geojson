# dt-geojson

a helper to create geojson data.

### how to use

    features = [{
      ...feature1
    }, {
      ...feature2
    }]

    generateGeoJson(features) // geojson.features = features.childset;

    feature = {
      type: 'string'          // optional. type string 'Point'
      location: {
        longitude: number, 
        latitude:  number
      },
      properties: {           // extra information
        
      }
    }


### todo

- [ ] add validation for when features 

### Author   
denistsoi <denistsoi@gmail.com>