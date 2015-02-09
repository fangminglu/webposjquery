
function deleteItemMain()
{
    $(document).ready(function()
    {
        deleteItems();
    })
}
function deleteItems()
{
    $('#backGoodsTab').find('.deleteItem').on('click',function()
    {
        var name=$(this).closest('tr').find('td').eq(1).text();
        var allItemStr=localStorage.getItem('allItemsDb');
        var allItems=JSON.parse(allItemStr);
        var confirmDel=confirm('你确定要删除该商品？');
        $.each(allItems,function(i)
        {
            if(confirmDel==true)
            {
                if (allItems[i].name === name)
                {
                    allItems.splice(i, 1);
                }
                allItemStr = JSON.stringify(allItems);
                localStorage.setItem('allItemsDb', allItemStr);
            }
        });

    })
}