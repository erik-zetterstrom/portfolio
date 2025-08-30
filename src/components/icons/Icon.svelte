<script lang="ts">
    export let svg: string;
    export let box: number;
    export let color: string;
    export let width: string;
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class={$$props.class}
    viewBox="0 0 {box} {box}"
    stroke-width={width}
    stroke={color}
>
        {@html svg}
</svg>