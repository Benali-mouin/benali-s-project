$(document).ready(function() {
    var cart = [];
    var totalPrice = 0

    function updateCart() {
        $('.cart-count').text(cart.length)
        $('.cart-items').empty()
        totalPrice = 0

        cart.forEach(item => {
            $('.cart-items').append(`<li>${item.name} - $${item.price}</li>`)
            totalPrice += parseFloat(item.price)
        })

        $('.total-price').text(`Total: $${totalPrice.toFixed(2)}`)
    }

    $('.add-to-cart').click(function() {
        var productCard = $(this).closest('.product-card')
        var productName = productCard.data('name')
        var productPrice = productCard.data('price')

        cart.push({ name: productName, price: productPrice })
        updateCart();
        alert(`${productName} has been added to your cart!`)
    });

    $('.cart-icon').click(function() {
        $('.cart-modal').fadeIn();
    });

    $('.close-modal').click(function() {
        $('.cart-modal').fadeOut();
    });

    $(window).click(function(event) {
        if ($(event.target).hasClass('cart-modal')) {
            $('.cart-modal').fadeOut();
        }
    });
});