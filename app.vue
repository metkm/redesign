<script setup lang="ts">
const countries = ['US', 'UK']
const country = ref(countries[0])

const joined = ref(false)
</script>

<template>
  <main class="relative gap-4 flex flex-wrap justify-between background bg-cover min-h-screen p-8">
    <div class="absolute inset-0 from-black/70 lg:from-black via-black/70 lg:via-black/60 lg:to-black to-black/70 bg-linear-to-l" />

    <div class="flex-1" />

    <div class="flex flex-col gap-4 z-10 relative w-max">
      <VIcon class="max-w-lg mx-auto" />

      <section class="flex flex-col justify-center max-w-lg mx-auto w-full">
        <div class="flex flex-col gap-4">
          <UButtonGroup class="grow">
            <USelectMenu
              v-model="country"
              :items="countries"
              variant="soft"
            />
            <UInput
              placeholder="enter your username"
              variant="soft"
              class="grow"
            />
          </UButtonGroup>

          <button
            class="font-medium flex flex-col justify-between gap-1 items-start py-2 px-3 bg-(--ui-primary) hover:bg-(--ui-primary)/50 rounded-(--ui-radius) transition-colors bg-[url(/thumbnail.webp)] h-44 bg-contain bg-right bg-no-repeat"
            :class="{ '!bg-green-600': joined }"
            @click="joined = !joined"
          >
            <div>
              <p class="text-xl">
                {{ joined ? "Joined" : "Join" }} next game
              </p>

              <div class="flex items-center gap-2 mb-1 text-sm">
                <p class="bg-white px-2 text-(--ui-primary)">
                  Free for all
                </p>
                <p>World</p>
              </div>
            </div>

            <div class="text-left opacity-85">
              <p>25/30</p>
              <p>50s</p>
            </div>
          </button>

          <div class="grid md:grid-cols-2">
            <UButton class="justify-center">
              Create lobby
            </UButton>
            <UButton class="justify-center">
              Join lobby
            </UButton>
          </div>
        </div>

        <div class="h-0.5 bg-(--ui-text-dimmed) rounded-full my-4 mx-12" />

        <UButton>Join with Discord</UButton>
        <UButton>Singleplayer</UButton>
        <UButton>Settings</UButton>
        <UButton>Instructions</UButton>
        <UButton>Language</UButton>
      </section>

      <article class="self-end z-10 bg-(--ui-bg)/10 rounded-(--ui-radius) divide-y-2 divide-black/20 font-medium text-sm mx-auto w-full max-w-lg">
        <div class="flex gap-2 items-center p-3">
          <UIcon
            name="i-fluent-megaphone-loud-20-regular"
            class="size-6 text-white"
          />
          <p>Announcements</p>
        </div>

        <section class="p-4">
          <p>V22 Meta is back!</p>
        </section>
      </article>

      <div class="flex flex-wrap items-center gap-4 gap-y-2 text-(--ui-text-dimmed) font-medium mt-auto">
        <p>Wiki</p>
        <p>Join the discord</p>

        <div class="hidden lg:block h-full w-0.5 bg-(--ui-text-dimmed) rounded-full" />

        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Advertise</p>

        <p>© 2025 OpenFront ™</p>
      </div>
    </div>

    <div class="flex-1" />
  </main>
</template>

<style>
.background {
  background-image: url("/background.webp");
}
</style>
