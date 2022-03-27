import { AxiosService } from './AxiosService';

export interface IPost {
  _id: string
  title: string
  text?: string
  image: string
  date: string
  tag: {
    label: string,
    color: string,
  }
}

interface IPostResponse {
  status: string
  data: IPost[]
}

type GetPostRequest = Pick<IPost, '_id'>;

export class PostService extends AxiosService {
  private static instance: PostService;

  public static getInstance(): PostService {
    if (!PostService.instance) {
      PostService.instance = new PostService();
    }
    return PostService.instance;
  }

  getPost = async (specs?: GetPostRequest): Promise<IPost[]> => {
    try {
      const url: string = '/posts';
      const request = { params: { id: specs?._id } };
      const response: IPostResponse = await this.axios.get(url, request ?? {});
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  updatePost = async (specs: any): Promise<any> => {
    try {
      const url: string = '/posts';
      const response: any = await this.axios.put(url, {}, specs);
      return response;
    } catch (error) {
      throw error;
    }
  };

}

export default PostService;
