<script lang="ts">
	import Icon from "./Icon.svelte";

    const svg = `<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />`
    const box = 24
    
    export let width: string;
    export let color: string;
</script>

<Icon {svg} {box} {width} {color} class={$$props.class}></Icon>