const findNeedle = (haystack) => {
  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
    if (element === "needle") {
      return `found the needle at position ${i}`;
    }
  }
};

//Shortest solution
const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf(
    "needle"
  )}`;

//Stupidly long CodeWars solution
var a = "a";
var b = "b";
var c = "c";
var d = "d";
var e = "e";
var f = "f";
var g = "g";
var h = "h";
var i = "i";
var j = "j";
var k = "k";
var l = "l";
var m = "m";
var n = "n";
var o = "o";
var p = "p";
var q = "q";
var r = "r";
var s = "s";
var t = "t";
var u = "u";
var v = "v";
var w = "w";
var x = "x";
var y = "y";
var z = "z";
var space = " ";

var theWordNeedleWhichWillNeedToBeFoundWithinTheHaystackContainingTheNeedle =
  []
    .concat(n)
    .concat(e)
    .concat(e)
    .concat(d)
    .concat(l)
    .concat(e)
    .join("");
var returnStringPrefix = []
  .concat(f)
  .concat(o)
  .concat(u)
  .concat(n)
  .concat(d)
  .concat(space)
  .concat(t)
  .concat(h)
  .concat(e)
  .concat(space)
  .concat(n)
  .concat(e)
  .concat(e)
  .concat(d)
  .concat(l)
  .concat(e)
  .concat(space)
  .concat(a)
  .concat(t)
  .concat(space)
  .concat(p)
  .concat(o)
  .concat(s)
  .concat(i)
  .concat(t)
  .concat(i)
  .concat(o)
  .concat(n)
  .concat(space)
  .join("");

function findNeedle(theHaystackContainingTheNeedle) {
  var indexOfNeedleWithinTheHaystackContainingTheNeedle =
    -1;
  var numberOfStrawsPlusTheNeedleThatAreContainedWithinTheGiantHaystackContainingTheNeedleWhichIsProbablyLocatedInAFieldSomewhereNearABarnOnAFarmPotentiallyWithinTheVicinityOfRuralTexas =
    getLengthOfArrayContainingElements(
      theHaystackContainingTheNeedle
    );
  for (
    var currentIndexOfTheCurrentlyExecutingForLoop = 0;
    currentIndexOfTheCurrentlyExecutingForLoop <=
    numberOfStrawsPlusTheNeedleThatAreContainedWithinTheGiantHaystackContainingTheNeedleWhichIsProbablyLocatedInAFieldSomewhereNearABarnOnAFarmPotentiallyWithinTheVicinityOfRuralTexas;
    currentIndexOfTheCurrentlyExecutingForLoop =
      currentIndexOfTheCurrentlyExecutingForLoop + 1
  ) {
    if (currentIndexOfTheCurrentlyExecutingForLoop < 0) {
      throw new Error(
        'This shouldn"t happen'.replace("\u0022", "\u2019")
      );
    }

    if (
      currentIndexOfTheCurrentlyExecutingForLoop >
      numberOfStrawsPlusTheNeedleThatAreContainedWithinTheGiantHaystackContainingTheNeedleWhichIsProbablyLocatedInAFieldSomewhereNearABarnOnAFarmPotentiallyWithinTheVicinityOfRuralTexas
    ) {
      throw new Error(
        'This shouldn"t happen'.replace("\u0022", "\u2019")
      );
    }

    var theValueOfTheCurrentStrawOrNeedleThatResidesWithinTheLargeHaystack =
      getElementFromArrayGivenIndex(
        theHaystackContainingTheNeedle,
        currentIndexOfTheCurrentlyExecutingForLoop
      );

    if (
      theValueOfTheCurrentStrawOrNeedleThatResidesWithinTheLargeHaystack ===
      theWordNeedleWhichWillNeedToBeFoundWithinTheHaystackContainingTheNeedle
    ) {
      indexOfNeedleWithinTheHaystackContainingTheNeedle =
        currentIndexOfTheCurrentlyExecutingForLoop;
    }
  }

  var theCompleteReturnValueContainingTheReturnPrefixAndTheIndexOfTheNeedleWithinTheHaystackContainingTheNeedle =
    returnStringPrefix
      .split("")
      .concat(
        indexOfNeedleWithinTheHaystackContainingTheNeedle
      )
      .join("");

  return theCompleteReturnValueContainingTheReturnPrefixAndTheIndexOfTheNeedleWithinTheHaystackContainingTheNeedle;
}

function getElementFromArrayGivenIndex(
  arrayContainingElements,
  indexToRetrieveFromArrayContainingElements
) {
  var valueFromArrayWhereIndexWasBeingSearchedFor = -1;
  var numberOfElementsInArrayContainingElements =
    getLengthOfArrayContainingElements(
      arrayContainingElements
    );
  for (
    var currentIndexOfTheCurrentlyExecutingForLoop = 0;
    currentIndexOfTheCurrentlyExecutingForLoop <=
    numberOfElementsInArrayContainingElements;
    currentIndexOfTheCurrentlyExecutingForLoop =
      currentIndexOfTheCurrentlyExecutingForLoop + 1
  ) {
    if (currentIndexOfTheCurrentlyExecutingForLoop < 0) {
      throw new Error(
        'This shouldn"t happen'.replace("\u0022", "\u2019")
      );
    }

    if (
      currentIndexOfTheCurrentlyExecutingForLoop >
      numberOfElementsInArrayContainingElements
    ) {
      throw new Error(
        'This shouldn"t happen'.replace("\u0022", "\u2019")
      );
    }

    var valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop =
      arrayContainingElements[
        currentIndexOfTheCurrentlyExecutingForLoop
      ];

    if (
      currentIndexOfTheCurrentlyExecutingForLoop ===
      indexToRetrieveFromArrayContainingElements
    ) {
      valueFromArrayWhereIndexWasBeingSearchedFor =
        valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop;
    }
  }

  return valueFromArrayWhereIndexWasBeingSearchedFor;
}

function getIndexFromArrayGivenValue(
  arrayContainingElements,
  valueForWhichToUseToFindTheIndexAndRetrieveItFromArrayContainingElements
) {
  var indexFromArrayWhereValueWasFound = -1;
  var numberOfElementsInArrayContainingElements =
    getLengthOfArrayContainingElements(
      arrayContainingElements
    );
  for (
    var currentIndexOfTheCurrentlyExecutingForLoop = 0;
    currentIndexOfTheCurrentlyExecutingForLoop <=
    numberOfElementsInArrayContainingElements;
    currentIndexOfTheCurrentlyExecutingForLoop =
      currentIndexOfTheCurrentlyExecutingForLoop + 1
  ) {
    if (indexFromArrayWhereValueWasFound > -1) {
      continue;
    }

    var valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop =
      getElementFromArrayGivenIndex(
        arrayContainingElements,
        currentIndexOfTheCurrentlyExecutingForLoop
      );

    if (
      valueBasedOnCurrentIndexOfTheArrayThatIsCurrentlyBeingReferencedWithinTheExecutingForLoop ===
      valueForWhichToUseToFindTheIndexAndRetrieveItFromArrayContainingElements
    ) {
      indexFromArrayWhereValueWasFound =
        currentIndexOfTheCurrentlyExecutingForLoop;
    }
  }

  return indexFromArrayWhereValueWasFound;
}

function getLengthOfArrayContainingElements(
  arrayContainingElementsForWhichToRetreiveTheLengthFrom
) {
  var theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom =
    arrayContainingElementsForWhichToRetreiveTheLengthFrom.length;

  if (
    theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom <
    0
  ) {
    theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom = 0;
  }

  return theLengthOfTheArrayContainingElementsForWhichToRetreiveTheLengthFrom;
}
