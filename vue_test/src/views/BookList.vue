<template>
  <div>
    <h1>本の一覧</h1>
    <ul>
      <li 
        @click="showBookDetail(book.id)" 
        v-for="book in books" 
        :key="book.id">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      bookIndex: -1,
      books: [
        {id:1, title: 'タイトル1', contents: '本の内容1'},
        {id:2, title: 'タイトル2', contents: '本の内容2'},
        {id:3, title: 'タイトル3', contents: '本の内容3'},
      ]
    }
  },
  showBookDetail(id) {
    console.log(id);
  }
}
</script>

<style>

</style>