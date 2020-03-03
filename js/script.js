(() => {

    const rippleEffect = (event) => {

        let target = event.target;

        if (!target) {
            return;
        }

        const cover = document.createElement('span');
        const coverSize = target.offsetWidth;
        const loc = target.getBoundingClientRect();

        const x = event.pageX - loc.left - window.pageXOffset - (coverSize / 2);
        const y = event.pageY - loc.top - window.pageYOffset - (coverSize / 2);

        const pos = `top: ${y}px; left: ${x}px; height: ${coverSize}px; width: ${coverSize}px;`;

        target.appendChild(cover);
        cover.setAttribute('style', pos);
        cover.setAttribute('class', 'ripple-active');

        setTimeout(() => {
            cover.remove();
        }, 2000);
    };

    document.addEventListener('DOMContentLoaded', () => {
        Array.from(document.querySelectorAll('.ripple')).forEach((elem) => {
            elem.addEventListener('click', rippleEffect)
        });
    });

})();

function LoadStyleSheet(fileURL) {
    let link = document.createElement('link');
    link.href = fileURL;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}