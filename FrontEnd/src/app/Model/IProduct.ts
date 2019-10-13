export interface IProductQuery {
    title: string;
    variants: Array<Variant>;
    id: string;
}

export interface VariantOption {
  id: string;
  displayValue: string;
  isSelected: boolean;
}

export interface Variant {
   id: string;
   name: string;
   displayValue: string;
   options: Array<VariantOption>;
   controlType: ControlType;
   isRequired: boolean;
}

export interface IProductCommand {
    productId: string;
    variantChosen: Array<string>;
}

export enum ControlType  {
   Select,
   Checkbox,
   ColorPicker,
}

export interface DummyProduct {
  name: string;
  amount: number;
  id: string;
}

