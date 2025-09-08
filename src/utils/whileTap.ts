import { animate, press } from "motion";

export default function whileTap($props: {[key: string]: any}) {
    let $node;
    const init = () => {
        press($node, (element) => {
            animate($node, $props, { duration: 0.1 });
            return () => animate(element, { scale: 1 })
        })
    }
    return (node) => {
        $node = node;
        init();
    }
}