function main() {
  var data = new BusinessLayer();
  data.resolveTravelData();

  var presentation = new Presentation();
  presentation.displayhtml();
  
}
main();
