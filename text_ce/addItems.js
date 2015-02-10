
function addItem()
{
    $(document).ready(function()
    {
        ergodicProperty();
        clickBtnAdd();

    })
}
function ergodicProperty()
{
    var propertyStr=localStorage.getItem('propertyDb');
    var property=JSON.parse(propertyStr);
    $.each(property,function(i)
    {
        var newRow='<form>'+property[i]+'<input type="text" name="addGoods">'+'</form>';
        $('#backAddTable').append(newRow);
    })
}
function clickBtnAdd()
{
    $('#saveProduct').click(function()
    {
        catchText();
        alert('保存成功')
    })
}
function catchText()
{
    var inputs=document.getElementsByName("addGoods");
    var newItem={};
    newItem.name=inputs[0].value;
    newItem.total=inputs[1].value;
    newItem.price=inputs[2].value;
    newItem.unit=inputs[3].value;
    newItem.sort=inputs[4].value;
    addNewItem(newItem);
}
function addNewItem(newItem)
{
    var allItemsStr=localStorage.getItem('allItemsDb');
    var allItems=JSON.parse(allItemsStr);
    allItems.push(newItem);
    allItemsStr=JSON.stringify(allItems);
    localStorage.setItem('allItemsDb',allItemsStr)
}
$(function() {
    $(".add").click(function () {
        var t = $(this).parent().find('input[class*=text_box]');
        t.val(parseInt(t.val()) + 1)
        setTotal();
    })
    $(".min").click(function () {
        var t = $(this).parent().find('input[class*=text_box]');
        t.val(parseInt(t.val()) - 1)
        if (parseInt(t.val()) < 0) {
            t.val(0);
        }
        setTotal();
    })
    function setTotal() {
        var s = 0;
        $("#tab td").each(function () {
            s += parseInt($(this).find('input[class*=text_box]').val())
            * parseFloat($(this).find('span[class*=price]').text());
        });
        $("#total").html(s.toFixed(2));
    }

    setTotal();
})