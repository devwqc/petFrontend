import { httpClient } from '@/apis/httpClient';

interface ReviewData {
  productId: number;
  purchaseProductId: number;
  rating: number;
  description: string;
  reviewImages: string;
}

// 리뷰 작성
export async function postReview(data: ReviewData) {
  try {
    const response = await httpClient().post('review/new', data);
    return response;
  } catch (error) {
    throw error;
  }
}

// 상세보기 리뷰 보여주기
export async function name(data: any) {}
