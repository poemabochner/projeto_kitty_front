<template>
  <div class="login has-text-weight-semibold">
    <div class="login__superior px-5 py-3 is-flex is-align-items-center" style="gap: 1rem;">
      <img class="login__logo" src="@/assets/images/logo.png" />
      <p class="is-size-2">Faça seu login como:</p>
    </div>
    <div class="login__inferior">
      <div class="is-flex" style="gap: 5rem; padding: 4rem;">
        <a class="login__inferior-link p-3 mb-6 has-text-centered" @click="$router.push('/ingredientes')">
          <img class="login__inferior-image" src="@/assets/images/adm.jpg" />
          <p class="link-text">administrador</p>
        </a>
        <a class="login__inferior-link p-4 mb-6 has-text-centered" @click="$router.push('/cliente')">
          <img class="login__inferior-image" src="@/assets/images/cliente.jpg" />
          <p class="link-text">cliente</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginComponent',

  methods: {
  }
}
</script>

<style scoped>
.login {
  width: 33rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.login__superior {
  background-color: var(--cor-principal);
  border-radius: 10px 10px 0px 0px;
}

.login__logo {
  width: 100px;
}

.login__inferior {
  background-color: var(--rosa-claro);
}

.login__inferior-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--branco);
  background-color: var(--cor-principal);
  border-radius: 10px;
  padding: 1rem;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.login__inferior-link:hover {
  background-color: var(--cor-hover);
}

.login__inferior-image {
  width: 150px;
  border-radius: 100%;
  margin-bottom: 0.5rem;
  transition: filter 0.3s ease;
}
</style>
