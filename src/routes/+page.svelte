<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
	import { type MainProperties } from "$lib/server/properties";
  import Large from "../components/main/Large.svelte";
  import Medium from "../components/main/Medium.svelte";
	import Small from "../components/main/Small.svelte";

	const mainProperties: MainProperties = {
    name: "Erik Zetterström",
    profilePictureSource: "/erikzetterstrom_selfie.png",
    skillCardProperties: [
      {
        title: "Backendutveckling",
        body: "Kropp 1",
        imageSource: "/go_gopher.png"
      },
      {
        title: "Molnarkitektur",
        body: "Kropp 2",
        imageSource: "/aws.png"
      },
      {
        title: "Annat kul",
        body: "Kropp 3",
        imageSource: "/svelte_logo.png"
      },
    ]
  };
  const large = new MediaQuery("min-width: 1300px");
  const medium = new MediaQuery("min-width: 768px");
</script>

<div class="flex flex-row">
    <div class="flex-2">
      {#if large.current}
        <Large mainProperties={mainProperties}></Large>
      {:else if medium.current}
        <Medium mainProperties={mainProperties}></Medium>
      {:else}
        <Small mainProperties={mainProperties}></Small>
      {/if}
    </div>
</div>


<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>