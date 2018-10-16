
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      return true;
    }
  },
  isSame: function(item, item2) {
    if (item !== item2) {
      throw new Error("THAT IS NOT THE SAME!!!");
    } else {
      return true;
    }
  },
  hashIncludes: function(obj, message) {
    if (Object.values(obj).includes(message)) {
      return true;
    } else  {
      return false;
    }
  }
};
