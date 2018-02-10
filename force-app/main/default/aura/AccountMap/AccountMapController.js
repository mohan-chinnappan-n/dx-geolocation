({
   jsLoaded: function(component, event, helper) {
      // get the map from leaflet
      var map = L.map('map', {zoomControl: false}).setView([37.784173, -122.401557], 14);
      // create the tile layer and add that tile layer to the map
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        {
              attribution: 'Tiles © Esri'
        }).addTo(map);
      // assign the map to map attribute
      component.set("v.map", map);
  }
  ,accountsLoaded: function(component, event, helper) {
    
            // Add markers
            // get the map component
            var map = component.get('v.map');
            // get the event payload
            var accounts = event.getParam('accounts');
            for (var i=0; i<accounts.length; i++) {
                var account = accounts[i];
                // for each account, get lat and lng
                var latLng = [account.Location__Latitude__s, account.Location__Longitude__s];
                // mark the [lat, lng] in the map
                L.marker(latLng, {account: account}).addTo(map);
            }  
        }

})
