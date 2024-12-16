<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, watch } from "vue";
import _ from "lodash";
import { differenceTime } from "./diferenceTime";
import { RepoUser, User } from "./interfaces";

//Estado 1
const responseData = ref<User | null>(null);
const repoUser = ref<RepoUser[] | null>(null);
//Estado cambiante
const watchRepo = ref<RepoUser[] | null>(null);
const watchData = ref<User | null>(null);

const isSearch = ref<boolean>(false);
const username = ref<string>("");
const num = ref<number>(0);
const all = ref<boolean>(false);

const handleSubmit = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username.value || "github"}`
    );
    const responseRepos = await axios.get(response.data.repos_url);
    if (num.value == 0) {
      responseData.value = response.data;
      repoUser.value = responseRepos.data;
      num.value++;
    }
    if (isSearch.value) {
      watchData.value = response.data;
      watchRepo.value = responseRepos.data;
    }
  } catch (error) {
    console.error("error");
  }
};

onMounted(async () => {
  await handleSubmit();
});

const deboundSubmit = _.debounce(handleSubmit, 500);
watch(username, () => {
  if (username.value === "") {
    isSearch.value = false;
  } else {
    isSearch.value = true;
  }
  deboundSubmit();
});

const showData = () => {
  handleSubmit();
  responseData.value = watchData.value;
  repoUser.value = watchRepo.value;
  isSearch.value = false;
};

const showAllRepository = () => {
  all.value = true;
};
</script>

<template>
  <main class="font-vietman bg-slate-800 relative">
    <img
      class="w-full object-cover h-48 xs:h-60"
      src="/bg_github-profile.png"
      alt="background-github"
    />
    <section class="absolute text-center inset-0 m-auto xs:mt-5">
      <form @submit.prevent="handleSubmit" class="flex justify-center">
        <button
          class="bg-slate-800 pl-3 xs:rounded-tl-lg xs:rounded-bl-lg"
          @click="showData"
        >
          <img src="/Search.svg" />
        </button>
        <input
          class="bg-slate-800 placeholder:text-slate-600 placeholder:text-md text-slate-300 p-3 outline-none w-96 xs:rounded-tr-lg xs:rounded-br-lg"
          placeholder="username"
          type="text"
          v-model="username"
        />
      </form>
      <!-- CUADRO DE RESULTADO -->
      <div
        class="hover:bg-slate-700/70 bg-slate-800/70 xs:mt-2 inline-flex items-center cursor-pointer w-full xs:w-96 xs:rounded-lg p-3"
        v-if="watchData && isSearch"
        @click="showData"
      >
        <img class="h-10 w-10" :src="watchData.avatar_url" />
        <div class="ml-4 flex flex-col flex-wrap">
          <p class="text-left">{{ watchData?.login }}</p>
          <p class="text-left font-thin text-sm">{{ watchData?.name }}</p>
        </div>
      </div>
    </section>
    <section class="flex items-center justify-center lg:m-auto xs:max-w-5xl">
      <!-- DATA FINAL -->
      <section v-if="responseData" class="relative w-full">
        <div
          class="absolute position xs:left-5 left-24 border-8 h-36 w-36 border-slate-800 rounded-2xl"
        >
          <img
            class="object-cover h-full w-full rounded-lg"
            :src="responseData.avatar_url"
            alt="User Avatar"
          />
        </div>
        <div class="mb-10 mx-5">
          <!-- DETALLES -->
          <div class="flex flex-wrap pt-4 mt-24 xs:mt-0 mb-5 xs:ml-36 lg:ml-40">
            <div
              class="md:text-md text-sm m-2 text-slate-300 bg-slate-900 inline-flex px-6 gap-4 py-2 rounded-xl"
            >
              <p class="border-r pr-6 border-slate-600 py-1 text-slate-600">
                Followers
              </p>
              <p class="py-1 pl-1">{{ responseData.followers }}</p>
            </div>
            <div
              class="md:text-md text-sm m-2 text-slate-300 bg-slate-900 inline-flex px-6 gap-4 py-2 rounded-xl"
            >
              <p class="border-r pr-6 border-slate-600 py-1 text-slate-600">
                Following
              </p>
              <p class="py-1 pl-1">{{ responseData.following }}</p>
            </div>
            <div
              class="md:text-md text-sm m-2 text-slate-300 bg-slate-900 inline-flex px-6 gap-4 py-2 rounded-xl"
            >
              <p class="border-r pr-6 border-slate-600 py-1 text-slate-600">
                Location
              </p>
              <p class="py-1 pl-1">{{ responseData.location }}</p>
            </div>
          </div>
          <!-- NOMBRE Y DESCRIPCION -->
          <div class="ml-2">
            <p class="text-4xl pb-2">{{ responseData.login }}</p>
            <p class="text-md text-slate-300">{{ responseData.bio }}</p>
          </div>
        </div>
        <!-- TARJETAS -->
        <div
          class="md:grid-cols-2 md:grid flex flex-col justify-center gap-5 pb-5 mx-5"
        >
          <template v-if="repoUser && repoUser.length > 0">
            <template
              v-for="rep in repoUser.slice(0, all ? repoUser.length : 6)"
              :key="rep.id"
            >
              <a
                :href="rep.html_url"
                class="p-4 custom-gradient rounded-xl w-full block"
              >
                <h1 class="text-xl pb-2">{{ rep.name }}</h1>
                <p class="font-thin mb-3 texto">{{ rep.description }}</p>
                <section
                  class="flex gap-5 items-center justify-start flex-wrap"
                >
                  <div v-if="rep.license" class="flex gap-2">
                    <img src="/Chield_alt.svg" />
                    <p>{{ rep.license.name }}</p>
                  </div>
                  <div v-if="rep.stargazers_count" class="flex gap-2">
                    <img src="/Star.svg" />
                    <p>{{ rep.stargazers_count }}</p>
                  </div>
                  <div v-if="rep.forks_count" class="flex gap-2">
                    <img src="/Nesting.svg" />
                    <p>{{ rep.forks_count }}</p>
                  </div>
                  <div class="text-sm font-thin">
                    Update {{ differenceTime(rep.pushed_at) }} ago
                  </div>
                </section>
              </a>
            </template>
          </template>
          <template v-else>
            <p>No repositories found</p>
          </template>
        </div>
        <p v-if="!all" class="text-center flow-root py-5">
          <span
            @click="showAllRepository"
            class="hover:text-slate-400 cursor-pointer"
            >View all repository</span
          >
        </p>
      </section>
    </section>
  </main>
</template>
<style scoped>
.position {
  top: -50px;
}
.custom-gradient {
  background: linear-gradient(to right, #111729, #1d1b48);
}
.texto {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
main {
  min-height: 100vh;
  width: 100%;
}
</style>