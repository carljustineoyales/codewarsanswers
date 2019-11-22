//Holiday I - Temperature in Bali
/*So it turns out the weather in Indonesia is beautiful... but also far too hot most of the time.

Given two variables: heat (0 - 50 degrees centigrade) and humidity (scored from 0.0 - 1.0), your job is to test whether the weather is bareable (according to my personal preferences :D)

If the humidity is over 0.5, or heat is above 35, it's not bearable - return false.
If heat is more than 25 but less than 36, bareability depends on humidity. If humidity is above 0.4 in this scenario, return false.
If heat is less than or equal to 25 return false.
Otherwise... it's sunbathing time, so return true!*/

function bareable(heat, humidity){
  if(humidity > 0.5 || heat > 35){
    return false;
  }
  else if((heat>25 && heat<36)){
    if(humidity>0.4){
      return false;
    }
    else{return true;}
  }
  else if(heat<=25){
    return false;
  }
  else{
    return true;
  }
}
