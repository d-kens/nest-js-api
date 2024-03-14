import { IsEnum, IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional} from "class-validator";

export class CreateProductDto {
    @IsString() 
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsOptional()
    description: string;

    @IsEnum(["men", "women", "children", "pets"], {
        message: 'Valid product category required'
    })
    category: "men" | "women" | "children" | "pets";

    @IsNumber()
    stock: number;
    
    @IsBoolean()
    isAvailable: boolean;
}