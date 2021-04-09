/*
  이벤트 캡쳐는 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식.
 */

var divs = document.querySelectorAll("div");
divs.forEach(function(div) {
  div.addEventListener("click", logEvent, {
    capture: true // default 값은 false입니다.
  });
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}

/*
  addEventListener() API에서 옵션 객체에 capture:true를 설정해주면 된다.
  그러면 해당 이벤트를 감지하기 위해 이벤트 버블링과 반대 방향으로 탐색한다. 
  one -> two -> three
 */

// event.stopPropagation()
function logEvent(evnet) {
  event.stopPropagation();
}

/*
  "난 이렇게 복잡한 이벤트 전달 방식 알고 싶지 않고, 그냥 원하는 화면 요소의 이벤트만 신경 쓰고 싶다."
  위 API는 해당 이벤트가 전파되는 것을 막는다. 
  따라서, 이벤트 버블링의 경우에는 클릭한 요소의 이벤트만 발생시키고, 상위 요소로 이벤트 전달하는 것을 방해한다.
  이벤트 캠쳐의 경우는 클릭한 요소의 최상위 요소의 이벤트만 동작시키고 하위 요소들로 이벤트를 전달하지 않는다. 

  위와 같이 logEvent 함수에 stopPropagation() API를 사용한다면 앞의 '이벤트 버블링 예제'와 '이벤트 캡쳐 예제'에서
  사용한 코드 기준으로 각각 'three'와 'one'이 찍힌다.
 */
