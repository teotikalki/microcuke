var assert = require('assert');
var StepDefinition = require('../../lib/cucumber/step_definition');

describe("StepDefinition", function () {
  describe("#createTestStep", function () {
    it("returns null when the regexp doesn't match the pickleStep's text", function () {
      var stepDefinition = new StepDefinition(/I have (\d+) cukes/, function (n) {});

      var pickleStep = {text: "wat"};
      var testStep = stepDefinition.createTestStep(pickleStep);
      assert.equal(testStep, null);
    });

    it("returns a TestStep when the regexp matches the pickleStep's text", function () {
      var stepDefinition = new StepDefinition(/I have (\d+) cukes/, function (n) {});

      var pickleStep = {text: "I have 44 cukes"};
      var testStep = stepDefinition.createTestStep(pickleStep);
      assert.ok(testStep);
    });
  });
});
