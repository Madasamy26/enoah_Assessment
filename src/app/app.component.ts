import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  images: any = [];
  selectedFiles: any = [];
  imagesMap = new Map<string, any>();
  files: any = [];
  counter = 0;
  title = "image-uploader";

  onChange(event: any, input: any) {
    this.files = [].slice.call(event.target.files);

    console.log(event);

    if (this.files) {
      this.files.map((f, index) => {
        var reader = new FileReader();
        this.selectedFiles[index] = f.name;
        reader.onload = (event: ProgressEvent) => {
          this.images[index] = (<FileReader>event.target).result;
          this.imagesMap.set(f.name, (<FileReader>event.target).result);
        };
        reader.readAsDataURL(f);
      });
    }

    input.value = this.selectedFiles.join(",");
  }

  changeOrder(event: any, input: any) {
    this.selectedFiles = input.value.split(",");
    // console.log("changed order" + this.selectedFiles.toString());
  }
  save(event: any, input: any) {
    alert("images uploading order ---> " + this.selectedFiles.toString());
    console.log("images" + this.selectedFiles.toString());
  }
}
