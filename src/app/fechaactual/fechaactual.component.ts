import { Component} from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component ({
    selector: 'app-fechaactual',
    template: `
    <p>La cotización actual del dólar es de {{ dolareuro | euro }}</p>
    `,
    styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
    dolareuro: number = 0.88;
}
