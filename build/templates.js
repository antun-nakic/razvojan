(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['example'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n  <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"naslov") || (depth0 != null ? lookupProperty(depth0,"naslov") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"naslov","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":16}}}) : helper)))
    + "</h3>\r\n  <h5>"
    + alias4(((helper = (helper = lookupProperty(helpers,"podnaslov") || (depth0 != null ? lookupProperty(depth0,"podnaslov") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"podnaslov","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":19}}}) : helper)))
    + "</h5>\r\n  <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"sadrzaj") || (depth0 != null ? lookupProperty(depth0,"sadrzaj") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sadrzaj","hash":{},"data":data,"loc":{"start":{"line":4,"column":5},"end":{"line":4,"column":16}}}) : helper)))
    + " fkjhgkjfhgd</p>\r\n</div>";
},"useData":true});
templates['komentar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>jdskhgjkfdshgksdkj "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"autor") || (depth0 != null ? lookupProperty(depth0,"autor") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"autor","hash":{},"data":data,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":33}}}) : helper)))
    + "</div>";
},"useData":true});
})();