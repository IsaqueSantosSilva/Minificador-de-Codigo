import { Component } from '@angular/core';

@Component({
  selector: 'app-js-minifier',
  templateUrl: './js-minifier.component.html',
  styleUrls: ['./js-minifier.component.scss'],
})
export class JsMinifierComponent {
  isDisabled = true;

  minify(input: any, output: any) {
    if (input.value != '') {
      output.value = input.value
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace(/\s/g, '')
        // .replace(/\s*(?!<\")\/\*[^\*]+\*\/(?!\")\s*/, '');
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

  downloadAsJs(input: any) {
    if (input.value != '') {
      var a = document.body.appendChild(document.createElement('a'));
      a.download = 'style.css';
      a.href = 'data:text/css,' + encodeURIComponent(input.value);
      a.click();
    }
  }

}
