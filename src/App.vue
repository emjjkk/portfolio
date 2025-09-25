<script setup>
  import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-vue-next"
  import { Button } from "./components/ui/button"
</script>

<template>
  <main class="w-full min-h-screen main-bg">
    <main class="w-full min-h-screen flex md:items-center bg-gradient-to-tr from-black to-black/50">
      <div class="mx-auto w-full max-w-xl py-5 md:py-24 px-5 text-neutral-50">
        <h1 class="text-xl md:text-4xl/[1.1] mb-1 flex items-center gap-1">Emmanuel Alabi</h1>
        <h1 class="text-lg md:text-2xl/[1.1] mb-5 opacity-80 mb-5">software developer</h1>
        <p class="text-md mb-5">Heyo, I'm a college student and software developer based for now in Rwanda, and I'm
          currently focusing on full-stack web development. I'm familiar with Javascript- (NextJS, Astro, Remix, etc)
          and Python- (Flask, Django) based frameworks for web development. I can also build cross-platform mobile apps
          with React Native and other things like discord bots, chrome extensions, and tampermonkey scripts.</p>
        <span class="flex items-center text-xs gap-3 flex-wrap mb-8 md:mb-18">
          <a href="mailto:alabiemmanuel029@gmail.com" class="text-sm border-b pb-1 mb-1 hover:opacity-80 hover:text-red-500">Email me</a>
          <a href="https://github.com/emjjkk" class="text-sm border-b pb-1 mb-1 hover:text-red-500">Github</a>
          <a href="https://linkedin.com/in/emjjkk" class="text-sm border-b mb-1 pb-1 hover:text-red-500">Linkedin</a>
          <a href="https://instagram.com/e.mjjkk" class="text-sm border-b mb-1 pb-1 hover:text-red-500">Instagram</a>
        </span>
        <h2 class="text-sm text-right w-full pb-1 border-b text-neutral-700 border-neutral-700 mb-5">Projects</h2>
        <a href="https://dreamweaverdiscord.vercel.app">
          <div class="flex items-center justify-between group">
            <div class="mb-1 items-center flex gap-4">
              <img src="https://cdn.discordapp.com/app-icons/1417683739580039208/a32900f495e4d35e0ba091f3a73f7720.png"
                class="w-16 h-16 rounded-md">
              <div>
                <p class="text-sm/[1.0] md:mb-2">Dreamweaver</p>
                <p class="text-sm/[1.0] md:mb-2">AI Art generation discord bot powered Qwen-Image</p>
                <p class="text-sm/[1.0] opacity-80">Typescript, Vercel, Huggingface Inference</p>
              </div>
            </div>
            <ArrowUpRight class="group-hover:text-red-500"/>
          </div>
        </a>

      </div>
    </main>
  </main>

</template>