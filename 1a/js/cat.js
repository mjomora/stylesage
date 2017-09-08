define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_Templated"], function(declare, _WidgetBase, _Templated){
	return declare("Cat",[_WidgetBase, _Templated], {
		//templateString: "<div>hello world</div>",
		templatePath: require.toUrl("./js/template/Cat.html"),
		click:0,
		url: "",
		getUrl : function(){
			return this.url;
		},
		sumar: function(){
			this.click = this.click+1;
			this.cuantos.innerHTML = this.click;
		}
		
	});
});



