import React from "react";
import Button from "./button/button";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            Something went wrong
          </h2>
          <p className="mb-4 text-gray-600">{this.state.error?.message}</p>
          <Button
            btnText="Try again"
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className=""
            disabled={false}
            loading={false}
          />
        </div>
      );
    }

    return this.props.children;
  }
}
