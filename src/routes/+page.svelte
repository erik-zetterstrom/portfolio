<script lang="ts">
	import SkillCard from "../components/SkillCard.svelte";

	
</script>

<div class="flex flex-row">
    <div class="flex-2">
      <div class="flex flex-col">
        <h2 class=" m-20 flex-auto self-center text-6xl">Erik Zetterström</h2>
        <div class="flex justify-between m-5">
          <div class="flex-2 flex justify-between m-5">
            <SkillCard skillCardProperties={{title: "Backendutveckling", body: "Kroppen till kort 1", imageSource: "/go_gopher.png"}} />
            <SkillCard skillCardProperties={{title: "Moln arkitektur", body: "Kroppen till kort 2", imageSource: "/aws.png"}} />
            <SkillCard skillCardProperties={{title: "Annat kul", body: "Kroppen till kort 3", imageSource: "/svelte_logo.png"}} />
          </div>
          <div class="flex-1 m-5 content-center">
            <img class="rounded-full flex-1" src="/erikzetterstrom_selfie.png" alt="Erik Zetterström">
          </div>
        </div>
      </div>
    </div>
</div>


<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>