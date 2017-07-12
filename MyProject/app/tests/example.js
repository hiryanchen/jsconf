var reflect = require("reflect-metadata");
var component = require("../signin/signin.component");

describe("Testing items components", function() {
  it("The hash name function", function() {
    var signinComponent = new component.SignInComponent();
    expect(signinComponent.hashPassword("JSConf")).toBe(
      "42bce8afa2b5279b7c88b820bf0acd403d41a9c2"
    );
  });

  it("The hash name function", function() {
    var signinComponent = new component.SignInComponent();
    expect(signinComponent.hashPassword("JSConf")).toBe(
      "42bce8afa2b5279b7c88b820bf0acd403d41a9c2"
    );
  });
});
