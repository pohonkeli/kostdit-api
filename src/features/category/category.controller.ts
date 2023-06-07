import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { DeleteCategoryDto } from './dto/delete-category.dto';
import { GetCategoryDto } from './dto/get-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  @HttpCode(200)
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const result = this.categoryService.create(createCategoryDto);
    return result;
  }

  @Post('/getAll')
  @HttpCode(200)
  async find(@Body() getCategoryDto: GetCategoryDto): Promise<Category[]> {
    const result = await this.categoryService.find(getCategoryDto);
    return result;
  }

  @Post('/update')
  @HttpCode(200)
  async update(
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const result = await this.categoryService.update(updateCategoryDto);
    console.log(result);
    return result;
  }

  @Post('/delete')
  @HttpCode(200)
  async remove(
    @Body() deleteCategoryDto: DeleteCategoryDto,
  ): Promise<Category> {
    const result = await this.categoryService.remove(deleteCategoryDto);
    return result;
  }
}
