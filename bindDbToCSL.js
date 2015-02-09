function showClientMain()
{
    var allItemsStr=localStorage.getItem('allItemsDb');
    var allItems=JSON.parse(allItemsStr);
    $(document).ready(function()
    {
        bindGoodsKey(allItems);
        addCartNum();
    });
}
function bindGoodsKey(allItems)
{
    var btnInsertCart='<button>加入购物车</button>';
    $.each(allItems,function(i)
    {
        var insertRow="<tr>"+
            "<td>"+allItems[i].sort+"</td>"+
            "<td>"+allItems[i].name+"</td>"+
            "<td>"+allItems[i].unit+"</td>"+
            "<td>"+allItems[i].price+"</td>"+
            "<td>"+btnInsertCart+"</td>"+
            "</tr>";
        $('#itemListTab').append(insertRow);
    });
}
function addCartNum()
{
   $('#itemListTab').find('button').on('click',function()
   {
       var name=$(this).closest('tr').find('td').eq(1).text();
       addNum(name);
       refreshCart();
   })
}
function addNum(item)
{
    var lists = JSON.parse(localStorage.lists );
    lists[item] = parseInt(lists[item])+1;
    localStorage.lists = JSON.stringify(lists);
}
function refreshCart()
{
    var lists = JSON.parse(localStorage.lists );
    var num = 0;
    _(lists).each(function(list)
    {
        num = list+num;
    });
    $('#tableHead').find('#cartNumber').text(num);
}