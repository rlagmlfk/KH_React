function init() {
  const name = "Mozilla"; // name은 init에 의해 생성된 지역변수
  function displayName() {
    // displayName()은 내부함수이며 클로저이다.
    console.log(name); // 부모함수에서 선언된 변수 사용
  }
  displayName();
}
init();
