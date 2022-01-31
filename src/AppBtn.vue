<template>
  <v-card>
    <v-card-title>
      <span v-text="title"></span>
         <v-text-field
                v-model="login"
                name="login"
                id="login"
                hint="Введите ваш логин"
                prepend-inner-icon="mdi-account"
                type="text"
              ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn @click="$emit('action-btn:clicked')" id="btn">
        Action
      </v-btn>
    </v-card-title>

    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
        data: () => ({
      login: "",
      password: "",
    }),
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  }
</script>