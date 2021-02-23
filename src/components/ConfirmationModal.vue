<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{title}}</h5>
            </div>
            <div class="modal-body">
              <p>{{question}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="cancel-btn" @click="onClickCancel">
                Cancelar
              </button>
              <button type="submit" @click="onClickConfirm" class="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    title: String,
    question: String
  },
  methods: {
    onClickCancel() {
      this.$emit("onCancel");
    },
    onClickConfirm() {
      this.$emit("onConfirm");
    },
  },
};
</script>
<style lang=""></style>
