<script lang="ts">
  let value = $state("I LOVE FRIES");

  function AttemptParse(parsingData: string) {
    try {
      JSON.parse(parsingData);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.log(error.name, error.message);
      }
    }
  }
</script>

<h1 class="text-4xl">I COOK FRIES</h1>

<textarea
  class=" resize-none border-4 border-amber-400 border-dashed"
  bind:value
>
</textarea>

<button class="w-12 h-12 bg-amber-400" onclick={AttemptParse(value)}>a</button>
