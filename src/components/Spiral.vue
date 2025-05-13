<template>
  <div class="ringcontainer">
    <div class="ring ring1">
      <div class="ring ring2">
        <div class="ring ring3">
          <div class="ring ring4">
            <div class="ring ring5">
              <div class="ring ring6">
                <div class="ring ring7">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spiral'
}
</script>

<style scoped lang="scss">
  .ringcontainer {
    position: absolute;
    left: 50%;
  }
  .ring {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    box-shadow: inset 0px 0px 20px 0px rgba(0,0,0,0.25);
    cursor: pointer;
  }
  .ring1 {
    background-color: #feb42f;
    height: 600px;
    width: 600px;
    animation: spin1 6s linear;
    animation-iteration-count: infinite;
    animation-delay: -1s;
  }
  .ring2 {
    background-color: #ff8530;
    height: 540px;
    width: 540px;
    animation: spin2 7s linear;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-delay: -2s;
  }
  .ring3 {
    background-color: #eb3736;
    height: 480px;
    width: 480px;
    animation: spin3 8s linear;
    animation-iteration-count: infinite;
    animation-delay: -3s;
  }
  .ring4 {
    background-color: #de4f61;
    height: 400px;
    width: 400px;
    animation: spin4 9s linear;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-delay: -4s;
  }
  .ring5 {
    background-color: #714985;
    height: 340px;
    width: 340px;
    animation: spin5 10s linear;
    animation-iteration-count: infinite;
    animation-delay: -5s;
  }
  .ring6 {
    background-color: #454689;
    height: 250px;
    width: 250px;
    animation: spin6 11s linear;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-delay: -6s;
  }
  .ring7 {
    background-color: #404040;
    height: 120px;
    width: 120px;
    animation: spin7 4s linear;
    animation-iteration-count: infinite;
    animation-delay: -7s;
  }
</style>

