<script lang="ts">
    import { page } from "$app/state";
	import { goto } from "$app/navigation";
    import NavbarItem from "./NavbarItem.svelte";
    import { type Item } from "./NavbarItem.svelte";
    let { items }: { items: ArrayLike<Item>} = $props();
    let isInMainMenu = $derived(page.url.pathname == "/")
</script>

<nav class=" max-h-24 bg-gray-800 p-6 flex justify-center">
    <div class=" flex-1">
        {#if !isInMainMenu}
        <div class="p-2 text-2xl text-blue-200 max-w-16 hover:text-blue-300 active:text-blue-400">
            <button aria-label="Go back to main menu" onclick={() => {
                isInMainMenu = true;
                goto("/")
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>
        </div>   
    {/if}
    </div>
    <div class="hidden lg:flex flex-3 justify-between">
        {#each items as item}
            <NavbarItem {item}/>
        {/each}
    </div>
    <div class=" flex-1"></div>
    <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </div>
</nav>
