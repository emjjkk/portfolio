<script setup>
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-vue-next"
import { Button } from "./components/ui/button"
</script>

<template>
  <main class="w-full min-h-screen main-bg">
    <main class="w-full min-h-screen flex items-center bg-gradient-to-tr from-black to-black/50">
      <div class="mx-auto w-full max-w-5xl py-5 px-5 text-neutral-50">
        <h1 class="text-3xl md:text-[2.7rem]/[1.1] mb-5">I'm Emmanuel Alabi, a software developer with a passion for
          aesthetic and
          functional web and mobile applications delivered fast.</h1>
        <div class="flex items-center gap-2 mb-5 md:mb-12">
          <Button variant="outline" size="default" class="bg-black border-neutral-500 hover:bg-neutral-500">See Resume</Button>
          <Button variant="outline" size="icon" class="bg-black border-neutral-500 hover:bg-neutral-500">
            <Mail class="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" class="bg-black border-neutral-500 hover:bg-neutral-500">
            <Github class="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" class="bg-black border-neutral-500 hover:bg-neutral-500">
            <Linkedin class="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" class="bg-black border-neutral-500 hover:bg-neutral-500">
            <Instagram class="w-4 h-4" />
          </Button>
        </div>
        <div class="md:flex gap-10 mb-5">
          <div class="md:w-1/2 md:mb-0 mb-5">
            <h3 class="text-lg font-semibold mb-3">Selected Projects</h3>
            <!-- Project -->
            <div class="flex items-center gap-3 py-1">
              <div class="w-12 h-12 bg-neutral-300 rounded-md"></div>
              <div class="flex-1 flex justify-between items-center py-2 gap-3">
                <div class="max-w-[80%]">
                  <p class="text-md/[0.8]">Youtube Downloader</p>
                  <p class="text-sm/[1.1] font-light text-neutral-300"><span class="text-neutral-500">Python, Flask
                    </span>Youtube downloader written in Flask with bot check pypasses</p>
                </div>
                <Button variant="default" size="sm" class="text-black bg-white hover:bg-neutral-500">View</Button>
              </div>
            </div>
            <!-- Project -->
            <div class="flex items-center gap-3 py-1">
              <div class="w-12 h-12 bg-neutral-300 rounded-md"></div>
              <div class="flex-1 flex justify-between items-center py-2 gap-3">
                <div class="max-w-[80%]">
                  <p class="text-md/[0.8]">Fluent</p>
                  <p class="text-sm/[1.1] font-light text-neutral-300"><span class="text-neutral-500">NextJS, Supabase
                    </span>Social blogging platform and content management system</p>
                </div>
                <Button variant="default" size="sm" class="text-black bg-white hover:bg-neutral-500">View</Button>
              </div>
            </div>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-lg font-semibold mb-6">Recent Blog Posts</h3>
            <div class="my-2 text-[1rem]/[1.1] py-0 pl-3 border-l border-neutral-700 mb-4">AI, Big Tech, and What
              Happens After the Next Billion Devs Come Online</div>
            <div class="my-2 text-[1rem]/[1.1] py-0 pl-3 border-l border-neutral-700 mb-4">When Startups Become Cults:
              The Psychology Behind Engineering Evangelism</div>
            <div class="my-2 text-[1rem]/[1.1] py-0 pl-3 border-l border-neutral-700 mb-4">Leapfrogging the West: How
              Africa Is Skipping Credit Cards, Cars, and Campus Degrees</div>
          </div>
        </div>
      </div>
    </main>
  </main>

</template>
