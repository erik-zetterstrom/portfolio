<script lang="ts">
    import { type SkillCardProperties } from "$lib/server/properties";
    let {skillCardProperties}: {skillCardProperties: SkillCardProperties} = $props();
</script>

<div class="flex-1 flex flex-col max-w-75 min-h-75 max-h-100 m-5">
    <div class="flex-1 bg-orange-400 overflow-hidden flex justify-center rounded-t-md p-1.5">
        <img class="card-image object-contain" src={skillCardProperties.imageSource} alt={"Bild till " + skillCardProperties.title} />
    </div>
    <div class="flex-1 p-3 rounded-b-md bg-pink-300">
        <h2 style="font-size: 2cqb;" class="font-bold">{skillCardProperties.title}</h2>
        <p style="font-size: 2cqb;">{skillCardProperties.body}</p>
    </div>
</div>