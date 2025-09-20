<script lang="ts">
    type Section = {
        category: string;
        skills: string[];
    }

    let {title, sections}: {title: string, sections: Section[]} = $props();
</script>

<div class="pb-5">
    <h1 class="text-cv-1">{title}</h1>
    <ul>
        {#each sections as section}
            <li class="pt-3">
                <p class="text-cv-3">{section.category}:&nbsp;{section.skills.join(", ")}</p>
            </li>
        {/each}
    </ul>
</div>
