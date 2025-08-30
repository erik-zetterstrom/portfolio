<script lang="ts">
    import SkillCard from "../SkillCard.svelte";
    import {type MainProperties} from "$lib/server/properties";

    let {mainProperties}: {mainProperties: MainProperties} = $props();
</script>

<div class="flex flex-col">
    <h2 style="font-size: 7vw;" class=" m-20 mb-15 flex-auto self-center text-6xl">{mainProperties.name}</h2>
    <div class="flex justify-evenly m-10">
        <div class="flex-1 content-center">
            <img class="rounded-full flex-1" src={mainProperties.profilePictureSource} alt={mainProperties.name}>
        </div>
        <div class="flex-3 flex justify-evenly">
            {#each mainProperties.skillCardProperties as currentSkillCardProperties}
                <SkillCard skillCardProperties={currentSkillCardProperties}/>
            {/each}
        </div>
    </div>
</div>