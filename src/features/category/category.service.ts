import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timestamp } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';
import { GetCategoryDto } from './dto/get-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const result = await this.categoriesRepository.save(createCategoryDto);
    return result;
  }

  async find(getCategoryDto: GetCategoryDto): Promise<Category[]> {
    const result = await this.categoriesRepository.find({
      where: {
        id: getCategoryDto.id,
        is_active: true,
      },
    });
    return result;
  }

  async update(updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    updateCategoryDto.modifiedDate = new Date().toISOString();
    const result = await this.categoriesRepository.save(updateCategoryDto);
    return result;
  }

  async remove(deleteCategoryDto: DeleteCategoryDto): Promise<Category> {
    deleteCategoryDto.is_active = false;
    const result = await this.categoriesRepository.save(deleteCategoryDto);
    return result;
  }
}
