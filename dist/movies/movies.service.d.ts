import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): void;
    create(movieData: CreateMovieDto): Movie[];
    update(id: number, updateData: UpdateMovieDto): void;
}