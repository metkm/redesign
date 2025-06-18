<script setup lang="ts">
const countries = ["US", "UK"];
const country = ref(countries[0]);

const joined = ref(false);
</script>

<template>
  <main class="flex justify-between background bg-cover min-h-screen p-8">
    <div class="absolute inset-0 to-black bg-linear-to-l" />

    <div class="flex flex-col z-10 relative">
      <VIcon class="max-w-lg" />

      <section class="flex flex-col justify-center grow max-w-lg">
        <div class="flex flex-col gap-4">
          <UButtonGroup class="grow">
            <USelectMenu v-model="country" :items="countries" variant="soft" />
            <UInput placeholder="enter your username" variant="soft" class="grow" />
          </UButtonGroup>

          <button
            class="font-medium flex flex-col gap-1 items-start py-2 px-3 hover:bg-black/50 rounded-(--ui-radius) transition-colors"
            :class="{ '!bg-(--ui-primary)': joined }"
            @click="joined = !joined"
          >
            <p class="text-xl">{{ joined ? "Joined" : "Join" }} next game</p>

            <div class="flex items-center gap-2 mb-1">
              <p class="bg-white px-2 text-sm text-(--ui-primary)">Free for all</p>
              <p>World</p>
            </div>
          </button>

          <div class="grid grid-cols-2">
            <UButton block>Create lobby</UButton>
            <UButton block>Join lobby</UButton>
          </div>
        </div>

        <div class="h-0.5 bg-neutral-800 rounded-full my-4 mx-12" />

        <UButton>Singleplayer</UButton>
        <UButton>Settings</UButton>
        <UButton>Instructions</UButton>
        <UButton>Language</UButton>
      </section>

      <div class="flex items-center gap-4 text-(--ui-text-dimmed) font-medium">
        <p>Wiki</p>
        <p>Join the discord</p>

        <div class="h-full w-0.5 bg-neutral-800 rounded-full" />

        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Advertise</p>

        <p>© 2025 OpenFront ™</p>
      </div>
    </div>

    <article class="self-end z-10 bg-(--ui-bg)/50 rounded-(--ui-radius) divide-y-2 divide-black/20 font-medium">
      <div class="flex gap-2 items-center p-4">
        <UIcon name="i-fluent-megaphone-loud-20-regular" class="size-6 text-white" />
        <p>Announcements</p>
      </div>

      <section class="p-4">
        <p>V22 Meta is back!</p>
      </section>
    </article>
  </main>
</template>

<style>
.background {
  background-image: url("/background.webp");
}
</style>
