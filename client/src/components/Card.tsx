import Link from "next/link";
import {
  Card as ShadCard,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface CardProps {
  title: string;
  pageHref: string;
  children: React.ReactNode;
}

export default function Card({ title, children, pageHref }: CardProps) {
  return (
    <ShadCard className="w-[450px] h-[300px] hover:scale-105 transition duration-300 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="self-end">
        <Button size="lg" className="hover:scale-x-110 transition duration-300">
          <Link href={pageHref}>View</Link>
        </Button>
      </CardFooter>
    </ShadCard>
  );
}

export function SkeletonCard() {
  return (
    <Skeleton className="w-[450px] h-[300px] flex flex-col justify-between" />
  );
}
