<script lang="ts">
    import { type SkillCardProperties } from "$lib/server/properties";
    let {skillCardProperties}: {skillCardProperties: SkillCardProperties} = $props();
</script>

<div class="card m-5">
    <div class="card-image-div rounded-t-md p-1.5">
        <img class="card-image" src={skillCardProperties.imageSource} alt={"Bild till " + skillCardProperties.title} />
    </div>
    <div class="card-body p-2 rounded-b-md bg-pink-300">
        <h2 style="font-size: 2cqb;" class="font-bold">{skillCardProperties.title}</h2>
        <p style="font-size: 2cqb;">{skillCardProperties.body}</p>
    </div>
</div>

<style>
    .card {
        flex: 1;
        display: flex;
        flex-direction: column;
        max-width: 300px;
        min-height: 300px;
    }
    .card-image-div {
        background-color: orange;
        flex: 2 2;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .card-image {
        min-height: 200px;
        object-fit: contain;
    }
    .card-body {
        flex: 1 1;
        height: 100%;
        width: 100%;
    }
</style>
<!-- <div class="flex-1 m-5 card bg-amber-500 shadow-sm">
    <figure class="m-3 max-h-48 max-w-48">
        <img src={skillCardProperties.imageSource} alt={skillCardProperties.title}>
    </figure>
    <div class="card-body bg-pink-300">
        <h2 class="card-title">{skillCardProperties.title}</h2>
        <p>{skillCardProperties.body}</p>
    </div>
</div> -->