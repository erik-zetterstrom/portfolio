<script lang="ts">
    import SkillCard from "../SkillCard.svelte";
    import {type MainProperties} from "$lib/server/properties";

    let {mainProperties}: {mainProperties: MainProperties} = $props();
</script>

<div class="flex flex-col">
    <h2 class="text-size-large-1 font-black m-3 text-center bg-gradient-to-br from-gradient-pink to-gradient-orange bg-clip-text text-transparent">{mainProperties.name}</h2>
    <p class="text-size-large-2 w-250 text-center self-center">{mainProperties.description}</p>
    <div class="flex justify-evenly m-10 mt-3">
        <img class="rounded-full flex-1 max-h-100 max-w-100" src={mainProperties.profilePictureSource} alt={mainProperties.name}>
        {#each mainProperties.skillCardProperties as currentSkillCardProperties}
            <SkillCard skillCardProperties={currentSkillCardProperties}/>
        {/each}
    </div>
</div>