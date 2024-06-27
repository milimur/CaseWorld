window.onload = function() {
    const accountLink = document.getElementById('account-link');
    const btncompra = document.getElementById('btncompra');
    var toastElement = new bootstrap.Toast(document.getElementById('loginToast'));

    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[name] = value;
        return acc;
    }, {});

    if (cookies.email) {
        accountLink.href = "/userPage/profile/Index.html";
    } else {
        accountLink.href = "/userPage/logIn/Index.html";
        btncompra.disabled = false;
    }

    btncompra.addEventListener('click', function(event) {
        if (!cookies.email) {
            event.preventDefault();
            toastElement.show();
        } else {
            window.location.href = "/buyPage/shippingPage.html";
        }
    });
};

function redirectToFilterPage() {
    window.location.href = '/filterProductPage/filter.html';
}


