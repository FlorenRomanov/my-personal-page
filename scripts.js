document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link, .nav-button');

    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = this.href;

            document.body.classList.add('fade-out');

            setTimeout(function() {
                window.location.href = target;
            }, 500);
        });
    }
});
