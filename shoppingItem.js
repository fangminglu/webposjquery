
function allItem()
{
    return [
        {
            sort:'饮料',
            barcode: 'ITEM000000',
            name: '可口可乐',
            price: 3.00,
            unit: '瓶',
            total:100
        },
        {
            sort:'饮料',
            barcode: 'ITEM000001',
            name: '雪碧',
            price: 3.00,
            unit: '瓶',
            total:100
        },
        {
            sort:'水果',
            barcode: 'ITEM000002',
            name: '苹果',
            price: 5.50,
            unit: '斤',
            total:100
        },
        {
            sort:'水果',
            barcode: 'ITEM000003',
            name: '荔枝',
            price: 15.00,
            unit: '斤',
            total:100
        },
        {
            sort:'生活用品',
            barcode: 'ITEM000004',
            name: '电池',
            price: 2.00,
            unit: '个',
            total:100
        },
        {
            sort:'食品',
            barcode: 'ITEM000005',
            name: '方便面',
            price: 4.50,
            unit: '袋',
            total:100
        }
    ];
}
function loadPromotions()
{
    return [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
    ]
}
function loadAllItems()
{
    var allItems=allItem();
    var allItemStr=JSON.stringify(allItems);
    localStorage.setItem('allItemsDb',allItemStr);
}
function loadProperty()
{
    var property=['商品名称：','商品数量：','单价（元）：','单位：'];
    var propertyStr=JSON.stringify(property);
    localStorage.setItem('propertyDb',propertyStr);
}
function figureCount()
{
    var allItemsStr=localStorage.getItem('allItemsDb');
    var allItems=JSON.parse(allItemsStr);
    var list = {};
    for(var i in allItems)
    {
        var name = allItems[i].name;
        list[name] =0;
    }
    localStorage.lists = JSON.stringify(list);
}
