---
title: 'TypeScript Guide'
---

# TypeScript Integration

Vue 3 Select Component is built with TypeScript to provide complete type safety and excellent IDE support through autocompletion and type checking.

## Understanding generic types

This component leverages Vue 3.3's [Generics](https://vuejs.org/api/sfc-script-setup.html#generics) feature for enhanced type flexibility.

Generics enable type reusability across different data types, making the component highly adaptable to various use cases.

The core `Option` type demonstrates this through its generic implementation:

```ts
type Option<T> = {
  label: string;
  value: T;
  disabled?: boolean;
};
```

## Configuring value types

::: info
Please review the [`:options` prop](/props#options) documentation first.
:::

While the default type for `option.value` is `string`, you can specify different types like `number`. Import and extend the `Option` type with your preferred generic type:

```vue
<script setup lang="ts">
import type { Option } from "vue3-select-component";
import { ref } from "vue";
import VueSelect from "vue3-select-component";

// Specify number as the value type
type UserOption = Option<number>;

const selectedUser = ref<number>();

const userOptions: UserOption[] = [
  { label: "Alice", value: 1 },
  { label: "Bob", value: 2 },
  { label: "Charlie", value: 3 },
  // ❌ - Type error: string is not assignable to number
  { label: "David", value: "a string" },
];
</script>

<template>
  <VueSelect
    v-model="selectedUser"
    :options="userOptions"
    placeholder="Pick a user"
  />
</template>
```

## Extending option properties

The `Option` type can be extended with additional properties while maintaining type safety throughout slots and props:

```vue
<script setup lang="ts">
import type { Option } from "vue3-select-component";
import { ref } from "vue";
import VueSelect from "vue3-select-component";

// Extend Option type with username
type UserOption = Option<number> & { username: string };

const selectedUser = ref<number>();

const userOptions: UserOption[] = [
  { label: "Alice", value: 1, username: "alice15" },
  { label: "Bob", value: 2, username: "bob01" },
  { label: "Charlie", value: 3, username: "charlie20" },
  { label: "David", value: 4, username: "david30" },
];
</script>

<template>
  <VueSelect
    v-model="selectedUser"
    :options="userOptions"
    :get-option-label="option => `${option.label} (${option.username})`"
    placeholder="Pick a user"
  >
    <template #option="{ option }">
      <span>{{ option.label }} - {{ option.username }}</span>
    </template>
  </VueSelect>
</template>
```

## `v-model` type validation

The component enforces type consistency between `option.value` and `v-model`:

```vue
<script setup lang="ts">
import type { Option } from "vue3-select-component";
import { ref } from "vue";
import VueSelect from "vue3-select-component";

type UserOption = Option<number>;

// ❌ Incorrect type - should be ref<number>()
const selectedUser = ref<string>();

const userOptions: UserOption[] = [
  { label: "Alice", value: 1 },
  { label: "Bob", value: 2 },
  { label: "Charlie", value: 3 },
];
</script>

<template>
  <!-- Type error: string type conflicts with number type -->
  <VueSelect
    v-model="selectedUser"
    :options="userOptions"
    placeholder="Pick a user"
  />
</template>
```

## Custom value mapping

::: warning
Using `getOptionValue` and `getOptionLabel` props bypasses component type-safety. Use these as a last resort.
:::

When using custom label/value functions, keep in mind:

- Don't type local options array as `Option<T>[]`
- Cast options to `Option<T>[]` at the component level

Example implementation:

```vue
<script setup lang="ts">
import type { Option } from "vue3-select-component";

const activeRole = ref<string>("");

const roleOptions = [
  { id: "Admin", key: "admin" },
  { id: "User", key: "user" },
  { id: "Guest", key: "guest" },
];
</script>

<template>
  <VueSelect
    v-model="activeRole"
    :options="(roleOptions as unknown as Option<string>[])"
    :is-multi="false"
    :get-option-label="option => (option.id as string)"
    :get-option-value="option => (option.key as string)"
    placeholder="Pick a role"
  />
</template>
```
