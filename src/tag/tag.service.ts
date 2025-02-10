import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['nest-js', 'next-js', 'react', 'react-native', 'redux'];
  }
}
