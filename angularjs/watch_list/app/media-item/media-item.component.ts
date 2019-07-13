import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
    selector: 'media-item',
    templateUrl: 'media-item.component.html',
    styleUrls: [
        'media-item.component.css'
    ]
})

export class MediaItemComponent{
    //When the input parameter is given, this name will be used for data-binding in html
    @Input('mediaItemWatched') mediaItem;

    @Output() delete = new EventEmitter();

    onDelete(){
        this.delete.emit(this.mediaItem);
    }
}