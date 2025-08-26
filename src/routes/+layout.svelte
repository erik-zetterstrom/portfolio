<script lang="ts">
    let { children } = $props();
    import "../app.css";
    import Navbar from "../components/Navbar.svelte";
    import { type Item } from "../components/NavbarItem.svelte";

    const navbarItems: Item[] = [
        {
            text: "CV",
            reference: "/cv"
        },
        {
            text: "Github",
            reference: "https://github.com/erik-zetterstrom"
        },
        {
            text: "Linkedin",
            reference: "https://www.linkedin.com/in/erik-zetterström-7211841a1/"
        }
    ]
</script>

<div class=" bg-green-400 maxad">
    <Navbar items={navbarItems}/>
    {@render children()}
</div>