$(document).ready(function() {
    var image_list = [{
            img: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/44/292280/lenovo-ideapad-gaming-3-15arh7-r5-82sb007lvn-thumb-600x600.jpg',
            name: 'san pham 1',
            price: 10000,
            manufaturor: 'cong ty 1'
        },
        {
            img: 'link 2',
            name: 'san pham 2',
            price: 10000,
            manufaturor: 'cong ty 2'
        },
        {
            url: 'link 3',
            name: 'san pham 3',
            price: 10000,
            manufaturor: 'cong ty 3'
        },
        {
            url: 'link 4',
            name: 'san pham 4',
            price: 10000,
            manufaturor: 'cong ty 4'
        }
    ]
    for (i = 0; i < image_list.length; i++) {
        var item = image_list[i];
        $("#image-container").append("<div><img src=" +
            item.img + " / > < p > " +
            item.name + "</><p>hang san xuat:" +
            item.manufaturor +
            "</p><p>gia: " + item.price + "Dong </p></div>");
        $("img").addClass("image-content");
    }
})