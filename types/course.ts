export interface Video {
  id: string;
  name: string;
  image: string;
  url?: string;
  duration?: string;
}

export interface VideoProgress {
  user_id: string;
  course_id: string;
}

export interface PaymentData {
  status: number;
  data: {
    reference: string;
    authorization_url: string;
    access_code: string;
  };
}

export interface UserDetails {
  id: string;
  uuid: string;
  paid: "0" | "1";
  learners_level: "1" | "2";
}
