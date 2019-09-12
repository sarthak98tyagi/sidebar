function start()
{
    var area=document.getElementById('sidebar');
    var inner=document.getElementById('inner');
    var h=parseFloat(getComputedStyle(inner).getPropertyValue('height'));
    var x,y;
    area.addEventListener('mousedown',function(e)
    {
       e.preventDefault();
       y=e.clientY;
    });
    area.addEventListener('mouseup',function(e)
    {
       e.preventDefault();
       var x=getComputedStyle(inner).getPropertyValue('top');
       var nw=(parseFloat(x)+(e.clientY-y));
       nw=nw>0?0:nw;
       if(Math.abs(parseFloat(nw))>(h-document.documentElement.clientHeight))
       {
           nw=-(h-document.documentElement.clientHeight);
       }
        inner.style.top=nw+'px';
    });
    area.addEventListener('touchstart',function(e)
    {
        e.preventDefault();
        y=e.targetTouches[0].clientY;
    });
    area.addEventListener('touchmove',function(e)
    {
        e.preventDefault();
        var x=getComputedStyle(inner).getPropertyValue('top');
        var nw=(parseFloat(x)+(e.targetTouches[0].clientY-y));
        console.log(document.documentElement.clientHeight,nw);
        nw=nw>0?0:nw;
        if(Math.abs(parseFloat(nw))>(h-document.documentElement.clientHeight))
        {
            nw=-(h-document.documentElement.clientHeight);
        }
        inner.style.top=nw+'px';
    });
}
