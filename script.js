document.querySelector('.crs').style.display='none'
document.querySelector(".hamb").addEventListener('click',()=>{
    document.querySelector(".sidebar").classList.toggle('sidehide');

    if(document.querySelector('.sidebar').classList.contains('sidehide'))
    {
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.crs').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(() => {
            document.querySelector('.crs').style.display='inline'
        }, 400);
    }
})
