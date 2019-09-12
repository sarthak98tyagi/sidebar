function start()
{
    var area=document.getElementById('sidebar');
    var inner=document.getElementById('inner');
    var h=parseFloat(getComputedStyle(inner).getPropertyValue('height'));
    var y,top,newTop;
    area.addEventListener('mousedown',function(e)
    {
       e.preventDefault();
       y=e.clientY;
    });
    area.addEventListener('mouseup',function(e)
    {
       e.preventDefault();
       top=getComputedStyle(inner).getPropertyValue('top');
       newTop=(parseFloat(top)+(e.clientY-y));
       newTop=newTop>0?0:newTop;
       if(Math.abs(parseFloat(newTop))>(h-document.documentElement.clientHeight))
       {
           newTop=-(h-document.documentElement.clientHeight);
       }
        inner.style.top=newTop+'px';
    });
    area.addEventListener('touchstart',function(e)
    {
        e.preventDefault();
        y=e.targetTouches[0].clientY;
    });
    area.addEventListener('touchmove',function(e)
    {
        e.preventDefault();
        top=getComputedStyle(inner).getPropertyValue('top');
        newTop=(parseFloat(top)+(e.targetTouches[0].clientY-y));
        newTop=newTop>0?0:newTop;
        if(Math.abs(parseFloat(newTop))>(h-document.documentElement.clientHeight))
        {
            newTop=-(h-document.documentElement.clientHeight);
        }
        inner.style.top=newTop+'px';
    });
}
