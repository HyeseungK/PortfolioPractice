<script>
    document.addEventListener('DOMContentLoaded', function () {
        var toggleButton = document.getElementById('toggle-toc');
        var toc = document.getElementById('table-of-contents');
        var submenus = document.querySelectorAll('.submenu');

        toggleButton.addEventListener('click', function () {
            toc.classList.toggle('visible');
        });

        submenus.forEach(function (submenu) {
            submenu.addEventListener('click', function () {
                submenu.classList.toggle('visible');
            });
        });
    });
</script>
