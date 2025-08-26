<script lang="ts">
    type SkillCardProperties = {
        imageSource: string;
        title: string;
        body: string;
    }
    let {skillCardProperties}: {skillCardProperties: SkillCardProperties} = $props();
</script>

<div class="card m-5">
    <div class="card-image-div rounded-t-md p-1.5">
        <img class="card-image" src={skillCardProperties.imageSource} alt={"Bild till " + skillCardProperties.title} />
    </div>
    <div class="card-body p-1.5 rounded-b-md bg-pink-300">
        <h2 class=" text-xl font-bold">{skillCardProperties.title}</h2>
        <p>{skillCardProperties.body}</p>
    </div>
</div>

<style>
    .card {
        flex: 1;
        display: flex;
        flex-direction: column;
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