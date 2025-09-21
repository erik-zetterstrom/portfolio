<script lang="ts">
    type Section = {
        emoji: string;
        category: string;
        skills: string[];
    }

    let {title, sections}: {title: string, sections: Section[]} = $props();
</script>

<div class="pb-5">
    <h1 class="text-size-cv-1 font-black bg-gradient-to-br from-gradient-pink to-gradient-orange bg-clip-text text-transparent">{title}</h1>
    <ul>
        {#each sections as section}
            <li class="pb-8">
                <p class="text-size-cv-3">{#if section.emoji.length > 0}
                    {section.emoji}&nbsp;
                {/if}<span class="bg-gradient-to-bl from-gradient-blue from-40% to-gradient-green bg-clip-text text-transparent">{section.category}:</span>&nbsp;{section.skills.join(", ")}</p>
            </li>
        {/each}
    </ul>
</div>
