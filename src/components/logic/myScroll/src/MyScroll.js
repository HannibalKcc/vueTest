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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.startX = e.pageX;
    this.startY = e.pageY;
=======
>>>>>>> 303dd22... 1，进一步编写scroll
=======
    this.startX = e.pageX;
    this.startY = e.pageY;
>>>>>>> e37e3f2... 1，myScroll->自制滚动条基本功能完成，但是还有很多细节可以研究。比如惯性滚动
    let newX, newY; // eslint-disable-line
    newX = this.x + deltaX;  // eslint-disable-line
    newY = this.y + deltaY;
    if (newY >= -this.tarContent.clientHeight && newY <= 0) {
<<<<<<< HEAD
    } else {
      newX = this.x + deltaX / 3;  // eslint-disable-line
      newY = this.y + deltaY / 3;
    }
    this.tarContent.style.transform = `translate(0px, ${newY}px) translateZ(0px)`;
    this.x = newX;
    this.y = newY;
=======
    if (this.moveY >= -this.tarContent.clientHeight && this.moveY <= 0) {
      this.moveX = deltaX;  // eslint-disable-line
      this.moveY = deltaY;
=======
>>>>>>> 303dd22... 1，进一步编写scroll
    } else {
      newX = this.x + deltaX / 3;  // eslint-disable-line
      newY = this.y + deltaY / 3;
    }
<<<<<<< HEAD
    this.tarContent.style.transform = `translate(0px, ${this.moveY}px) translateZ(0px)`;
>>>>>>> 02a9c3a... 1，scroll
=======
    this.tarContent.style.transform = `translate(0px, ${newY}px) translateZ(0px)`;
<<<<<<< HEAD
>>>>>>> 303dd22... 1，进一步编写scroll
=======
    this.x = newX;
    this.y = newY;
>>>>>>> e37e3f2... 1，myScroll->自制滚动条基本功能完成，但是还有很多细节可以研究。比如惯性滚动
  }

  eventEnd (e) {
    this.switch = false;
<<<<<<< HEAD
<<<<<<< HEAD
    // 根据move的速率计算出惯性移动量,当惯性动量超出范围后计算反向动量、回弹动画
=======
    let reg = /\d+/g;
    let arrXY = this.tarContent.style.transform.match(reg);
    this.x = arrXY[0] - 0;
    this.y = arrXY[1] - 0;
>>>>>>> 303dd22... 1，进一步编写scroll
=======
    // 根据move的速率计算出惯性移动量,当惯性动量超出范围后计算反向动量、回弹动画
>>>>>>> e37e3f2... 1，myScroll->自制滚动条基本功能完成，但是还有很多细节可以研究。比如惯性滚动
  }
}

export default MyScroll;
