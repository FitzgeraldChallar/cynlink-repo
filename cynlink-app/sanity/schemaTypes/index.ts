import { type SchemaTypeDefinition } from 'sanity'
import {categoryType} from "./categoryType";
import {blockContentType} from "./blockContentType";
import {authorType} from "./authorType";
import {productType} from "./productType";
import {orderType} from "./orderType";
import {brandType} from "./brandTypes";
import {blogType} from "./blogType";
import {blogCategoryType} from "./blogCategoryType";
import {addressType} from "./addressType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType, 
    blockContentType, 
    productType, 
    orderType, 
    brandType, 
    blogType, 
    blogCategoryType, 
    addressType, 
    authorType
  ],
};
