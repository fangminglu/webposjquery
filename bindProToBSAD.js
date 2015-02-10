function showProMain()
{
    var propertyStr=localStorage.getItem('propertyDb');
    var property=JSON.parse(propertyStr);
    $(document).ready(function()
    {
      showPro(property);
        saveProduct();
    });
}
function showPro(property)
{
    $.each(property,function(i)
    {
        var show=
            "<h>"+ property[i]+'<input class="goodsNews">'+"</h>"+'<br>';
        $('#backAddTd').append(show);
    })
}
function saveProduct()
{
    $('#saveProduct').click(function()
    {
        var information=$('.goodsNews');
        console.log('who are you');
        console.log(information);
        var allItemStr=localStorage.getItem('allItemsDb');
        var allItems=JSON.parse(allItemStr);
        var newGoods=
        {
            //name:information[0].text(),
            //count:information[1].text(),
            //price:information[2].text(),
            //unit:information[3].text()
        };
        allItems.push(newGoods);
        allItemStr=JSON.stringify(allItems);
        localStorage.setItem('allItemsDb',allItemStr);
    })
}
function addProperty()
{

}