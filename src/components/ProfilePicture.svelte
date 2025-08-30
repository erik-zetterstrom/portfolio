<script lang="ts">
    let alt: string = $props();
</script>

<img class="rounded-full" src="/erikzetterstrom_selfie.png" {alt}>

<style>
    img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
</style>