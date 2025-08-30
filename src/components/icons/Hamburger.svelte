<script lang="ts">
	import Icon from "./Icon.svelte";

    const svg = `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />`
    const box = 24
    
    export let width: string;
    export let color: string;
</script>

<Icon {svg} {box} {width} {color} class={$$props.class}></Icon>