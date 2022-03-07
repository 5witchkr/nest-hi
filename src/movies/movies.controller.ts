import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "this will return all movies";
    }

    @Get('search')
    search(@Query("year") seachingYear: string){
        return `We are searching for a movie with~${seachingYear} `;
    }

    @Get(":id")
    getOne(@Param("id") movieid: string){
        return `one ${movieid}`;
    }

    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete(':id')
    remove(@Param("id") movieid: string){
        return 'delete';
    }

    @Patch(':id')
    patch(@Param('id') movieid: string, @Body() updateData){
        return {
            updateMovie: movieid,
            ...updateData,
        };
    }
}
