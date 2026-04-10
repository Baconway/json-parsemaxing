<script lang="ts">
  import { ProcessTypes } from "$lib";
  let content = $state(`<div>`);

  const onComponentLoad = async () => {
    const response = await fetch("/api", {
      method: "GET",
    });
    const a: Record<string, unknown> = await response.json();

    for (let index = 0; index < Object.keys(a).length; index++) {
      const element: string = Object.keys(a)[index];
      ProcessTypes(a[element]);
    }
  };

  onComponentLoad();
</script>

<div>
  {["a", "b"]}
  <p>This is the object head</p>
  <p class="pl-5">This is the child</p>
  <p class="pl-5">This is the child</p>
  <p class="pl-10">This is the descendant</p>
  <p class="pl-10">This is the descendant</p>
  <p class="pl-10">This is the descendant</p>
</div>
