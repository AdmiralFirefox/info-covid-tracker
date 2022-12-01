import { Component, ErrorInfo } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import BounceLoader from "react-spinners/BounceLoader";
import styles from "../../styles/errorboundary/ErrorBoundary.module.scss";

interface ErrorProps {
  children: React.ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps | Readonly<ErrorProps>) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state so the next render will show the fallback UI
  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles["error-boundary-wrapper"]}>
          <div className={styles["image-wrapper"]}>
            <Image
              src="/assets/error.png"
              alt="Error"
              width={100}
              height={100}
            />
          </div>

          <h1>Something went wrong!</h1>
          <p>
            The data must be caching. Please wait in a short while and try again
            later.
          </p>

          <div className={styles["loader-wrapper"]}>
            <BounceLoader
              color="#ffffff"
              size={65}
              aria-label="Loading Spinner"
            />
          </div>

          <Button
            variant="contained"
            onClick={() => this.setState({ hasError: false })}
            sx={{
              background: "hsl(200, 18%, 26%)",
              color: "#ffffff",
              marginTop: "3em",
              padding: "1em",
              fontSize: "1rem",

              "&:hover": {
                background: "hsl(200, 18%, 35%) ",
              },
            }}
          >
            Reload Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
