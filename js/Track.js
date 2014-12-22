Genoverse.Track = Base.extend({
  height     : 12,        // The height of the track_container div
  margin     : 2,         // The spacing between this track and the next
  resizable  : true,      // Is the track resizable - can be true, false or 'auto'. Auto means the track will automatically resize to show all features, but the user cannot resize it themselves.
  border     : true,      // Does the track have a bottom border
  unsortable : false,     // Is the track unsortable
  name       : undefined, // The name of the track, which appears in its label
  autoHeight : undefined, // Does the track automatically resize so that all the features are visible
  
 /* constructor: function (config) {
    if (this.stranded || config.stranded) {
      this.controller = this.controller || Genoverse.Track.Controller.Stranded;
      this.model      = this.model      || Genoverse.Track.Model.Stranded;
    }

    this.setInterface();
    this.extend(config);
    this.setDefaults();
    this.setEvents();

    Genoverse.wrapFunctions(this);

    this.setLengthMap();
    this.setMVC();
  },*/

  constructor: function (config) {
    this.setInterface();
    this.extend(config);
    this.setDefaults();
    this.setProperties();
    this.setEvents();

    Genoverse.wrapFunctions(this);
  },
  
  setInterface: function () {
    var mvc   = [ 'Controller', 'Model', 'View', 'controller', 'model', 'view' ];
    var proto = Genoverse.Track.prototype;
    var prop;

    this._functions  = { controller: {}, model: {}, view: {} };
    this._properties = { controller: {}, model: {}, view: {} };
    this._interface  = {};

    for (var i = 0; i < 3; i++) {
      for (prop in Genoverse.Track[mvc[i]].prototype) {
        if (typeof proto[prop] === 'undefined') {
          this._interface[prop] = mvc[i + 3];
          
          if (this[prop]) {
            this[typeof this[prop] === 'function' ? '_functions' : '_properties'][this._interface[prop]][prop] = this[prop];
          }
        }
      }
    }
    
    for (i in this._functions) {
      this._functions[i].prop = $.proxy(this.prop, this);
    }
  },
  
  setDefaults: function () {
    this.order             = this.strand === -1 && this.orderReverse ? this.orderReverse : typeof this.order !== 'undefined' ? this.order : this.index;
    this.defaultHeight     = this.height;
    this.defaultAutoHeight = this.autoHeight;
    this.autoHeight        = typeof this.autoHeight !== 'undefined' ? this.autoHeight : this.browser.trackAutoHeight;
    this.height           += this.margin;
    this.initialHeight     = this.height;

    if (this.resizable === 'auto') {
      this.autoHeight = true;
    }
  },

  setProperties: function () {
    var def = {};
    var value;

    this.lengthMap  = [];
    this.models     = {};
    this.views      = {};

    for (var key in this) { // Find all scale-map like keys
      if (/^(model|view|controller)$/.test(key)) {
        def[key] = this[key];
        delete this[key];
      } else if (!isNaN(key)) {
        key   = parseInt(key, 10);
        value = this[key];
        delete this[key];
        
        this.lengthMap.push([ key, value === false ? { threshold: key, resizable: 'auto', featureHeight: 0 } : value ]);
      }
    }

    this.controller = this.newMVC('Controller', def.controller);
    
    delete def.controller;
    
    this.lengthMap.push([ -1, def ]);
    
    this.lengthMap = this.lengthMap.sort(function (a, b) { return b[0] - a[0]; });

    for (var i = 0; i < this.lengthMap.length; i++) {
      this.models[this.lengthMap[i][0]] = this.newMVC('Model', this.lengthMap[i][1].model);
      this.views[this.lengthMap[i][0]]  = this.newMVC('View',  this.lengthMap[i][1].view);
    }
  },
  
  setEvents: $.noop,
  
  setMV: function () {
    var lengthSettings = this.getSettingsForLength();
    
    this.model = this.controller.model = this.models[lengthSettings[0]];
    this.view  = this.controller.view  = this.views[lengthSettings[0]];
  },
  /*
  setMVC: function () {
    // FIXME: if you zoom out quickly then hit the back button, the second zoom level (first one you zoomed out to) will not draw if the models/views are the same
    if (this.model && typeof this.model.abort === 'function') { // TODO: don't abort unless model is changed?
      this.model.abort();
    }

    var lengthSettings = this.getSettingsForLength();
    var settings       = $.extend(true, {}, this.constructor.prototype, lengthSettings[1]); // model, view, options
    var mvc            = [ 'model', 'view', 'controller' ];
    var mvcSettings    = {};
    var trackSettings  = {};
    var obj, j;

    settings.controller = settings.controller || this.controller || Genoverse.Track.Controller;
    settings.model      = this.models[lengthSettings[0]] || settings.model || this.model || Genoverse.Track.Model;
    settings.view       = this.views[lengthSettings[0]]  || settings.view  || this.view  || Genoverse.Track.View;

    for (var i = 0; i < 3; i++) {
      mvcSettings[mvc[i]] = { prop: {}, func: {} };
    }

    for (i in settings) {
      if (!/^(constructor|init|reset|setDefaults|base|extend|lengthMap)$/.test(i) && isNaN(i)) {
        if (this._interface[i]) {
          mvcSettings[this._interface[i]][typeof settings[i] === 'function' ? 'func' : 'prop'][i] = settings[i];
        } else if (!Genoverse.Track.prototype.hasOwnProperty(i) && !/^(controller|model|view)$/.test(i)) {
          trackSettings[i] = settings[i];
        }
      }
    }

    this.extend(trackSettings);

    for (i = 0; i < 3; i++) {
      obj = mvc[i];

      if (obj === 'controller') {
        continue;
      }

      if (typeof settings[obj] === 'function' && (!this[obj] || this[obj].constructor.ancestor !== settings[obj])) {
        // Make a new instance of model/view if there isn't one already, or the model/view in lengthSettings is different from the existing model/view
        this[obj] = this.newMVC(settings[obj], mvcSettings[obj].func, mvcSettings[obj].prop);
      } else {
        // Update the model/view with the values in mvcSettings.
        var test = typeof settings[obj] === 'object' && this[obj] !== settings[obj] ? this[obj] = settings[obj] : this[obj + 's'][lengthSettings[0]] && this.lengthMap.length > 1 ? this[obj + 's'][lengthSettings[0]] : false;

        if (test) {
          for (j in mvcSettings[obj].prop) {
            if (typeof test[j] !== 'undefined') {
              this[obj][j] = mvcSettings[obj].prop[j];
            }
          }

          this[obj].constructor.extend(mvcSettings[obj].func);

          if (obj === 'model' && typeof test.url !== 'undefined') {
            this.model.setURL(); // make sure the URL is correct
          }
        }
      }
    }

    if (!this.controller || typeof this.controller === 'function') {
      this.controller = this.newMVC(settings.controller, mvcSettings.controller.func, $.extend(mvcSettings.controller.prop, { model: this.model, view: this.view }));
    } else {
      $.extend(this.controller, { model: this.model, view: this.view, threshold: mvcSettings.controller.prop.threshold || this.controller.constructor.prototype.threshold });
    }

    if (this.strand === -1 && this.orderReverse) {
      this.order = this.orderReverse;
    }

    if (lengthSettings[1]) {
      this.models[lengthSettings[0]] = this.model;
      this.views[lengthSettings[0]]  = this.view;
    }
  },
*/
  newMVC: function (type, object) {
    object = (object || Genoverse.Track[type]).extend(this._functions[type.toLowerCase()]);
    
    return new object($.extend({
      browser : this.browser,
      width   : this.width,
      index   : this.index,
      track   : this
    }, this._properties[type.toLowerCase()]));
  },

  getSettingsForLength: function () {
    for (var i = 0; i < this.lengthMap.length; i++) {
      if (this.browser.length > this.lengthMap[i][0] || this.browser.length === 1 && this.lengthMap[i][0] === 1) {
        return this.lengthMap[i];
      }
    }

    return [];
  },

  prop: function (key, value) {
    var mvc = [ 'controller', 'model', 'view' ];
    var obj;

    if (this._interface[key]) {
      obj = this[this._interface[key]];
    } else {
      for (var i = 0; i < 3; i++) {
        if (this[mvc[i]] && typeof this[mvc[i]][key] !== 'undefined') {
          obj = this[mvc[i]];
          break;
        }
      }

      obj = obj || this;
    }

    if (typeof value !== 'undefined') {
      if (value === null) {
        delete obj[key];
      } else {
        obj[key] = value;
      }
    }

    return obj ? obj[key] : undefined;
  },

  setHeight: function (height, forceShow) {
    if (this.disabled || (forceShow !== true && height < this.prop('featureHeight')) || (this.prop('threshold') && !this.prop('thresholdMessage') && this.browser.length > this.prop('threshold'))) {
      height = 0;
    } else {
      height = Math.max(height, this.prop('minLabelHeight'));
    }

    this.height = height;

    return height;
  },

  resetHeight: function () {
    if (this.resizable === true) {
      var resizer = this.prop('resizer');

      this.autoHeight = !!([ this.defaultAutoHeight, this.browser.trackAutoHeight ].sort(function (a, b) {
        return (typeof a !== 'undefined' && a !== null ? 0 : 1) - (typeof b !== 'undefined' && b !== null ?  0 : 1);
      })[0]);

      this.controller.resize(this.autoHeight ? this.prop('fullVisibleHeight') : this.defaultHeight + this.margin + (resizer ? resizer.height() : 0));
      this.initialHeight = this.height;
    }
  },

  enable: function () {
    if (this.disabled === true) {
      this.disabled = false;
      this.controller.resize(this.initialHeight);
      this.reset();
    }
  },

  disable: function () {
    if (!this.disabled) {
      this.disabled = true;
      this.controller.resize(0);
    }
  },

  reset: function () {
    if (this.prop('url') !== false) {
      this.model.init(true);
    }

    this.view.init();
    this.setLengthMap();
    this.controller.reset();
  },

  remove: function () {
    this.browser.removeTrack(this);
  },

  destructor: function () {
    this.controller.destroy();

    var objs = [ this.view, this.model, this.controller, this ];

    for (var obj in objs) {
      for (var key in obj) {
        delete obj[key];
      }
    }
  }
});
