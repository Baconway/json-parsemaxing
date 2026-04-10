<script lang="ts">
  import Render from "./render.svelte";
  let value = $state(
    '{"I LOVE FRIES" : true, "b": [1, 2, 3, 4, 5], "c": {"d": "e"}}',
  );
  let ShowParsed: boolean = $state(false);

  async function CallParse() {
    const response = await fetch("/api", {
      method: "POST",
      body: $state.snapshot(value),
      headers: {
        "content-type": "text/plain",
      },
    });

    if ((await response.status) == 200) {
      ShowParsed = await response.json();
    }
  }
</script>

<div class="flex justify-center items-center flex-col">
  <h1 class="text-4xl pb-5">Bway's JSON Parser</h1>

  <div class="flex flex-row gap-5">
    <textarea
      class="resize-none w-64 h-64 border-4 border-amber-400 border-dashed"
      bind:value
      onfocus={() => (ShowParsed = false)}
    >
    </textarea>
    <button class="w-12 h-12 bg-amber-400" onclick={() => CallParse()}>a</button
    >
    <div class="w-2 border-4 border-black h-[50vh]"></div>

    {#if ShowParsed}
      <Render />
    {/if}
  </div>
</div>
