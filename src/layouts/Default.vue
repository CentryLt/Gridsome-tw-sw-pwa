<template>
  <div class="layout font-sans text-gray-600 leading-normal">
    <header class="header">
      Welcome to the new OutpostV
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style src="../main.css" />

