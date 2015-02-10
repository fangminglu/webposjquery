
function detailsPropertyMain()
{
    var propertyStr=localStorage.getItem('propertyDb');
    var property=JSON.parse(propertyStr);
    $(document).ready(function()
    {
        detailsProperty(property);
    });
}
function detailsProperty(property)
{
    $('.detailBtn').on('click',function()
    {
       //var name=$(this).closest('tr').find('td').eq(1).text();
        console.log('soshuai');
    });
    //$.each(property,function(i)
    //{
    //    var newRow='<form>'+property[i]+'<input type="text" class="detailPro">'+'</form>';
    //    $('#detailInformation').append(newRow);
    //    console.log(newRow[i])
    //})
}
