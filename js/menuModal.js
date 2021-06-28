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
const mdl = new BulmaModal('#myModal');

btn.addEventListener('click', () => {
  mdl.show();
});

btn2.addEventListener('click', () => {
  mdl.show();
});