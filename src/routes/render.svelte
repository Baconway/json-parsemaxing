<script lang="ts">
  async function GetParsed() {
    const response = await fetch("/api", {
      method: "GET",
    });

    const a = await response.json();
    return undefined;
  }
</script>

<div>
  {GetParsed()}
  <p>This is the object head</p>
  <p class="pl-5">This is the child</p>
  <p class="pl-5">This is the child</p>
  <p class="pl-10">This is the descendant</p>
  <p class="pl-10">This is the descendant</p>
  <p class="pl-10">This is the descendant</p>
</div>
