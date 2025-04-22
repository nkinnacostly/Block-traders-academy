import React from "react";

interface LoadingProps {
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingProps> = ({ className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="w-8 h-8 border-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
  </div>
);

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
);

export const CardSkeleton: React.FC = () => (
  <div className="p-4 space-y-3 border rounded-lg">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="space-y-2">
    {Array.from({ length: rows }).map((_, i) => (
      <Skeleton key={i} className="h-12 w-full" />
    ))}
  </div>
);
