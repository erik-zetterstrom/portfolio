<script lang="ts">
    import { page } from "$app/state";
	import { goto } from "$app/navigation";
    import NavbarItem from "./NavbarItem.svelte";
    import { type Item } from "./NavbarItem.svelte";
	import ProfilePicture from "./ProfilePicture.svelte";
	import LeftArrow from "./icons/LeftArrow.svelte";
	import Hamburger from "./icons/Hamburger.svelte";
    let { items }: { items: Item[]} = $props();
    let isInMainMenu = $derived(page.url.pathname == "/")
</script>

<nav class="h-24 bg-gray-800 p-6 flex justify-center items-center">
    <div class=" flex-1">
        {#if !isInMainMenu}
            <div class="p-2 text-2xl text-blue-200 max-w-16 hover:text-blue-300 active:text-blue-400">
                <button aria-label="Go back to main menu" onclick={() => {
                    isInMainMenu = true;
                    goto("/")
                }}>
                    <LeftArrow color="red" width="1.5" class="size-6"></LeftArrow>
                </button>
            </div>   
        {/if}
    </div>
    <div class="flex-3">
        <div class="md:hidden flex items-center max-h-24 justify-evenly">
            <div class="h-14 w-14 m-5 items-center justify-center flex">
                <ProfilePicture alt="Liten profilbild."></ProfilePicture>
            </div>
            <h2 class="text-white text-2xl">Erik Zetterström</h2>
        </div>
        <div class="hidden md:flex justify-between">
            {#each items as item}
                <NavbarItem {item}/>
            {/each}
        </div>
    </div>
    <div class="flex-1">
        <div class="flex md:hidden justify-end">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <Hamburger color="green" width="1.5" class="size-6"></Hamburger>
            </button>
        </div>
    </div>
</nav>