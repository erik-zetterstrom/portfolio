<script lang="ts">

    type Time = {
        year: number;
        month: string;
    }

    function timeString(time: Time | null): string {
        if (time === null) {
            return ""
        }
        return time.month + " " + time.year.toString();
    }

    type TimeInterval = {
        from: Time;
        to: Time | null;
    }
    type TimeLineItemSection = {
        interval: TimeInterval;
        title: string;
        body: string;
    }
    type TimelineItem = {
        title: string;
        sections: TimeLineItemSection[];
    }
    let {title, items}: {title: string, items: TimelineItem[]} = $props();
</script>

<div class="pb-5">
    <h1 class="text-size-cv-1 font-black pb-2 bg-gradient-to-br from-gradient-pink to-gradient-orange bg-clip-text text-transparent">
        {title}
    </h1>
    <ul>
        {#each items as item}
            <li class="">
                <h2 class="text-size-cv-2 font-extrabold pb-1 bg-gradient-to-bl from-gradient-blue from-40% to-gradient-green bg-clip-text text-transparent">{item.title}</h2>
                {#each item.sections as section}
                    <div class="flex justify-between pb-8">
                        <div>
                            <p class="text-size-cv-3 font-bold">{section.title}</p>
                            <p class="text-size-cv-4">{section.body}</p>
                        </div>
                        <div class="flex">
                            <p class="text-size-cv-3 font-bold w-(--interval-part-width) text-end">{timeString(section.interval.from)}</p>
                            <p class="text-size-cv-3 font-bold ml-(--interval-dash-margin) mr-(--interval-dash-margin)"> - </p>
                            <p class="text-size-cv-3 font-bold w-(--interval-part-width) text-start">{timeString(section.interval.to)}</p>
                        </div>
                    </div>
                {/each}
            </li>
        {/each}
    </ul>
</div>