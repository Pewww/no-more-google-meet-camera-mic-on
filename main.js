(function main() {
  window.addEventListener('load', () => {
    const voiceAndVideoBtns = document.querySelectorAll(`div[role="button"][data-is-muted]`);
    // * 카메라만 꺼지게 하고 싶을 경우: [aria-label^="카메라"][data-tooltip^="카메라"] 추가
    // * 마이크만 꺼지게 하고 싶을 경우: [aria-label^="마이크"][data-tooltip^="마이크"] 추가
    
    if (!voiceAndVideoBtns.length) {
      throw new Error('익스텐션의 기능을 이용할 수 없는 상태입니다.');
    }

    voiceAndVideoBtns.forEach(btn => {
      btn.click();
    });
  });
})();
