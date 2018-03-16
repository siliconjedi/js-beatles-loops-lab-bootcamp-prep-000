function theBeatlesPlay (musicians, instruments) {
  var plays = [];
  for (let i = 0 ; i < musicians.length - 1; i++ ){
    plays[i] = "${musicians[i]} plays ${instruments[i]}"
  }
  return plays;
}
