export interface Product {
  id:number,
  name:string,
  category_id:number,
  image_path?:string,
  description:string,
  stock:number,
  price:number,
  active:number
}
