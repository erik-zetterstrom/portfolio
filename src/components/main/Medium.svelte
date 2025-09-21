<script lang="ts">
    import SkillCard from "../SkillCard.svelte";
    import {type MainProperties} from "$lib/server/properties";
	import ProfilePicture from "../ProfilePicture.svelte";

    let {mainProperties}: {mainProperties: MainProperties} = $props();
</script>

<div class="flex flex-col">
    <div class="flex mt-10 self-center max-h-72">
        <div class="flex-2 m-5 content-center justify-center flex">
            <ProfilePicture alt={mainProperties.name}></ProfilePicture>
        </div>

        <div class="flex-5 flex flex-col justify-center">
            <h2 class="text-size-medium-1 bg-gradient-to-br from-gradient-pink to-gradient-orange bg-clip-text text-transparent">{mainProperties.name}</h2>
            <p class="text-size-medium-2">{mainProperties.description}</p>
        </div>
    </div>
    <div class="flex justify-evenly m-5 mt-0">
        {#each mainProperties.skillCardProperties as currentSkillCardProperties}
            <SkillCard skillCardProperties={currentSkillCardProperties}/>
        {/each}
    </div>
</div>
