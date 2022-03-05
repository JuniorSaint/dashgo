export interface BaseUserProps {
  id: string;
  userName: string;
  userEmail: string;
  password: string;
  passwordConfirm: string;
  userImage?: string;
  isActive: boolean;
  userType: string;
  createdAt: Date;
}

export type UserListProps = Omit<BaseUserProps, 'password' | 'passwordConfirm'>;
export type UserProps = Omit<BaseUserProps, 'id' | 'createdAt'>;
