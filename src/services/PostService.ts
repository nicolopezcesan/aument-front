import { AxiosService } from './AxiosService';

export interface IPost {
  _id: string
  title: string
  text: string
  image: string
  tag: string
  date: string
}

export class PostService extends AxiosService {
  private static instance: PostService;

  public static getInstance(): PostService {
    if (!PostService.instance) {
      PostService.instance = new PostService();
    }
    return PostService.instance;
  }

  getPost = async (specs: any): Promise<IPost[]> => {
    try {
      const url: string = '/posts';
      const response: any = await this.axios.get(url, specs);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  createPost = async (specs: any): Promise<any> => {
    try {
      const url: string = '/posts';
      const response: any = await this.axios.post(url, specs, {});
      return response;
    } catch (error) {
      throw error;
    }
  };

}

export default PostService;
