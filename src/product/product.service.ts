import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity'; 
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) {}


    async findall(): Promise<Product[]> {
        return await this.productRepository.find()
    }


    async findOne(id: number): Promise<Product> {
        const product = await this.productRepository.findOne({ where: { id } });

        if(!product) {
            throw new NotFoundException(`Product with ${id} not found`);
        }

        return product;
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        return await this.productRepository.save(createProductDto);
    }

    async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
        const product = await this.productRepository.findOne({ where: { id } });

        if (!product) {
            throw new NotFoundException(`Product with ${id} not found`);
        }
    
        Object.assign(product, updateProductDto);
    
        await this.productRepository.save(product);
    
        return product;
    }

    async delete(id: number): Promise<Product> {
        const product = await this.productRepository.findOne({ where: { id } });

        if (!product) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }

        const deletedProduct = await this.productRepository.remove(product);
        
        return deletedProduct;
    }
}
