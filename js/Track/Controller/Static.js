Genoverse.Track.Static = Genoverse.Track.extend({
  featureMargin : { top: 0, right: 1, bottom: 0, left: 1 },
  controls      : 'off',
  fixedHeight   : true,
  unsortable    : true,
  url           : false,
  
  constructor: function (config) {
    this.base(config);
    
    this.image = $('<img>').appendTo(this.imgContainer);
    this.container.toggleClass('track_container track_container_static').html(this.imgContainer);
  },
  
  reset           : $.noop,
  positionFeature : $.noop,
  scaleFeatures   : function (features) { return features; },
  
  setWidth: function (width) {
    this.base(width);
    this.image.width = width;
  },
  
  setScale: function () {
    this.base();
    this.container.css('left', 0);
    this.imgContainer.show();
  },
  
  checkDataRange: function () {
    return true;
  },
  
  makeImage: function (params) {
    var features = this.positionFeatures(this.findFeatures(params.start, params.end), params);
    
    if (features) {
      var string = JSON.stringify(features);
      
      if (this.stringified !== string) {
        params.width         = this.width;
        params.featureHeight = this.height;
        
        this.render(features, this.image.data(params));
        this.imgContainer.children(':last').show();
        this.resize(this.height);
        
        this.stringified = string;
      }
    }
    
    return $.Deferred().resolve();
  },
  
  draw: function (features, featureContext, labelContext, scale) {
    for (var i = 0; i < features.length; i++) {
      this.drawFeature(features[i], featureContext, labelContext, scale);
    }
  }
});