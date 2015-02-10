
function addPrototypeMain()
{
    $(document).ready(function()
    {
        $('#savePrototype').click(function()
        {
            addPrototype();
        });
    })
}
function addPrototype()
{
    var propertyStr=localStorage.getItem('propertyDb');
    var property=JSON.parse(propertyStr);
    var inputs=document.getElementsByName('newPrototypeName');
    var name=inputs[0].value+":";
    property.push(name);
    propertyStr=JSON.stringify(property);
    property=localStorage.setItem('propertyDb',propertyStr);
    $.alert('添加成功')
}
