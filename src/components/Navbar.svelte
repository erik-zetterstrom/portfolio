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
    let showDropDown = $state(false)
</script>

<div class="flex flex-col sticky top-0">
    <nav class="h-24 bg-background-2 p-6 flex justify-center items-center">
        <div class="flex-1">
            {#if !isInMainMenu}
                <div class="p-2">
                    <button aria-label="Go back to main menu" onclick={() => {
                        isInMainMenu = true;
                        goto("/")
                    }}>
                        <LeftArrow color="var(--text-color)" width="1.5" class="size-8"></LeftArrow>
                    </button>
                </div>   
            {/if}
        </div>
        <div class="flex-3">
            {#if !isInMainMenu}
                <h2 class="max-h-8 min-w-44 text-2xl text-center">CV</h2>
            {:else}
                <div class="md:hidden flex items-center justify-center max-h-24 pl-5 pr-5">
                    <div class="h-14 min-h-14 w-14 min-w-14 m-5 items-center justify-center flex">
                        <ProfilePicture alt="A small profile picture."></ProfilePicture>
                    </div>
                    <h2 class="max-h-8 min-w-58 text-2xl">Erik Zetterström</h2>
                </div>
                <div class="hidden md:flex justify-between">
                    {#each items as item}
                        <NavbarItem {item}/>
                    {/each}
                </div>
            {/if}
        </div>
        <div class="flex-1">
            <div class="flex md:hidden justify-end">
                <button type="button" onclick={() => {
                    showDropDown = !showDropDown
                }}>
                    <Hamburger color="var(--text-color)" width="1.5" class="size-8"></Hamburger>
                </button>
            </div>
        </div>
    </nav>
    {#if showDropDown}
        <button class="button-area md:hidden self-end bg-background-2 flex flex-col absolute top-24"
        onmouseleave={() => {
            showDropDown = false
        }}
        onclick={() => {
            showDropDown = false
        }}
        >
            {#each items as item}
                <NavbarItem {item} />
            {/each}
        </button>
    {/if}
</div>
