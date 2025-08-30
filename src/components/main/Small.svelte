<script lang="ts">
    import SkillCard from "../SkillCard.svelte";
    import {type MainProperties} from "$lib/server/properties";

    let {mainProperties}: {mainProperties: MainProperties} = $props();
</script>

<div class="flex flex-col">
    <!-- <div class="flex m-5 mb-0 max-h-72">
        <div class="flex-2 m-7 content-center justify-center flex">
            <img class="rounded-full" src={mainProperties.profilePictureSource} alt={mainProperties.name}>
        </div>

        <h2 style="font-size: 8cqmin;" class="flex-5 self-center text-center">{mainProperties.name}</h2>
    </div> -->
    <div class="flex flex-col items-center m-5 mt-0">
        {#each mainProperties.skillCardProperties as currentSkillCardProperties}
            <SkillCard skillCardProperties={currentSkillCardProperties}/>
        {/each}
    </div>
</div>

<style>
    img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
</style>