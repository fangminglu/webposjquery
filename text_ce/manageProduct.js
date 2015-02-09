
function bindAllToViewMain()
{
    var allItemStr=localStorage.getItem('allItemsDb');
    var allItems=JSON.parse(allItemStr);
    $(document).ready(function()
    {
        backToBindAllItems(allItems)
    })
}
function backToBindAllItems(allItems)
{
    $.each(allItems,function(i)
    {
        var num=i+1;
        var new_row= "<tr>"+
        "<td>"+num+"</td>"+
        "<td>"+allItems[i].name+"</td>"+
        "<td>"+allItems[i].total+"</td>" +
            "<td>"+allItems[i].price+"</td>"+
        "<td>"+allItems[i].unit+"</td>"+
        "<td>"+"</td>"+allItems[i].time+"<td>"+
            "<a target='mainFrame'href='http://localhost:63342/WebPos/detailContent.html'><button class='detailBtn'>详情</button></a>"+"<button class='deleteItem'>删除</button>"+
            "</td>"+ "</tr>";
        $("#backGoodsTab").append(new_row)
    })
}