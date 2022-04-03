import { Component } from '@angular/core';

@Component({
  selector: 'app-html-minifier',
  templateUrl: './html-minifier.component.html',
  styleUrls: ['./html-minifier.component.scss'],
})
export class HtmlMinifierComponent {
  constructor() {}

  isDisabled = true;

  minify(input: any, output: any) {
    if (input.value != '') {
      output.value = input.value
        .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, '')
        .replace(/\>\s*\</g, '><');
      this.isDisabled = false;
    }
    return;
  }

  selectAll(output: any) {
    console.log();
    output.select();
  }

  clear(input: any, output: any) {
    input.value = '';
    output.value = '';
    this.isDisabled = true;
  }

  copyToClipboard(output: any) {
    if (output.value != '') {
      output.setSelectionRange(0, 999999999999999999);
      navigator.clipboard.writeText(output.value);
    }
  }

  validate(input: any, element: any) {
    if (input.value === '') {
      element.style.cursor = 'not-allowed';
      element.style.backgroundColor = '#333';
      input.value = '';
    } else {
      element.style.cursor = 'pointer';
      element.style.backgroundColor = '#009688';
    }
  }

  downloadAsHtml(input: any) {
    if (input.value != '') {
      var a = document.body.appendChild(document.createElement('a'));
      a.download = 'index.html';
      a.href = 'data:text/html,' + input.value;
      a.click(); //Trigger a click on the element
    }
  }
}
