import { Toaster as Sonner } from "sonner";
import { CheckCircle2, XCircle, AlertTriangle, Info } from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <CheckCircle2 className="h-4 w-4 text-primary" />,
        error: <XCircle className="h-4 w-4 text-destructive" />,
        warning: <AlertTriangle className="h-4 w-4 text-amber-500" />,
        info: <Info className="h-4 w-4 text-primary" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          title: "group-[.toast]:text-foreground group-[.toast]:font-medium",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "group-[.toaster]:border-primary/30 group-[.toaster]:bg-primary/10",
          error:
            "group-[.toaster]:border-destructive/30 group-[.toaster]:bg-destructive/10",
          info:
            "group-[.toaster]:border-primary/30 group-[.toaster]:bg-primary/10",
          warning:
            "group-[.toaster]:border-amber-500/30 group-[.toaster]:bg-amber-500/10",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
