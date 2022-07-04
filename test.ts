// Stress test are ignored
function runUnitTest() {

  const cases: {input: string[], output: boolean}[] = [
    { input:  ['n', 's', 'w', 'e'], output: false},
    { input:  ['n', 's', 'w', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], output: false},
    { input:  ['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'], output: true},
    { input:  ['e', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 'w'], output: true},
  ]

  for(let caseDetail of cases) {
    const testOutput = canWalkAround(caseDetail.input);
    if(testOutput !== caseDetail.output){
      console.error("Test not passed !");
      console.error("Input:", caseDetail.input);
      console.error("Returned result:", testOutput, "(Expected): ", caseDetail.output);
    } else { 
      console.log("Test ok");
    }
  }
}
