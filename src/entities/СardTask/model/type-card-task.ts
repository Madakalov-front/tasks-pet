export interface CardTaskProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  actionCompleted: () => void;
  actionDelete: () => void;
}
