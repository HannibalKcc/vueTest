class MyScroll {
  constructor (tarElement) {
    // 变量
    this.tarWrapper = document.querySelector(tarElement);
    this.tarContent = this.tarWrapper.querySelector('.content');
    this.switch = false;
    this.x = 0;
    this.y = 0;
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;

    // 函数
    this.initEvent();
  }

  initEvent () {
    this.tarWrapper.addEventListener('touchstart', this.evnetStart.bind(this));
    this.tarWrapper.addEventListener('mousedown', this.evnetStart.bind(this));
    this.tarWrapper.addEventListener('touchmove', this.eventMove.bind(this));
    this.tarWrapper.addEventListener('mousemove', this.eventMove.bind(this));
    window.addEventListener('touchend', this.eventEnd.bind(this));
    window.addEventListener('mouseup', this.eventEnd.bind(this));
  }

  evnetStart (e) {
    this.switch = true;
    this.startX = e.pageX;
    this.startY = e.pageY;
  }

  eventMove (e) {
    if (!this.switch) return;
    e.preventDefault(); // 阻止文字的选中、图片的拖拽、滚动条等默认事件
    let [deltaX, deltaY] = [e.pageX - this.startX, e.pageY - this.startY];
    this.startX = e.pageX;
    this.startY = e.pageY;
    let newX, newY; // eslint-disable-line
    newX = this.x + deltaX;  // eslint-disable-line
    newY = this.y + deltaY;
    if (newY >= -this.tarContent.clientHeight && newY <= 0) {
    } else {
      newX = this.x + deltaX / 3;  // eslint-disable-line
      newY = this.y + deltaY / 3;
    }
    this.tarContent.style.transform = `translate(0px, ${newY}px) translateZ(0px)`;
    this.x = newX;
    this.y = newY;
  }

  eventEnd (e) {
    this.switch = false;
    // 根据move的速率计算出惯性移动量,当惯性动量超出范围后计算反向动量、回弹动画
  }
}

export default MyScroll;
