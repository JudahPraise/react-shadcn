import React, { createContext, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  LineCheck,
  LineError,
  LineWarning,
  LineInfo,
  Spinner,
} from "@/components/icons";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AlertConfig {
  status: string;
  message: string;
  callback: () => void;
}

interface AlertConfirmConfig {
  status: string;
  title: string;
  description: string;
  onConfirm: () => void;
}

interface AlertLoadingConfig {
  message: string;
  didOpen: () => void;
}

export interface AlertContextType {
  showAlert: (config: AlertConfig) => void;
  showAlertConfirm: (config: AlertConfirmConfig) => void;
  showAlertLoading: (config: AlertLoadingConfig) => void;
  closeAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export default AlertContext;

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<AlertConfig | null>(null);
  const [alertConfirm, setAlertConfirm] = useState<AlertConfirmConfig | null>(
    null
  );
  const [alertLoading, setAlertLoading] = useState<AlertLoadingConfig | null>(
    null
  );

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (alert) {
      setIsOpen(!isOpen);
      const timer = setTimeout(() => {
        alert.callback();
        setIsOpen(false);
        setAlert(null);
      }, 1500);

      return () => clearTimeout(timer);
    }

    if (alertConfirm) {
      setIsOpen(!isOpen);
    }

    if (alertLoading) {
      setIsOpen(!isOpen);
      alertLoading.didOpen();
    }
  }, [alert, alertConfirm, alertLoading]);

  const value: AlertContextType = {
    showAlert: (config: AlertConfig) => setAlert(config),
    showAlertConfirm: (config: AlertConfirmConfig) => setAlertConfirm(config),
    showAlertLoading: (config: AlertLoadingConfig) => setAlertLoading(config),
    closeAlert: () => setIsOpen(false),
  };

  const getIcon = (status: string) => {
    switch (status) {
      case "success":
        return <LineCheck className="h-[80px] w-[80px] text-green-500" />;
      case "error":
        return <LineError className="h-[80px] w-[80px] text-red-500" />;
      case "info":
        return <LineInfo className="h-[80px] w-[80px] text-blue-500" />;
      case "warning":
        return <LineWarning className="h-[80px] w-[80px] text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <AlertContext.Provider value={value}>
      {children}

      {alert && (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent className="flex flex-col items-center justify-center pt-10 pb-12 bg-white rounded-lg shadow-lg max-w-sm w-full aspect-w-1 aspect-h-1">
            <AlertDialogTitle className="text-center flex-grow flex items-center justify-center">
              {getIcon(alert.status)}
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-2 text-center text-2xl">
              {alert.message}
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {alertConfirm && (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{alertConfirm.title}</AlertDialogTitle>
              <AlertDialogDescription>
                {alertConfirm.description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <Button
                variant="secondary"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  setAlertConfirm(null);
                  alertConfirm.onConfirm();
                }}
              >
                Yes, Continue
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {alertLoading && (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent className="flex flex-col items-center justify-center pt-10 pb-12 bg-white rounded-lg shadow-lg max-w-sm w-full aspect-w-1 aspect-h-1">
            <AlertDialogTitle className="text-center flex-grow flex items-center justify-center">
              <Spinner className="h-[80px] w-[80px] text-gray-500" />
            </AlertDialogTitle>
            <AlertDialogDescription className="mt-2 text-center ">
              <span className="text-2xl mb-5">Please wait ...</span>
              <br></br>
              <span>{alertLoading.message}</span>
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </AlertContext.Provider>
  );
};
