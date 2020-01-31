console.log(2);
$.widget( 'app.selectmenu', $.ui.selectmenu, {
  _drawButton: function() {
    this._super();
    var selected = this.element
    .find( '[selected]' )
    .length,
        placeholder = this.options.placeholder;

    if (!selected && placeholder) {
      this.buttonItem.text(placeholder);
    }
  }
});