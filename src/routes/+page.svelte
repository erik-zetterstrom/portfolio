<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
	import { type MainProperties } from "$lib/server/properties";
  import Large from "../components/main/Large.svelte";
  import Medium from "../components/main/Medium.svelte";
	import Small from "../components/main/Small.svelte";

	const mainProperties: MainProperties = {
    name: "Erik Zetterström",
    description: "I am a curious, ambitious and knowledge thirsty software developer, cloud architecht and... more!",
    profilePictureSource: "/erikzetterstrom_selfie.png",
    skillCardProperties: [
      {
        title: "Backend Developer",
        body: "I build solid, modular and clean code, preferably in Go or another strongly typed language.",
        imageSource: "/backend.png"
      },
      {
        title: "Cloud Architecht",
        body: "I use Terraform or AWS CDK to spin up cost effective and secure infrastructure.",
        imageSource: "/cloud.png"
      },
      {
        title: "Other Fun Stuff",
        body: "I like learning new things, such as coding in Swift and front end using Svelte.",
        imageSource: "/other.png"
      },
    ]
  };
  const large = new MediaQuery("min-width: 1300px");
  const medium = new MediaQuery("min-width: 768px");
</script>

<div class="flex flex-row bg-background-1">
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