import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-qr-code-generator';
  input: any;

  qrImage: string | undefined;
  constructor() {
   

    
  }

  submitGenerateQr(){
     // With async/await
     const generateQR = async (text: any) => {
      try {
        this.qrImage = await QRCode.toDataURL(text)
        console.log(await QRCode.toDataURL(text));
      } catch (err) {
        alert(err)
        console.error(err);
      }
    };

    generateQR(this.input);
  }
}
