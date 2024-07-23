export class ScrollLock {
    private _lockClass: string;
    private _scrollTop: null | string | number;
    private _fixedBlockElements: NodeListOf<Element>;
    
    constructor() {
      this._lockClass = 'scroll-lock';
      this._scrollTop = null;
      this._fixedBlockElements = document.querySelectorAll('[data-fix-block]');
    }
  
    _getScrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  
    _getBodyScrollTop() {
      return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
      );
    }
  
    disableScrolling() {
      this._scrollTop = document.body.dataset.scroll = document.body.dataset.scroll ? document.body.dataset.scroll + '' : this._getBodyScrollTop()  + '';
      if (this._getScrollbarWidth()) {
        document.body.style.paddingRight = `${this._getScrollbarWidth()}px`;
        this._fixedBlockElements.forEach((block) => { 
          (block as HTMLElement).style.paddingRight = `${this._getScrollbarWidth()}px`;
        });
      }
      document.body.style.top = `-${this._scrollTop}px`;
      document.body.classList.add(this._lockClass);
    }
  
    enableScrolling() {
      document.body.classList.remove(this._lockClass);
      if(document.body.dataset.scroll) window.scrollTo(0, +document.body.dataset.scroll);
      document.body.style.paddingRight = '';
      document.body.style.top = '';
      this._fixedBlockElements.forEach((block) => {
        (block as HTMLElement).style.paddingRight = '';
      });
      document.body.removeAttribute('data-scroll');
      this._scrollTop = null;
    }
  }
  