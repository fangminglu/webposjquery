
function showBuyItemsMain()
{
    var sumPrice=0;
    var allItemsStr=localStorage.getItem('allItemsDb');
    var allItems=JSON.parse(allItemsStr);
    var promotions=loadPromotions();
    var cartList=JSON.parse(localStorage.lists);
    var totalSavePrice=0;
    $(document).ready(function()
    {
        showBuyItems(allItems,cartList,promotions,sumPrice,totalSavePrice);
    })
}
function showBuyItems(allItems,cartList,promotions,sumPrice,totalSavePrice)
{
    allItems= $.each(allItems,function(i)
    {
        allItems[i].count=cartList[allItems[i].name]
    });
    allItems=_(allItems).filter(function(items)
    {
        return items.count!=0;
    });
    bindDbToTab(allItems,promotions,sumPrice,totalSavePrice);
   }
function bindDbToTab(allItems,promotions,sumPrice,totalSavePrice)
{
    $.each(allItems,function(j)
    {
        var savePrice = parseInt(allItems[j].count/3)*allItems[j].price;
        var minorTotal=allItems[j].count*allItems[j].price;
        var newRow="<tr>"+
            "<td>"+allItems[j].sort+"</td>"+
            "<td>"+allItems[j].name+"</td>"+
            "<td>"+allItems[j].price+'（元）'+"</td>"+
            "<td>"+allItems[j].unit+"</td>"+
            "<td>"+allItems[j].count+"</td>"+
            "<td>"+minorTotal+'(元)'+"</td>"+
            "</tr>";
        var promoItems= _.find(promotions,function(item)
        {
            return item==allItems[j].barcode;
        });
        var exist= $.inArray(allItems[j].barcode,promotions);
        showPromotion(allItems,exist,minorTotal,j);
        sumPrice +=(minorTotal-savePrice);
        totalSavePrice+=savePrice;
        $('#buyItemTab').append(newRow);
    });
    $('#sum').text(sumPrice+'（元）');
    $('#save').text(totalSavePrice+"(元)");

}
function showPromotion(allItems,exist,minorTotal,j)
{
    if (allItems[j].count > 2&&exist>=0)
    {
        var newPrice = (minorTotal - parseInt(allItems[j].count / 3) * allItems[j].price) + '(原价：' + minorTotal + "元）";
        newRow = "<tr>" +
        "<td>" + allItems[j].sort + "</td>" +
        "<td>" + allItems[j].name + "</td>" +
        "<td>" + allItems[j].price+'（元）' + "</td>" +
        "<td>" + allItems[j].unit + "</td>" +
        "<td>" + allItems[j].count + "</td>" +
        "<td>" + newPrice + "</td>" +
        "</tr>";
        var promoList = "<tr>" +
            "<td>" + allItems[j].sort + "</td>" +
            "<td>" + allItems[j].name + "</td>" +
            "<td>" + parseInt(allItems[j].count / 3) + "</td>" +
            "</tr>";
        $("#promoLIstTab").append(promoList);
    }
}
