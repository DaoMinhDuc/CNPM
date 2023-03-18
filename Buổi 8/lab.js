$(document).ready(function() {
    var table_list = [{
            id: '1',
            Name: 'SamSung Galaxy S22 ',
            Price: '30tr',
            info: '6,9inch Chip Mediateck',
            Detail: 'Product Deitail',
            Star: '5',
            img: 'imagin1.jpg',
            NSX: 'Samsung',
        },
        {
            id: '21 ',
            Name: 'SamSung Galaxy S22 ',
            Price: '30tr',
            info: '6,9inch Chip Mediateck',
            Detail: 'Product Deitail',
            Star: '5',
            img: 'imagin1.jpg',
            NSX: 'Samsung',
        },
        {
            id: '3',
            Name: 'SamSung Galaxy S22 ',
            Price: '30tr',
            info: '6,9inch Chip Mediateck',
            Detail: 'Product Deitail',
            Star: '5',
            img: 'imagin1.jpg',
            NSX: 'Samsung',
        },
    ]
    for (i = 0; i < table_list.length; i++)
        var item = table_list[i]; {
        $("table").append(`< tr > 
            <td> ${item.id} </td> 
            <td> ${item.Name}</td>
            <td>${item.Price}</td>
            <td>${item.info} </td>
            <td>${ item.Detail}</td>
            <td>${ item.Star }</td>
            <td>${ item.img} </td>
            <td>${ item.NSX }</td>
            </tr>`);
    }
})