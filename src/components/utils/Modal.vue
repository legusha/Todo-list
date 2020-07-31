<template>
  <div
    :class="{'modal-wrap-active': active}"
    @click="$emit('close')"
    class="modal-wrap"
  >
    <div class="container d-flex align-center">
      <div class="modal">
        <div class="modal-content border-secondary container">
          <div
            class="modal-header text-white d-flex align-center justify-between bg-secondary p-3">
            <slot name="header"></slot>
            <span
              class="close"
              @click="$emit('close')"
            >
          &times;
        </span>
          </div>
          <div class="modal-body bg-white p-3">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer text-white bg-secondary p-3">
            <slot name="footer"></slot>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/variables";

  .modal-wrap {
    height: 100%;
    background-color: rgba(52, 58, 74, 0.7);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: none;
    cursor: pointer;
    .container {
      height: 100%;
    }
    .modal {
      cursor: initial;
      width: 100%;
    }
    .modal-content {
      position: relative;
      margin: auto;
      padding: 0;
      box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);;
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.4s;
      animation-name: animatetop;
      animation-duration: 0.4s
    }
    @-webkit-keyframes animatetop {
      from {
        top: 50%;
        transform: translateY(-50%);
        opacity:0
      }
      to {
        top:0;
        opacity:1
      }
    }
    @keyframes animatetop {
      from {
        top: 50%;
        transform: translateY(-50%);
        opacity:0
      }
      to {
        top:0;
        opacity:1
      }
    }
    .close {
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: $white;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .modal-wrap-active {
    display: block;
  }
</style>
