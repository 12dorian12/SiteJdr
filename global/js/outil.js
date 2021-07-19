
function demarage(myFunction)
{
  myFunction();

  if(window.attachEvent)
  {
      window.attachEvent('onload', myFunction);
  }
  else
  {
      if(window.onload)
      {
          var curronload = window.onload;
          var newonload = function(evt)
          {
              curronload(evt);
              myFunction();
          };
          window.onload = newonload;
      }
      else
      {
          window.onload = myFunction;
      }
  }
}
