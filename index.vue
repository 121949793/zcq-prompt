  <script setup >
import { content, typeState, timeOut, typeData } from "./setData.js";
let colorState = typeData[typeState.value]; //弹出框颜色 不同状态 不同颜色
let time = timeOut.value; //毫秒数
</script>

  <template>
  <div class="loader">
    <div 
        :style="[
        {backgroundColor:`rgba(${colorState[0]})`},
        {color:`rgba(${colorState[1]})`},
        {animationDuration:`${time}ms`}
        ]" 
      class="box">{{content}}</div>
  </div>
</template>
 <style>

.box {
  height: 40;
  text-align: center;
  line-height: 40px;
  margin: auto;
  padding: 0 15px 0 15px;
  margin-bottom: 5px;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  animation: slidein 3s 1;
  
  z-index: 999;
}
@keyframes slidein {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    15% {
      opacity: 1;
      transform: scale(1);
    }
    80% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.8);
    }
  }

</style>
 