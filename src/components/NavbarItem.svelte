<script lang="ts">
    export type Item = {
        reference: string;
        text: string;
    }
    let {item}: {item: Item} = $props();
</script>

<a href={item.reference} class=" p-2 text-2xl text-blue-200 hover:bg-gray-700 hover:rounded-lg active:bg-gray-600">
    {item.text}
</a>