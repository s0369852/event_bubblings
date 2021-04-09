var divs = document.querySelectorAll("div");
divs.forEach(function(div) {
  div.addEventListener("click", logEvent);
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}

/*
  <div class="three"></div>를 클릭했을 떄 console 창을 보면 three, two, one
  이렇게 3개의 이벤트가 발생되는 것을 볼 수 있다.
  이유는 브라우저가 이벤트를 감지하는 방식 때문이다. 

  브라우저는 특정 화면 요소에서 이벤트가 발생했을 때 그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킨다.
  따라서, 클래스 명 three -> two -> one 순으로 클릭 이벤트가 작동한다. 

  여기서 주의.
  각 태그마다 이벤트가 등록되어 있기 때문에 상위 요소로 이벤트가 전달되는  것을 확인 할 수 있다.
  만약 이벤트가 특정 div 태그에만 달려 있다면 위와 같은 동작을 확인 할 수 없다. 

  이와 같은 하위에서 상위 요소로의 이벤트 전파 방식을 이벤트 버블링(Event Bubbling)이라고 한다. 
 */
