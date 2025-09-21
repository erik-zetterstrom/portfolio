<script lang="ts">
    import SkillCard from "../SkillCard.svelte";
    import {type MainProperties} from "$lib/server/properties";

    let {mainProperties}: {mainProperties: MainProperties} = $props();
</script>

<div class="flex flex-col">
    <div class="flex flex-col items-center m-5 mt-0">
        {#each mainProperties.skillCardProperties as currentSkillCardProperties}
            <SkillCard skillCardProperties={currentSkillCardProperties}/>
        {/each}
    </div>
</div>