<script lang="ts">
    export type Item = {
        reference: string;
        text: string;
    }
    let {item}: {item: Item} = $props();
</script>

<a href={item.reference} class="p-2">
    {item.text}
</a>