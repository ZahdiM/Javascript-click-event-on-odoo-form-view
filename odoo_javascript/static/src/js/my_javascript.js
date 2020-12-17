odoo.define('odoo_javascript.my_widget', function (require) {
	var Widget= require('web.Widget');
	var widgetRegistry = require('web.widget_registry');
	var FieldManagerMixin = require('web.FieldManagerMixin');
	
	var MyWidget = Widget.extend(FieldManagerMixin, {
    init: function (parent, model, context) {
        this._super(parent);
        FieldManagerMixin.init.call(this);
		this._super.apply(this, arguments);	
    },

    start: function() {
    	var self = this;
    	this._super.apply(this, arguments);
		var html ='<button id="btn_click_me" class="btn btn-primary" >Click Me</button>';
		this.$el.html(html);	
		this.$('#btn_click_me').click(function(ev){
			alert("I am triggered from odoo javascript.");
		});
    },
});

widgetRegistry.add(
    'my_widget', MyWidget
);

});