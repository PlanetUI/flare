function getSettings(settings = {}) {
    return { scale: 1, max: 15, reverse: false, ...settings };
}

const TRANSITION_MS = 300;

/**
 * @param {HTMLDivElement} node
 * @param {{} | undefined} settingsObj
 */
export default function tilt(node, settingsObj) {
    const { width, height, left, top } = node.getBoundingClientRect();
    let settings = getSettings(settingsObj);
    let reverse = settings.reverse ? -1 : 1;

    /**
     * @param {{ clientX: number; clientY: number; }} e
     */
    function onMouseMove(e) {
        const percX = (e.clientX - left) / width;
        const percY = (e.clientY - top) / height;

        const { max, scale } = settings;
        const twiceMax = max * 2;
        const tiltX = max - percX * twiceMax;
        const tiltY = percY * twiceMax - max;

        node.style.transform = `perspective(${1000}px) ` +
            `rotateX(${reverse * tiltY}deg) ` +
            `rotateY(${reverse * tiltX}deg) ` +
            `scale3d(${Array(3).fill(scale).join(', ')})`;
    }

    /**
     * @type {string | number | NodeJS.Timeout | undefined}
     */
    let transitionId;
    function smoothTransition() {
        clearTimeout(transitionId);
        node.style.willChange = 'transform';
        node.style.transition = `${TRANSITION_MS}ms`;
        transitionId = setTimeout(() => node.style.transition = '0s', TRANSITION_MS);
    }

    function onMouseLeave() {
        smoothTransition();
        node.style.transform = `perspective(${1000}px) ` +
            `rotateX(0deg) ` +
            `rotateY(0deg) ` +
            `scale3d(1, 1, 1)`;
    }

    function onMouseEnter() {
        smoothTransition();
        node.style.willChange = "transform";
    }

    node.addEventListener('mousemove', onMouseMove);
    node.addEventListener('mouseleave', onMouseLeave);
    node.addEventListener('mouseenter', onMouseEnter);

    return {
        destroy() {
            node.removeEventListener('mousemove', onMouseMove);
            node.removeEventListener('mouseleave', onMouseLeave);
            node.removeEventListener('mouseleave', onMouseEnter);
        },
        /**
         * @param {{} | undefined} settingsObj
         */
        update(settingsObj) {
            settings = getSettings(settingsObj);
            reverse = settings.reverse ? -1 : 1;
        }
    }
}