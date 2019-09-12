function start()
{
    var area=document.getElementById('sidebar');
    var inner=document.getElementById('inner');
    var x,y;
    area.addEventListener('touchstart',function(e)
    {
        e.preventDefault();
        y=e.targetTouches[0].clientY;
    });
    area.addEventListener('touchmove',function(e)
    {
        e.preventDefault();
        var x=getComputedStyle(inner).getPropertyValue('top');
        var h=getComputedStyle(inner).getPropertyValue('height');
        console.log(h);
        var nw=(parseFloat(x)+(e.targetTouches[0].clientY-y));
        console.log(document.documentElement.clientHeight,nw);
        nw=nw>0?0:nw;
        if(Math.abs(parseFloat(nw))>document.documentElement.clientHeight)
        {
            nw=parseFloat(x);
        }
        inner.style.top=nw+'px';
    });
}