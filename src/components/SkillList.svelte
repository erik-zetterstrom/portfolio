<script lang="ts">
    type Section = {
        category: string;
        skills: string[];
    }

    let {title, sections}: {title: string, sections: Section[]} = $props();
</script>

<div class="flex flex-col items-center">
    <h1>{title}</h1>
    <ul class="">
        {#each sections as section}
            <li class="m-3">
                <p><span class="font-black">{section.category}: </span>{section.skills.join(", ")}</p>
            </li>
        {/each}
    </ul>
</div>


<style>
    @media (min-width: 1600px) {
        h1 {
            width: 50vW;
        }
        li {
            width: 50vw;
        }
    }

    @media (min-width: 768px) and (max-width: 1600px) {
        h1 {
            width: 70vW;
        }
        li {
            width: 70vw;
        }
    }

    @media (max-width: 768px) {
        h1 {
            width: 90vW;
        }
        li {
            width: 90vw;
        }
    }
</style>