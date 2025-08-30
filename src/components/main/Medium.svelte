<script lang="ts">
    import SkillCard from "../SkillCard.svelte";
    import {type MainProperties} from "$lib/server/properties";
	import ProfilePicture from "../ProfilePicture.svelte";

    let {mainProperties}: {mainProperties: MainProperties} = $props();
</script>

<div class="flex flex-col">
    <div class="flex mt-10 mb-0 ml-20 mr-20 max-h-72">
        <div class="flex-2 m-5 content-center justify-center flex">
            <ProfilePicture alt={mainProperties.name}></ProfilePicture>
        </div>

        <h2 style="font-size: 7cqmin;" class="flex-5 self-center text-center">{mainProperties.name}</h2>
    </div>
    <div class="flex justify-evenly m-5 mt-0">
        {#each mainProperties.skillCardProperties as currentSkillCardProperties}
            <SkillCard skillCardProperties={currentSkillCardProperties}/>
        {/each}
    </div>
</div>
