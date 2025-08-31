<script lang="ts">
    type TimelineItem = {
        time: string;
        title: string;
        subtitle: string;
        body: string;
    }

    let {title, items}: {title: string, items: TimelineItem[]} = $props();
</script>

<div class="flex flex-col items-center">
    <h1>{title}</h1>
    <ul class="">
        {#each items as item}
            <li class="m-3">
                <div class="flex">
                    <p class="flex-1 text-pink-500">{item.title}</p>
                    <p class="flex-1 text-end text-blue-400">{item.time}</p>
                </div>
                <p class="italic">{item.subtitle}</p>
                {#if item.body.length > 0}
                    <p>{item.body}</p>
                {/if}
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