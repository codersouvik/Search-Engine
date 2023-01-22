const search=()=>{
    const searchbox=document.getElementById('srch').value.toUpperCase();
    const storeItem=document.getElementById('product-list');
    const product=document.querySelectorAll('.product');
    const pname=storeItem.getElementsByTagName('h2');

    for(var i=0;i<pname.length;i++)
    {
        let match=product[i].getElementsByTagName('h2')[0];
        if(match)
        {
            let textvalue=match.innerHTML || match.textContent
            if(textvalue.toUpperCase().indexOf(searchbox)>-1)
            {
                product[i].style.display= "";
            }
            else
            {
                product[i].style.display="none";
            }
        }
    }

}