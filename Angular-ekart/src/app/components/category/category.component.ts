import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/Category.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

  @Input() categories: any[] = [];
 
  // constructor(private categoryService:CategoryService) { }



}
