function solution(number){
    var numbers = {},
        result = "";
        
    numbers['1']="I";
    numbers['5']="V";

    if (number <= 3) {
      for (var f=1; f<=number; f++) {
        result+=numbers['1'];
      }
    }

    if (number >3 && number < 9 ) {
      if (number===4) {
        result+=numbers["1"];
      }
      result+=numbers["5"];
      for (var f=6; f<=number; f++) {
        result+=numbers['1'];
      }
    }
    
    return result;
}