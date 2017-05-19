import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  private $element: any;
  private input: any;
  private reader: any;
  @Input() image: any;
  @Input() multiple?: boolean = false;
  @Output() imageChange = new EventEmitter<object>();

  constructor(el: ElementRef) {
    console.log("CONSTRUCTOR", this.image);
    this.$element = $(el.nativeElement);
  }

  getArchives(event, element) {
    const self = this;
    const files = event.originalEvent.target.files || event.originalEvent.dataTransfer.files;
    let count = 1;
    $.each(files, function () {
      if (this.type.match('image.*') !== null && count === 1) {
        self.showImage(this);
        count += 1;
      }
    });
  }

  showImage(image) {
    const self = this;
    self.reader = self.generateReader(image);
    self.reader.readAsDataURL(image);
  }

  generateReader(file) {
    const self = this;
    const reader = new FileReader();
    reader.onload = (function (file) {
      console.log("onliad", self.image);
      return function (e) {
        self.image = {
          source: e.target.result,
          name: file.name,
          file: file
        };

        console.log("afterLoad", self.image);

        self.imageChange.emit(self.image);
      };
    })(file);

    return reader;
  }

  ngOnInit() {

    console.log("NgInit", this.image);
    const self = this;
    self.input = this.$element.find('input');

    self.input.on('change', function (e) {
      self.getArchives(e, null);
    });

    self.$element.find('div').on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
      e.preventDefault();
      e.stopPropagation();
    })
      .on('dragover dragenter', function () {
        self.$element.find('div').addClass('is-dragover');
      })
      .on('dragleave dragend drop', function () {
        self.$element.find('div').removeClass('is-dragover');
      })
      .on('drop', function (e) {
        self.getArchives(e, self.$element.find('div'));
      })
      .on('click', function (e) {
        self.input.trigger('click');
      });
  }

}
