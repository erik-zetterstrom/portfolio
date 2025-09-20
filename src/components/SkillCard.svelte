<script lang="ts">
    import { type SkillCardProperties } from "$lib/server/properties";
    let {skillCardProperties}: {skillCardProperties: SkillCardProperties} = $props();
</script>

<div class="flex-1 flex flex-col max-w-75 min-h-75 max-h-100 m-5">
    <div class="flex-1 bg-foreground-1 overflow-hidden flex justify-center rounded-t-xl p-1.5">
        <img class="object-contain" src={skillCardProperties.imageSource} alt={"Bild till " + skillCardProperties.title} />
    </div>
    <div class="flex-1 p-3 rounded-b-xl bg-foreground-2">
        <h2 style="font-size: 1.75cqb;" class="font-bold">{skillCardProperties.title}</h2>
        <p style="font-size: 1.75cqb;">{skillCardProperties.body}</p>
    </div>
</div>