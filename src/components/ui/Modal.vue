<template>
  <div
    :class="{'modal-wrap-active': active}"
    class="modal-wrap"
  >
    <div @click.stop="$emit('close')" class="modal-bg"></div>
    <div class="container d-flex align-center">
      <div class="modal">
        <div class="modal-content border-secondary container">
          <div
            :class="classMap"
            class="modal-header text-black d-flex align-center justify-between p-3"
          >
            <slot name="header"></slot>
            <span
              class="close"
              @click="$emit('close')"
            >
          &#10539;
        </span>
          </div>
          <div class="modal-body text-black bg-white p-3">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer text-black bg-secondary p-3">
            <slot name="footer"></slot>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { classDynamic } from '@/mixin'
export default {
  name: 'Modal',
  mixins: [classDynamic],
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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: none;
    cursor: pointer;
    .modal-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(52, 58, 74, 0.7);
    }
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
      background-color: $secondary;
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
      color: $danger;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .modal-wrap-active {
    display: block;
  }
  .modal-header, .modal-footer {
    min-height: 75px;
  }
</style>
