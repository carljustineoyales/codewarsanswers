function findAverage(allStars){
//code here
  
  var sum =0;
  for(var i=0;i<allStars.length;i++){
   sum += parseInt( allStars[i],10);   
  }
  var average = sum/allStars.length;
  return average;
}
