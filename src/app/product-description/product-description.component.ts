import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css1']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      response => this.albumInfo = response
    )
  }

}
