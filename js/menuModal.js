class BulmaModal {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.clodeData();
  }

  show() {
    this.elem.classList.toggle('is-active');
    this.onShow();
  }

  close() {
    this.elem.classList.toggle('is-active');
    this.onClose();
  }

  clodeData() {
    const modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background");
    const that = this;
    modalClose.forEach((e) => {
      e.addEventListener('click', () => {
        that.elem.classList.toggle('is-active');

        const event = new Event('modal:close');

        that.elem.dispatchEvent(event);
      });
    });
  }

  onShow() {
    const event = new Event('modal:show');

    this.elem.dispatchEvent(event);
  }

  onClose() {
    const event = new Event('modal:close');

    this.elem.dispatchEvent(event);
  }

  addEventListener(event, callback) {
    this.elem.addEventListener(event, callback);
  }
}

const btn = document.querySelector('.openPop');
const btn2 = document.querySelector('.openPop2');
const btn3 = document.querySelector('.openPop3');
const btn4 = document.querySelector('.openPop4');
const mdl = new BulmaModal('#myModal');
const md2 = new BulmaModal('#myModal2');

btn.addEventListener('click', () => {
  mdl.show();
});

btn2.addEventListener('click', () => {
  mdl.show();
});

btn3.addEventListener('click', () => {
  md2.show();
});

btn4.addEventListener('click', () => {
  md2.show();
})